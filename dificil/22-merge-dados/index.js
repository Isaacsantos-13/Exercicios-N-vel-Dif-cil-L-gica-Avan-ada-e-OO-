// ─── Exercício 22: Merge de Dados ──────────────────────────────────────────
// Você tem dois arrays: um de IDs e outro de Nomes.
// Use o índice do .map() para criar um array de objetos combinando os dois.

const ids   = [101, 102, 103];
const nomes = ['Alice', 'Bob', 'Carol'];

const usuarios = ids.map((id, i) => ({
  id,
  nome: nomes[i],
}));

console.log("IDs:", ids);
console.log("Nomes:", nomes);
console.log("Merged:");
usuarios.forEach((u) => console.log(" ", u));
