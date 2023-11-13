let ray = [17, 43, 8, 4, 97, 56, 29];

ray.forEach(verificarParOuImpar);

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}

console.log(' Segunda Parte ')

let meuArray = [17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61];

const valoresFiltrados = meuArray.filter((num) => {
    if (num >= 20 && num <= 80) {
        console.log(`${num} está entre 20 e 80`);
    }
});

