/**
 * Parse fetched year HTML and return one `.question-card` outer HTML by number.
 * @param {string} htmlText
 * @param {number} questionNum 1-based
 * @returns {string | null}
 */
export function extractQuestionCardOuterHtml(htmlText, questionNum) {
  const doc = new DOMParser().parseFromString(htmlText, 'text/html');
  const cards = doc.querySelectorAll('.question-card');
  const want = String(questionNum);

  for (const card of cards) {
    const numEl = card.querySelector('.q-number');
    if (!numEl) continue;
    const raw = numEl.textContent.trim().replace(/\.$/, '');
    if (raw === want) {
      return card.outerHTML;
    }
  }

  const idx = questionNum - 1;
  if (idx >= 0 && idx < cards.length) {
    return cards[idx].outerHTML;
  }
  return null;
}
