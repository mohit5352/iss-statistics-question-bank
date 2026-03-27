import { ChatApp } from './app.js';

/**
 * Dynamic import of this module often runs *after* DOMContentLoaded, so we must
 * not rely on that event alone. Use the same window.isAdmin as main.html.
 */
function mountChatIfAdmin() {
  if (typeof window.isAdmin !== 'function' || !window.isAdmin()) {
    window.questionBankChat = null;
    return;
  }
  const app = new ChatApp();
  app.mount(document.body);
  window.questionBankChat = app;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountChatIfAdmin);
} else {
  mountChatIfAdmin();
}
