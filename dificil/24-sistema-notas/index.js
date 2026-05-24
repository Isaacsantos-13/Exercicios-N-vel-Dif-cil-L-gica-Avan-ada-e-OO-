// ─── Exercício 24: Sistema de Notas ────────────────────────────────────────
// Dado um array de objetos Alunos com um array de notas, use .map() e
// desestruturação para retornar um novo objeto com o nome e a média calculada.

const alunos = [
  { nome: 'Ana',    notas: [8, 9, 7, 10] },
  { nome: 'Bruno',  notas: [5, 6, 7, 4]  },
  { nome: 'Carla',  notas: [10, 10, 9, 8] },
];

const comMedia = alunos.map(({ nome, notas }) => {
  const media = notas.reduce((acc, n) => acc + n, 0) / notas.length;
  return {
    nome,
    media: +media.toFixed(2),
    situacao: media >= 7 ? 'Aprovado' : 'Reprovado',
  };
});

console.log("Resultado:");
comMedia.forEach((a) => console.log(" ", a));
