/**
 * marked strips backslashes (e.g. \\( → (), breaking MathJax). We extract TeX
 * blocks first, run marked on the rest, then splice TeX back as raw text.
 */
export function markdownToSafeHtml(markdown, marked, DOMPurify) {
  const chunks = [];
  const placeholder = (i) => `\uE140TEX${i}TEX\uE141`;

  let s = String(markdown);

  s = s.replace(/\$\$[\s\S]*?\$\$/g, (m) => {
    chunks.push(m);
    return placeholder(chunks.length - 1);
  });
  s = s.replace(/\\\[[\s\S]*?\\\]/g, (m) => {
    chunks.push(m);
    return placeholder(chunks.length - 1);
  });
  s = s.replace(/\\\([\s\S]*?\\\)/g, (m) => {
    chunks.push(m);
    return placeholder(chunks.length - 1);
  });

  marked.setOptions({ gfm: true, breaks: true });
  let html = marked.parse(s);
  for (let i = 0; i < chunks.length; i++) {
    html = html.split(placeholder(i)).join(chunks[i]);
  }

  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
}
