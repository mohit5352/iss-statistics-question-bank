/**
 * In-app chat (Ollama) — client configuration.
 */
export const CHAT_ENDPOINT = '/api/ollama/chat';
export const HEALTH_ENDPOINT = '/api/ollama/health';
export const SYLLABUS_PATH = 'syllabus.md';

/** Default model tag — adjust to what you `ollama pull` */
export const DEFAULT_MODEL = 'qwen2.5:7b';

export const MAX_MESSAGE_PAIRS = 14;

export const STORAGE_MODEL_KEY = 'question_bank_chat_model';
