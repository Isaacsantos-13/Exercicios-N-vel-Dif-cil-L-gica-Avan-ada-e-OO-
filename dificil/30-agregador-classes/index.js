// ─── Exercício 30: Agregador de Classes ────────────────────────────────────
// Crie uma classe Relatorio. No método gerar(usuarios), use .map() para
// transformar as instâncias de Usuario em um formato de log resumido
// usando desestruturação pesada.

class Usuario {
  constructor(nome, email, perfil) {
    this.nome   = nome;
    this.email  = email;
    this.perfil = perfil; // { cargo, nivel, ativo }
  }
}

class Relatorio {
  gerar(usuarios) {
    return usuarios.map(({ nome, email, perfil: { cargo, nivel, ativo } }) => ({
      log:    `[${ativo ? 'ATIVO' : 'INATIVO'}] ${nome} <${email}>`,
      cargo,
      nivel,
    }));
  }
}

// ── Uso ──────────────────────────────────────────────────────────────────────
const lista = [
  new Usuario('Ana',   'ana@dev.com',   { cargo: 'Dev',    nivel: 'Senior', ativo: true  }),
  new Usuario('Bruno', 'bruno@dev.com', { cargo: 'Design', nivel: 'Junior', ativo: false }),
  new Usuario('Carla', 'carla@dev.com', { cargo: 'PM',     nivel: 'Pleno',  ativo: true  }),
];

const relatorio = new Relatorio();
const logs = relatorio.gerar(lista);

console.log("Relatório gerado:");
logs.forEach((entry) => console.log(" ", entry));
