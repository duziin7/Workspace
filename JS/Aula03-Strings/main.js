var texto1 = "Texto bem aleatorio dos atrasados da volta da pausa"

var texto2 = "Texto bem aleatorio dos atrasados da volta da pausa"
// console.log(texto1 + " " + "A vida é um sapinho dando pulinho na lagoa" + " " + texto2)

// template String
// console.log(`${texto1} A vida é um sapinho dando pulinho na lagoa      ${texto2}`)

var numero1 = 2;
var numero2 = 3;

console.log(`${numero1 + numero2 }`) // mesmo resultado
console.log(numero1 + numero2)

console.clear()

// chart at - encotrando um caracter
const string01 = "Instituto da oportunidade Social"

console.log(string01);
console.log("posicao 10 " + string01.charAt(10), string01.charAt(5))

console.log("posicao 11  " + string01.charAt(11))

console.clear()
// retornando o tamanho da String
const string02 = "Instituto da oportunidade Social"

console.log("Quantidade de caracteres: " + string02.length)

console.clear()

const string03 = "Instituto da oportunidade Social"

const string04 = "INSTITUTO DA OPORTUNIDADE SOCIAL"

console.log("Trazer tudo em maiusculo: " + string03.toUpperCase())

console.log("tudo em minusculo: " + string04.toLowerCase())
console.clear()

// pegar uma substring
var sub = "Mozilla"

console.log(sub.substring(1))
console.clear()


var trocaTexto = "Bem vindo ao jogo, Roblox"
var nomeJogador = "KlebinhoJogador2018"

let textoTrocado = trocaTexto.replace("Roblox", nomeJogador);

console.log("Texto original: " + trocaTexto);
console.log("Texto alterado: " + textoTrocado)


console.clear()


var retirandoEspacos = "        A vida é uma uva       ";

console.log(retirandoEspacos.trim())