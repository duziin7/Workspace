// Métodos do DOM

let botao = document.createElement('BUTTON'); // Cria um novo elemento com um nome específico //  Esse nome de pode ser com letras maiúsculas ou minúsculas.
let corpo = document.body;

document.body.appendChild(botao) // appendChild Acrescenta filho(botao na body)

botao.innerHTML = 'Acessa'; // Inner Adiciona texto no interior do filho

botao.style.border = 'solid 2px purple'
corpo.style.backgroundColor = '#000000'
// document.body.style.backgroundColor = 'black' // Outro jeito sem criar váriavrel