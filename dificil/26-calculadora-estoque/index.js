// ─── Exercício 26: Calculadora de Estoque ──────────────────────────────────
// Use .map() para calcular o valor total de cada item (preco * quantidade)
// e retorne o objeto original acrescido da propriedade totalItem.

const estoque = [
  { nome: 'Caneta',   preco: 2.5,  quantidade: 100 },
  { nome: 'Caderno',  preco: 15,   quantidade: 50  },
  { nome: 'Mochila',  preco: 120,  quantidade: 10  },
];

const estoqueCalculado = estoque.map((item) => ({
  ...item,
  totalItem: +(item.preco * item.quantidade).toFixed(2),
}));

console.log("Estoque com totalItem:");
estoqueCalculado.forEach((item) => console.log(" ", item));

const totalGeral = estoqueCalculado.reduce((acc, i) => acc + i.totalItem, 0);
console.log("\nTotal geral do estoque: R$", totalGeral.toFixed(2));
