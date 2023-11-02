// Laço while - Verifica a válidação primeiro

let contador = 1;

while(contador <= 10){ // true 
    console.log(`O número do contador é ${contador}`) // <== Template String / ou ("O número do contador é " + contador)
    contador ++; // incremento
}

console.clear()

let contador2 = 10;

while(contador2 >= 0){
    console.log("O número do contador é " + contador2)
    contador2--; // decremento

} 

console.clear()

// Laço do-while - Executa primeiro, depois verifica a válidação

let contadora = 1

do{
    // debugger // Para o código e executa linha por linha 
    console.log("O número da contadora é " + contadora)
    contadora++;
}while(contadora <= 10)

console.clear()

// Laço For -  Igual o 'while' (Verifica a válidação primeiro) 

for(let contadores = 1; contadores <= 10; contadores++){
    console.log("O número da contadora é " + contadores)
}