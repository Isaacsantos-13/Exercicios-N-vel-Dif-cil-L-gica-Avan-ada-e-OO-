// ─── Exercício 23: Desestruturação Dinâmica ────────────────────────────────
// Use uma variável para definir qual propriedade de um objeto você quer
// extrair via desestruturação (Chave dinâmica).

const produto = { nome: 'Notebook', preco: 3500, marca: 'Dell' };

// Chave dinâmica definida em tempo de execução:
const chave = 'marca';

const { [chave]: valorExtraido } = produto;

console.log("Objeto:", produto);
console.log(`Chave dinâmica: "${chave}"`);
console.log("Valor extraído:", valorExtraido); // 'Dell'

// Demonstração com outra chave:
const outraChave = 'preco';
const { [outraChave]: outroValor } = produto;
console.log(`\nChave dinâmica: "${outraChave}"`);
console.log("Valor extraído:", outroValor); // 3500
