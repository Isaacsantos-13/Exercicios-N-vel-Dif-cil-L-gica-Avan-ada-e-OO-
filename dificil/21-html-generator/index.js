// ─── Exercício 21: HTML Generator ──────────────────────────────────────────
// Use .map() para transformar um array de objetos Link (texto, url)
// em um array de strings contendo tags <a>.

const links = [
  { texto: 'Google',   url: 'https://google.com'   },
  { texto: 'GitHub',   url: 'https://github.com'   },
  { texto: 'MDN Docs', url: 'https://developer.mozilla.org' },
];

const tags = links.map(
  ({ texto, url }) => `<a href="${url}">${texto}</a>`
);

console.log("Tags HTML geradas:");
tags.forEach((tag) => console.log(" ", tag));
