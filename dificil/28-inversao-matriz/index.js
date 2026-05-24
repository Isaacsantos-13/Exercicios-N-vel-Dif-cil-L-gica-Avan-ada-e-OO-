// ─── Exercício 28: Inversão de Matriz (Simples) ────────────────────────────
// Dado um array de arrays [[1, 2], [3, 4]], use .map() para extrair
// apenas a primeira coluna de cada sub-array.

const matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

// Desestruturação no parâmetro: pega apenas o primeiro elemento
const primeiraColuna = matriz.map(([primeiro]) => primeiro);

console.log("Matriz original:");
matriz.forEach((linha) => console.log(" ", linha));
console.log("Primeira coluna:", primeiraColuna); // [1, 3, 5, 7]

// Bônus: extrair todas as colunas separadas
const [col1, col2] = [
  matriz.map(([a]) => a),
  matriz.map(([, b]) => b),
];
console.log("Coluna 1:", col1);
console.log("Coluna 2:", col2);
