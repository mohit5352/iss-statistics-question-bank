import { CHAT_ENDPOINT } from './config.js';

/**
 * Stream Ollama NDJSON from the same-origin proxy.
 */
export async function streamChatCompletion({ model, messages, signal }, onToken) {
  const res = await fetch(CHAT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages, stream: true }),
    signal,
  });

  const ct = res.headers.get('content-type') || '';

  if (!res.ok) {
    const text = await res.text();
    let msg = text;
    try {
      const j = JSON.parse(text);
      if (j.error) msg = j.error;
    } catch {
      /* keep text */
    }
    throw new Error(msg || `HTTP ${res.status}`);
  }

  if (ct.includes('application/json') && !ct.includes('ndjson')) {
    const j = await res.json();
    throw new Error(j.error || 'Unexpected JSON response');
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  const flushLine = (line) => {
    const t = line.trim();
    if (!t) return;
    let data;
    try {
      data = JSON.parse(t);
    } catch {
      return;
    }
    if (data.done) return;
    const piece = data.message?.content;
    if (piece) onToken(piece);
  };

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';
    for (const line of lines) flushLine(line);
  }
  if (buffer.trim()) flushLine(buffer);
}
