// Array -  Múltiplos valores em uma única variável  ---  // 'Vetor' para referenciar array de uma dimensão --- E 'Matrizes' para array de duas dimensões

// Array unidimensional

var numeros = [54, 11, 58, 853, 17, 75, 30] // Array unidimensional

console.log(numeros)
console.log(numeros[4]) // Posiçao 4 no caso 17 (Sempre começa pelo 0)
// console.clear()

console.log("Antes: " + numeros)
numeros[4] = "Hora do lanche" // Altera valor
console.log("Depois: " + numeros)

// Arrays bidimensionais

var matrix = [ // Array Bidimensional -- // Cria um array com tres dimensionais (Linhas) // Índices(posição) nesse caso 0  1  2
    ["ICarly", 2011, 10],
    ["Os Fet", 2009, 7.8],
    ["Doug", 1999, 4]
];

// console.log(matrix)
console.log(matrix[0][2]) // Posição [0][2] no caso na linha 0 e coluna 2 = 10 // Sempre começe pela posição 0 
console.log(matrix[2][1]) // Posição [2][1] no caso linha 2 e coluna 1 = 1999 ]

console.log("Antes: " + matrix)
matrix[2][1] = 1200 // Altera valor
console.log("Depois: " + matrix)

console.clear()


// Método toString() - Convertendo Array para String

var numArray = [2, 3, 6, 7, 65, 89]; // Mosntrando no console (númerico)

console.log(numArray)
let receba = numArray.toString() // Transformando o númerico em String
console.log(receba)

// Método Join()

var numArray2 = [3, 4, 6, 20, 5, 49]; // Mosntrando no console (númerico)
let testeJoin = numArray2.join(" ¨¨ ") // Transformando o númerico em String e muda qualquer caractere como separador dos elementos
console.log(numArray2) 
console.log(testeJoin) // Mudança de caractere do separador

// Propriedade Lenght 

var numArray3 = [7,3,6,8,22,12]; 
console.log(numArray3.length) // Retorna tamanho do array (Tamanho 6)

// Método pop()

var numArray4 = [2,5,6,4,72,52]; 
let retiraUltimoElemento = numArray4.pop() // Retira ultimo elemento (52)
console.log(retiraUltimoElemento) // Elemento retirado
console.log(numArray4) // Ultimo elemento retirado devido ao método pop()

// Método push()

let numArray5 = [1,6,7,9,4,23];
let novaInformacao = numArray5.push("Morango") // Insere um elemento no final do array
console.log(novaInformacao) // Elementno adicionado (6 agora 7)
console.log(numArray5) // Ultimo elemento adicionado devido ao método push()

// Método shift()

var numArray6 = [8,2,2,10,2,100];
let retiraPrimeiroElemento = numArray6.shift()
console.log(retiraPrimeiroElemento) // Elemento retirado
console.log(numArray6)  // Primeiro elemento retirado devido ao método shift()

// Método unshift()

var numArray7 = [32,112,3,52,2,23];
let insereInicio = numArray7.unshift("Pera") // Insere um elemento no começo do array
console.log(insereInicio) // Elementno adicionado (6 agora 7)
console.log(numArray7) // Primeiro elemento adicionado devido ao método unshift()

// Propriedade Delete

var numArray8 = ["Banana", "Laranja", "Maça", "Pera", "Morango","Uva"];
delete numArray8[3]; //  Apaga um elemento na posição desejada
console.log(numArray8) // Demonstração do elemento apagado na posição desejada