import {
  CHAT_ENDPOINT,
  DEFAULT_MODEL,
  HEALTH_ENDPOINT,
  MAX_MESSAGE_PAIRS,
  STORAGE_MODEL_KEY,
  SYLLABUS_PATH,
} from './config.js';
import { markdownToSafeHtml } from './markdown-math.js';
import { buildSystemPrompt } from './prompts.js';
import { streamChatCompletion } from './stream-client.js';

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export class ChatApp {
  constructor() {
    /** @type {Array<{role:'user'|'assistant', content:string}>} */
    this._turns = [];
    this._systemPrompt = '';
    this._systemReady = false;
    this._abort = null;
    this._busy = false;
    this._els = {};
    /** @type {ReturnType<typeof setTimeout> | null} */
    this._typesetTimer = null;
  }

  mount(root) {
    root.insertAdjacentHTML(
      'beforeend',
      `
<div id="chat-root" class="chat-root" aria-live="polite">
  <button type="button" class="chat-fab" id="chat-fab" aria-label="Open study chat" aria-expanded="false" title="Chat (⌘J / Ctrl+J)">
    <svg class="chat-fab-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
    <span class="chat-fab-label">Chat</span>
  </button>
  <div class="chat-backdrop" id="chat-backdrop" hidden aria-hidden="true"></div>
  <aside class="chat-panel" id="chat-panel" role="dialog" aria-label="Study chat" aria-modal="true" hidden>
    <header class="chat-header">
      <div class="chat-header-text">
        <h2 class="chat-title">Study chat</h2>
        <p class="chat-sub">Local Ollama · verify facts on official sites</p>
      </div>
      <div class="chat-header-actions">
        <span class="chat-status" id="chat-status" title="Ollama connection">…</span>
        <button type="button" class="chat-icon-btn" id="chat-clear" title="Clear conversation" aria-label="Clear conversation">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
        </button>
        <button type="button" class="chat-icon-btn chat-close-btn" id="chat-close" aria-label="Close chat">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
    </header>
    <div class="chat-model-row">
      <label class="chat-model-label" for="chat-model">Model</label>
      <input type="text" class="chat-model-input" id="chat-model" autocomplete="off" spellcheck="false" disabled/>
    </div>
    <div class="chat-disclaimer">Verify facts (especially schemes &amp; agencies) on official sites. Re-check critical math steps.</div>
    <div class="chat-messages" id="chat-messages" tabindex="-1"></div>
    <footer class="chat-footer">
      <div class="chat-input-wrap">
        <textarea class="chat-input" id="chat-input" rows="1" placeholder="Ask about the syllabus, a topic, or paste a question…" aria-label="Message"></textarea>
        <div class="chat-send-row">
          <button type="button" class="chat-btn chat-btn-secondary" id="chat-stop" disabled>Stop</button>
          <button type="button" class="chat-btn chat-btn-primary" id="chat-send">Send</button>
        </div>
      </div>
    </footer>
  </aside>
</div>`
    );

    this._els.root = document.getElementById('chat-root');
    this._els.fab = document.getElementById('chat-fab');
    this._els.backdrop = document.getElementById('chat-backdrop');
    this._els.panel = document.getElementById('chat-panel');
    this._els.messages = document.getElementById('chat-messages');
    this._els.input = document.getElementById('chat-input');
    this._els.send = document.getElementById('chat-send');
    this._els.stop = document.getElementById('chat-stop');
    this._els.close = document.getElementById('chat-close');
    this._els.clear = document.getElementById('chat-clear');
    this._els.status = document.getElementById('chat-status');
    this._els.model = document.getElementById('chat-model');

    this._els.model.value = localStorage.getItem(STORAGE_MODEL_KEY) || DEFAULT_MODEL;

    this._els.fab.addEventListener('click', () => this.open());
    this._els.backdrop.addEventListener('click', (e) => {
      if (e.target === this._els.backdrop) this.close();
    });
    this._els.close.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.close();
    });

    this._els.send.addEventListener('click', () => this._submit());
    this._els.stop.addEventListener('click', () => this._stopGeneration());
    this._els.clear.addEventListener('click', () => this._clearChat());
    this._els.model.addEventListener('change', () => {
      localStorage.setItem(STORAGE_MODEL_KEY, this._els.model.value.trim() || DEFAULT_MODEL);
    });

    this._els.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this._submit();
      }
    });

    document.addEventListener('keydown', (e) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        if (this._els.panel.hidden) this.open();
        else this.close();
      }
      if (e.key === 'Escape' && !this._els.panel.hidden) {
        e.preventDefault();
        this.close();
      }
    });

    this._resizeInput();
    this._els.input.addEventListener('input', () => this._resizeInput());
  }

  _resizeInput() {
    const ta = this._els.input;
    ta.style.height = 'auto';
    ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`;
  }

  open() {
    this._els.backdrop.hidden = false;
    this._els.panel.hidden = false;
    this._els.backdrop.setAttribute('aria-hidden', 'false');
    this._els.panel.setAttribute('aria-hidden', 'false');
    this._els.fab.setAttribute('aria-expanded', 'true');
    this._pollHealth();
    this._ensureSystemPrompt();
    requestAnimationFrame(() => {
      this._els.input.focus();
      this._els.messages.scrollTop = this._els.messages.scrollHeight;
    });
  }

  close() {
    this._els.backdrop.hidden = true;
    this._els.panel.hidden = true;
    this._els.backdrop.setAttribute('aria-hidden', 'true');
    this._els.panel.setAttribute('aria-hidden', 'true');
    this._els.fab.setAttribute('aria-expanded', 'false');
  }

  async _pollHealth() {
    this._els.status.textContent = '…';
    this._els.status.className = 'chat-status';
    try {
      const r = await fetch(HEALTH_ENDPOINT);
      const j = await r.json();
      if (j.ok && j.ollama) {
        this._els.status.textContent = 'Ollama';
        this._els.status.classList.add('chat-status--ok');
        this._els.status.title = 'Ollama reachable';
      } else {
        this._els.status.textContent = 'Off';
        this._els.status.classList.add('chat-status--bad');
        this._els.status.title = j.error || 'Start Ollama or check OLLAMA_HOST';
      }
    } catch {
      this._els.status.textContent = 'Off';
      this._els.status.classList.add('chat-status--bad');
      this._els.status.title = 'Health check failed';
    }
  }

  async _ensureSystemPrompt() {
    if (this._systemReady) return;
    let syllabus = '';
    try {
      const r = await fetch(SYLLABUS_PATH, { cache: 'no-cache' });
      if (r.ok) syllabus = await r.text();
    } catch {
      /* ignore */
    }
    this._systemPrompt = buildSystemPrompt(syllabus);
    this._systemReady = true;
  }

  _messagesForApi() {
    const maxUserMsgs = MAX_MESSAGE_PAIRS * 2;
    const slice = this._turns.slice(-maxUserMsgs);
    return [{ role: 'system', content: this._systemPrompt }, ...slice];
  }

  _appendUserBubble(text) {
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg chat-msg--user';
    const inner = document.createElement('div');
    inner.className = 'chat-msg-inner chat-md';
    wrap.appendChild(inner);
    this._els.messages.appendChild(wrap);
    this._renderMarkdown(inner, text);
    void this._typeset(inner);
    this._scrollDown();
  }

  _appendAssistantShell() {
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg chat-msg--assistant';
    const inner = document.createElement('div');
    inner.className = 'chat-msg-inner chat-md';
    wrap.appendChild(inner);
    this._els.messages.appendChild(wrap);
    this._scrollDown();
    return inner;
  }

  /** Shown until the first streamed token arrives. */
  _appendTypingIndicator() {
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg chat-msg--assistant chat-msg--typing';
    wrap.setAttribute('role', 'status');
    wrap.setAttribute('aria-live', 'polite');
    wrap.setAttribute('aria-label', 'Assistant is writing a reply');
    wrap.innerHTML = `
      <div class="chat-typing-inner">
        <div class="chat-typing-bubbles" aria-hidden="true">
          <span class="chat-typing-dot"></span>
          <span class="chat-typing-dot"></span>
          <span class="chat-typing-dot"></span>
        </div>
        <span class="chat-typing-label">Writing…</span>
      </div>`;
    this._els.messages.appendChild(wrap);
    this._scrollDown();
    return wrap;
  }

  /**
   * Open the panel, put text in the input, and focus (does not send).
   * Used by “Ask AI” on question cards via window.questionBankChat.
   */
  prefillAndOpen(text) {
    const t = String(text || '').trim();
    if (!t) return;
    this.open();
    this._els.input.value = t;
    this._resizeInput();
    const len = t.length;
    this._els.input.focus();
    try {
      this._els.input.setSelectionRange(len, len);
    } catch {
      /* ignore */
    }
  }

  _renderMarkdown(el, md) {
    const marked = window.marked;
    const DOMPurify = window.DOMPurify;
    if (marked && DOMPurify) {
      el.innerHTML = markdownToSafeHtml(md, marked, DOMPurify);
    } else {
      el.innerHTML = `<pre class="chat-plain">${escapeHtml(md)}</pre>`;
    }
  }

  async _typeset(el) {
    const MJ = window.MathJax;
    if (!MJ?.typesetPromise) return;
    try {
      if (MJ.typesetClear) MJ.typesetClear([el]);
      await MJ.typesetPromise([el]);
    } catch {
      /* ignore */
    }
  }

  _debouncedTypeset(el) {
    if (this._typesetTimer) clearTimeout(this._typesetTimer);
    this._typesetTimer = setTimeout(() => {
      this._typesetTimer = null;
      void this._typeset(el);
    }, 380);
  }

  _scrollDown() {
    const m = this._els.messages;
    m.scrollTop = m.scrollHeight;
  }

  _clearChat() {
    if (this._busy) this._stopGeneration();
    this._turns = [];
    this._els.messages.innerHTML = '';
    this._systemReady = false;
    this._systemPrompt = '';
    void this._ensureSystemPrompt();
  }

  _stopGeneration() {
    if (this._abort) {
      this._abort.abort();
      this._abort = null;
    }
  }

  async _submit() {
    const text = this._els.input.value.trim();
    if (!text || this._busy) return;

    await this._ensureSystemPrompt();
    if (!this._systemPrompt) {
      this._systemPrompt = buildSystemPrompt('');
      this._systemReady = true;
    }

    this._els.input.value = '';
    this._resizeInput();

    this._turns.push({ role: 'user', content: text });
    this._appendUserBubble(text);

    const typingRow = this._appendTypingIndicator();
    /** @type {HTMLElement | null} */
    let assistantEl = null;
    let acc = '';
    this._busy = true;
    this._els.send.disabled = true;
    this._els.stop.disabled = false;

    const model = (this._els.model.value || DEFAULT_MODEL).trim();
    localStorage.setItem(STORAGE_MODEL_KEY, model);

    this._abort = new AbortController();
    const signal = this._abort.signal;

    const removeTyping = () => {
      if (typingRow.parentNode) typingRow.remove();
    };

    try {
      await streamChatCompletion(
        { model, messages: this._messagesForApi(), signal },
        (chunk) => {
          if (!assistantEl) {
            removeTyping();
            assistantEl = this._appendAssistantShell();
          }
          acc += chunk;
          this._renderMarkdown(assistantEl, acc);
          this._debouncedTypeset(assistantEl);
          this._scrollDown();
        }
      );
      this._turns.push({ role: 'assistant', content: acc });
    } catch (e) {
      removeTyping();
      if (e.name === 'AbortError') {
        if (acc) {
          this._turns.push({ role: 'assistant', content: acc });
          if (assistantEl) {
            assistantEl.insertAdjacentHTML(
              'beforeend',
              `<p class="chat-stopped">Generation stopped.</p>`
            );
          }
        } else {
          const shell = assistantEl || this._appendAssistantShell();
          shell.innerHTML = `<p class="chat-stopped">Generation stopped.</p>`;
        }
      } else {
        const msg = e.message || String(e);
        const shell = assistantEl || this._appendAssistantShell();
        shell.innerHTML = `<p class="chat-error">${escapeHtml(msg)}</p><p class="chat-hint">Is Ollama running? Try <code>ollama serve</code> and <code>ollama pull ${escapeHtml(model)}</code>. Proxy: <code>${escapeHtml(CHAT_ENDPOINT)}</code></p>`;
      }
    } finally {
      removeTyping();
      if (this._typesetTimer) {
        clearTimeout(this._typesetTimer);
        this._typesetTimer = null;
      }
      this._busy = false;
      this._abort = null;
      this._els.send.disabled = false;
      this._els.stop.disabled = true;
      if (assistantEl) await this._typeset(assistantEl);
      this._scrollDown();
    }
  }
}
