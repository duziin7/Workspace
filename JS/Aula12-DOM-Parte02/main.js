// Método getElementById - Modo comum de acessar um elemento HTML pelo ID // get(pega)Element(elemento)(id)
let paragrafo = document.getElementById('paragrafo01');    

paragrafo.style.color = 'purple'
paragrafo.style.textAlign = 'center'
paragrafo.style.margin = '20px'
paragrafo.style.backgroundColor = 'black'

// Método getElementsByClassName - Pega os elementos pelo nome das classes 
let buscaClasse = document.getElementsByClassName('item');
console.log(buscaClasse)

// Colocar posição, pois é um Array
// buscaClasse[0].style.color = 'pink'
// buscaClasse[1].style.color = 'pink'
// buscaClasse[2].style.color = 'pink'
// buscaClasse[3].style.color = 'pink'

// Percorra a lista ultilizando repetição e altere a cor de texto

// Variável;  Condição;  Incremento
for(let c = 0; c <= buscaClasse.length; c++ ){ // c - Contador

    // buscaClasse[c].style.color = 'pink'
    console.log(c)
}

// Método getElementsByTagName - Retorna a coleção de todos os elementos do documento(html)

let acessaParagrafos = document.getElementsByTagName('p')
console.log(acessaParagrafos)


for(let i = 0; i <= acessaParagrafos.length; i++){

    // acessaParagrafos[i].style.color = 'red'
}

let acessaName = document.getElementsByTagName('name_item')
console.log(acessaName)

// for(let f = 0; f <= acessaName.length; f++){
//     if(f % 2 == 0){
//         acessaName[f].style.color = 'green'
//     }
// }

let item2 = document.getElementById('item2');
item2.remove()

let lista = document.getElementById('lista')
let item5 = document.getElementById('item5')

lista.insertBefore(item2, item5.nextSibling)

let retiraEstilo = document.getElementById('messi')

retiraEstilo.style.listStyle = "none";