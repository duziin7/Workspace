//  Métodos de alto nível para manipular arrays

// Método forEach()     // O método forEach() executa uma determina função para cada um dos elementos de um array. Ele não é executado em elementos vazios do array

const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao); // Percorre o array inteiro
// Não aplica em campos vazios exemplos(undefined etc..)

function minhaFuncao(item, indice) { // Primeiro parâmetro são para os valores(frutas) e o segundo parâmetro é a posição(0 , 1 , 2 )
    console.log(`Índice: ${indice}`);
    console.log(`Elemento: ${item}`);
    }   

// Método map() // Percorre igual ao forEach(), porem aplica uma mudança

const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt); // math.sqrt é a raiz quadrada // Math é objeto e sqrt(método) e retorna a raiz quadrada(square root - raiz quadrada em ingles) 
// de cada elemento
console.clear();
console.log('Números:');
console.log(numeros);
console.log('Array atualizado:');
console.log(newArray)

// Método filter() // Filtra algum elemento no array

console.clear();
const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => { // "idade" é parâmetro "primeiro parâmetro são para os valores" segundo é a posição // Arrow function dentro do método, igual a linha 3 a 10 
return idade >= 18; // Retorna apenas maior que 18
});
console.log(filtroIdade)

// Método find() // retorna o valor dos elementos do array que passarem na condição configurada // Se ele achar a condição ele para já o filter pega todos

console.clear();
const meuArray = [ // [] para dizer que é array e {} são objetos // cada objeto tem sua propriedade
{ nome: 'apples', quantidade: 2 },
{ nome: 'bananas', quantidade: 0 },
{ nome: 'cerejas', quantidade: 5 },
];
console.log(
meuArray.find((fruta) => { // Pârametro(fruta) pode ser qualquer um 
return fruta.nome === 'cerejas'; // === de comparação tripla
})  
);  

console.clear()

// forEach() com array de objetos
const tarefas = [ // Array com 3 objetos com 3 propriedades
    {
    id: 1,
    texto: 'Levar o lixo para fora',
    isCompleted: true,
    },
    {
    id: 2,
    texto: 'Encontrar com o chefe',
    isCompleted: true,
    },
    {
    id: 3,
    texto: 'Consulta no dentista',
    isCompleted: false,
    },
    ];
    tarefas.forEach((teste) => console.log(teste.texto)); // Imprime somente o valor do texto
    // teste é parâmetro aleatório(pode ser mudado)


// Outro exemplo do map
console.clear();
const mapText = tarefas.map((valor) => {
return valor.texto;
});
//Imprime o novo array
console.log(mapText); // Rotornando um novo Array com os valores desejados


// Outro exemplo do filter
console.clear();
const filtoCompletas = tarefas.filter((item) => { 
return item.isCompleted === true;
});
console.log(filtoCompletas); // Vai retornar apenas o "isCompleted" que esta true