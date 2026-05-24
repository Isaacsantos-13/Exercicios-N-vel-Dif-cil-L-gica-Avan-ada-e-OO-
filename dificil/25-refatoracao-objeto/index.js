// ─── Exercício 25: Refatoração de Objeto ───────────────────────────────────
// Dado um objeto complexo de configuração, use desestruturação para criar
// um novo objeto que contenha apenas as propriedades que você deseja manter
// (usando o rest operator ...).

const configCompleta = {
  host:     'localhost',
  port:     3000,
  debug:    true,
  secret:   'abc123',
  apiKey:   'key-super-secreta',
  timeout:  5000,
};

// Descarta secret e apiKey, mantém o resto:
const { secret, apiKey, ...configPublica } = configCompleta;

console.log("Config completa:", configCompleta);
console.log("\nPropriedades descartadas:");
console.log("  secret:", secret);
console.log("  apiKey:", apiKey);
console.log("\nConfig pública (segura):", configPublica);
