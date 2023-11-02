// Funções 
function somaNum(num1 = 0, num2 = 0, num3 = 0) { // Espaço na memória chamado "addNums" com o parâmetro "(num1 = 1, num2 = 1)"
    return num1 + num2 + num3;
   }
let x = somaNum(10, 7); // Chamada da função somaNum
console.log(x);
console.log(somaNum(10,2)) // Se a function não for usada mais de uma vez, pode-se usar deste jeito 


let xx = somaNum(5, 5, 5);
console.log(xx)

let z = myFunc(4, 5); // Chamada da função myFunc
console.log(z);

function myFunc(num1, num2) {
    return num1 * num2;
   }    

console.clear()

// Arrow Function - função simplificada estilo "Ternário do if"
const hello = () => {  // Função sem parâmetro por não esperar nada
    return 'Olá Arrow Function!';
   };

console.log(hello()) // Exibir uma function no console colocar ()


// num %(resto da divisão) 2 == 0 Par / num % 2 == 1 Impar
function imparPar(num){
    if(num % 2 == 0){
        return "O número " + num + " é Par";
    }else if(num % 2 == 1){
        return `O número ${num} é Impar`; // Template String
    }else{
        return `Não consegui identificar se é Impar ou Par `
    }
};

let recebaPrimeiroNum = imparPar(8)
console.log(recebaPrimeiroNum)

let recebaSegundoNum = imparPar(5)
console.log(recebaSegundoNum)

let recebaTerceiroNum = imparPar(5.75)
console.log(recebaTerceiroNum)

// Objeto /  Uma coleção de dados e/ou funcionalidades sendo Propriedades e Métodos

const celular = { // Propriedade 
    marca: 'Apple',
    modelo: 'Iphone 14 Pro Max',
    cor: 'Branco',
    memoria: '512gb'
}

console.log(celular)

// Eventos - Interação em elemento

console.clear();

function boasVindas(){ // Função onLoad - Quando a página termina de carregar
    alert('Bem vindo a nossa página');
    console.log('Bem vindo a nossa página');
};

// Modelo abaixo, igual ao de cima porem esta em - Arrow Function

// const boasVindas = () => { 
//     alert('Bem vindo a nossa página');
//     console.log('Bem vindo a nossa página');
//     };

const eventClique = () =>{ // Arrow Function(function simplificada)
    console.log('Você clicou no botão');
};


const mouseEmCima = () => { // Função onmouseover - Quando mouse passa por cima do elemento
    console.log('Mouse está em cima do título');
};