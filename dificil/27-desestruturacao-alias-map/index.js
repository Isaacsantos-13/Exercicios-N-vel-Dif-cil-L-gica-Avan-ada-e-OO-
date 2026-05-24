// ─── Exercício 27: Desestruturação com Alias e Map ─────────────────────────
// Ao mapear um array de objetos, desestruture cada item no parâmetro do map
// renomeando as variáveis internas.

const funcionarios = [
  { first_name: 'João',   last_name: 'Silva',   salary: 4000 },
  { first_name: 'Maria',  last_name: 'Souza',   salary: 5500 },
  { first_name: 'Pedro',  last_name: 'Oliveira', salary: 3200 },
];

const formatados = funcionarios.map(
  ({ first_name: nome, last_name: sobrenome, salary: salario }) => ({
    nomeCompleto: `${nome} ${sobrenome}`,
    salario,
    salarioFormatado: `R$ ${salario.toLocaleString('pt-BR')}`,
  })
);

console.log("Funcionários formatados:");
formatados.forEach((f) => console.log(" ", f));
