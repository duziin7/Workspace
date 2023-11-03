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




