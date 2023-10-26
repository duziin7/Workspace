// Aprendendo IF

let profesoraBateAluno = true
let professoraXingaAluno = true

if(profesoraBateAluno == true){
    console.log("Professora demitida com sucesso!!")
}

console.clear()

// true              &&(e)        true = true

if(profesoraBateAluno == true && professoraXingaAluno == true){
    console.log("Professora demitida com sucesso!!")
}

console.clear()

// true              ||(ou)     true = true

if(profesoraBateAluno == true || professoraXingaAluno == true){
    console.log("Professora demitida com sucesso!!")
}

console.clear()

let teraComidaTOTVS = false

if(!teraComidaTOTVS == true){
    console.log("Não vou nem almoçar, Alexsandro o brabo")
}else{
    console.log("Você terá qie almoçar")
}

console.clear()

let numero = 11

if(numero % 2 == 0){
    console.log("O console " + numero + " é par")
}else{
    console.log("O console " + numero + " é impar")
}

console.clear()

let morangoMaduro = null

if(morangoMaduro == true){
    console.log("Pode comer")
}else if(morangoMaduro == false){
    console.log("Não comer")
}else{
    console.log("Esta podre")
}

console.clear()

let fase2 = 70
let fase3 = false
let inscricao = true

if(inscricao == true){
    console.log("Parabéns você está na fase 2");
    if(fase2 >= 70){
        console.log("Questionário de lógica e leitura")
    }else if(fase2 >= 65 || fase2 <= 69){
        console.log("Você terá uma segunda chance")
    }else{
        console.log("Você não passou na fase 2")
    }
}else{
    console.log("Você não passou")
}

console.clear()

let pipoca1 = 10
let pipoca2 = 120

if(pipoca1 > pipoca2){
    console.log(pipoca1 + " é maior")   
}else{
    console.log(pipoca2 + " é maior")
}

console.clear()

// Operador ternário

pipoca1 > pipoca2 ? console.log(pipoca1 + " é maior") : console.log(pipoca2 + " é maior"); // Código menor, porem igual ao if


// Switch-case /  Caso

let mes = 3

switch(mes){ // Se o mes for 3 é março 
    case 3:
        console.log("Março")
        break; // encerra estilo else
    case 4:
        console.log("Abril")
        break;
    case 1: 
        console.log("Janeiro")
        break;
    case 10:
        console.log("Outubro")
        break;
    case 12:
        console.log("Dezembro")
        break;
    default: // encerra a condição estilo else
        console.log("Não encontrei seu Mês")
        break;
}

console.clear()
