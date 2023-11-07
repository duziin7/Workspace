// Array Object conjunto de dados sobre algo/alguém
// Composto por propriedades (nome, idade, notas, anos) e após os : seus valores
// Elemento são compostos dentro de [colchetes] e cada dimensão dos elementos {chaves}
let arrayObject = [
    { nome: 'Ana', idade: 17, nota: 8, ano: '2°B' },
    { nome: 'Bruno', idade: 16, nota: 6, ano: '2°C' },
    { nome: 'Marta', idade: 15, nota: 5, ano: '3°C' },
    { nome: 'Brenno', idade: 19, nota: 6, ano: '3°C' },
    { nome: 'Veronica', idade: 16, nota: 9, ano: '2°C' },
    { nome: 'Maria', idade: 14, nota: 4, ano: '1°F' }
];
// Imprime todos os dados do arrayObject
console.log(arrayObject);
// Imprime todos os dados do arrayObject[1] dimensão que correspode ao bruno
let arrayBruno = arrayObject[1];
console.log(arrayBruno);
// Imprime arrayObject[5].nota dimensão que correspode a nota da maria 
// Após especificar a dimensão chmar a chave com um '.'
let arrayNotaMaria = arrayObject[5].nota;
console.log(arrayNotaMaria);
// Método de conversão JSON.stringify()
// JS O Object N Notation (representação de inf/dados) formato lido fácilmente entre máquina/humano
// Utilizado para transmitir dados de forma textual descritiva 
let arrayJSON = JSON.stringify(arrayObject)
console.log(arrayJSON)





// Atribuição via desestruturação (destructuring assignment). 
// Extrair os dados de um array/objeto e armazenar em var simples através da atribuição via desestruturação

const numeros = [1, 2, 3, 4, 5];

// Atribuição por desestruturação para extrair elementos do array
const [primeiro, segundo] = numeros;

console.log(primeiro); // 1
console.log(segundo); // 2
const numerosJSON = JSON.stringify(numeros);
console.log(numerosJSON); // Conversão para JSON

// Array Object

const pessoa = { nome: 'Alice', idade: 30, cidade: 'Nova York' };

// Atribuição por desestruturação para extrair propriedades do objeto
const { nome, idade } = pessoa;

console.log(nome); // Alice
console.log(idade); // 30

const pessoaJSON = JSON.stringify(pessoa);
console.log(pessoaJSON); // Conversão para JSON


