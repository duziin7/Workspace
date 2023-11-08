// Classes // Template para objetos // Constructor (Construir propriedades)

// const celular = { // Propriedade 
//     marca: 'Apple', // ( : ) Atribuição 
//     modelo: 'Iphone 14 Pro Max',
//     cor: 'Branco',
//     memoria: '512gb'
// }

// pipoca, modelo, cor, memoria, memoriaRan

class celular{  // As propriedades nas classes são Chamas de ATRIBUTOS
    constructor(pipoca, modelo, cor, memoria, memoriaRan) {
        this.marca = pipoca; // ATRIBUTO // Parâmetro chamando o valor que recebe a marca
        this.modelo = modelo; // ( ; ) para separar os atributos
        this.cor = cor; // Atribuição em classes não são ( : ) mas sim ( =( recebe ) ) 
        this.memoria = memoria; // o this faz referência ao próprio objeto. // Em um evento, o this faz referência ao elemento que disparou o evento. // (esse) 
        this.memoriaRan = memoriaRan
        this.isDesligado = false
    }

    ligar(){ // Métodos são funcionalidades....
        console.log("Ligando............")
    }

    desligar(){
        if(this.isDesligado === true){
            return `Desligando.......`
        }else{
            return`Não to afim de desligar`
        }
    };

    pesquisa(){
        console.log("Pesquisando........")
    }
}

// console.log(new celular())

// Instanciar(chamando algo que já exite) a classe

// new (Exclusivo para Instanciar)
var motorola = new celular('motorola', '2600g', 'white', 16, '4');
console.log(motorola)

// Forma sem os parâmetros(ponte) // 
// console.log(motorola.cor = 'amarelo') 
// console.log(motorola.marca = 'nokia 1922')
// console.log(motorola.memoria = 16) 
// console.log(motorola.memoriaRan = '4')
// console.log(motorola.modelo = '2600g')

var positivo = new celular('Positivo', '720p', 'ruby', 2, 8)
console.log(positivo)
console.log(positivo.desligar())