// ─── Exercício 29: Tratamento de Dados Incompletos ─────────────────────────
// Use .map() para iterar sobre usuários. Use desestruturação com valores
// padrão para garantir que, se o campo telefone não existir,
// ele apareça como "Não informado".

const usuarios = [
  { nome: 'Ana',    email: 'ana@email.com',   telefone: '11 99999-0001' },
  { nome: 'Bruno',  email: 'bruno@email.com'                             },
  { nome: 'Carla',  email: 'carla@email.com',  telefone: '21 98888-0002' },
  { nome: 'Diego',  email: 'diego@email.com'                             },
];

const normalizados = usuarios.map(
  ({ nome, email, telefone = 'Não informado' }) => ({
    nome,
    email,
    telefone,
  })
);

console.log("Usuários normalizados:");
normalizados.forEach((u) => console.log(" ", u));
