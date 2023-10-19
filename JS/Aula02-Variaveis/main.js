var nomeDoPrimeiroAluno = "Eduardo"  // ( ; opicional) 

console.log(nomeDoPrimeiroAluno);  // imprime informação no browser

let numeroAprovados = 5 // Tipo numerico

console.log(numeroAprovados)

console.clear() // Limpa o console do browser
// Exemplo var

var nomeAluno = "Felipe"
nomeAluno = "Victor"

console.log(nomeAluno)

// Exemplo let

let nomeAprendiz = "Vanessa"
nomeAprendiz = "Luisa" // Não se pode ser redeclarado

console.log(nomeAprendiz)

// Exemplo const

const nomeSiteWeb = "Facebook"
// nomeSiteWeb = "Twitter" // Não se pode ser redeclarado e ter seu valor alterado

console.log(nomeSiteWeb)
console.clear()

// Exibir soma de dois numeros

// console.log(2 + 4)

// var numero1 = 2;
// var numero2 = 4;

// var soma = numero1 + numero2;

// console.log(soma)

// Exibir divisao de dois numeros

//console.log(2/4)

// var numero1 = 4;
// var numero2 = 2;

// var soma = numero1 / numero2;

// console.log(soma)

var texto = "Percebemos, cada vez mais, que o fenômeno da Internet cumpre um papel essencial na formulação de alternativas às soluções ortodoxas."; // String

console.log(texto)
console.clear()

// Concatenar - ato de juntar duas ou mais Strings // + So no caso de Strings 

var texto1 = "No entanto, não podemos esquecer que a necessidade de renovação processual aponta para a melhoria das formas de ação."; // ou (\n) dentro das aspas
var texto2 = "A nível organizacional, a valorização de fatores subjetivos representa uma abertura para a melhoria de alternativas às soluções ortodoxas.";

var concatenar = texto1 + "\n" + texto2;
// Escape (\n) indica um nova linha

console.log(concatenar)
// console.log(texto1 + texto2)
console.clear()


// Valores booleanos / TRUE OU FALSE - VERDADEIRO OU FALSO

var osDeVerdadeAgenteSabeQuemE = true;

// Operadores 

console.log(8 * null)
console.log("5" - 1)
console.log("5" + 1) // ou console.log(1 + "5") mesmo resultado - Concatenação pois existe uma String
console.log("five" * 2)
console.clear()

// Visualizar slide 22 sobre Hierarquia

// Incremento 

var incremento = 2 
// incremento = incremento = 6
// incremento++ // incrementa 1 
incremento+=5

console.log(incremento)

// Módulo(Resto da divisão)

var imparPar = 3%2 // Resto da divisão exemplo de 2 / 2 - resto 0  

console.log("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum pariatur eveniet dolorem ab, recusandae magnam obcaecati laboriosam eum deserunt totam autem nam exercitationem at sunt quam aliquam vero reprehenderit excepturi." + imparPar)
console.clear()

// Comparação(Relacionais)

var comparacao = 2 > 3 // 2 não é maior que 3 - false 
var comparacao2 = 5 > 3 // true

console.log(comparacao)
console.log(comparacao2)
console.clear()

var sinaisIguais = 2 == 3 // == Se tem o mesmo valor (Valores iguais) 

console.log(sinaisIguais)

var sinaisIguais2 = 3 === 3 // === Se tem o mesmo valor e tipo (Valores e Tipos iguais)
var sinaisIguais3 = 8 === 10 // Se qualquer um estivar errado retorna false

console.log(sinaisIguais2)
console.log(sinaisIguais3)
console.clear()

// Diferente

var sinaisDiferente = 3 != 3 // Se ele é diferente como no caso não é recebe false

console.log(sinaisDiferente)
console.clear()

// Menor ou igual 

var menorIgual = 4 <= 5; // Mesmo raciocino dos Relacionais(Linha 116) sequalquer um estiver verdadeiro ira retornar true 

console.log(menorIgual);
console.clear()

//  Operadores unários 

var unarios = 4; // Mostra o tipo se é numero ou String 
var unarios2 = "eu sou lindo";

console.log(typeof unarios)
console.log(typeof unarios2)



