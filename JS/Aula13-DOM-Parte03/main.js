var paragrafo = document.querySelector('p'); // Lê em ordem procedural, mesmo usando for ele SEMPRE vai usar o primeiro 

paragrafo.style.color = 'purple'
console.log(paragrafo)

var pipoca = document.querySelectorAll('p'); // Vira um vetor(Array) e escolha a ordem que deseja 

// for(let c = 0; c < pipoca.length; c++){
//     pipoca[c].style.color = 'pink'
// }

let c = 0;
while(c < pipoca.length){
    pipoca[c].style.color = 'pink'
    c++;
}

// pipoca[2].style.backgroundColor = 'pink'
console.log(pipoca)

let e = document.querySelector("p.exemplo")

e.innerHTML = "EU SOU LINDO"
e.style.color = 'black'

// Outro jeito
let y = document.querySelector('#exemplo-02').style.color = 'purple'

// Inner Adiciona texto no interior do filho
