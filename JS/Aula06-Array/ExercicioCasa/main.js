var arrayUni = ["HTML",1993,"CSS",1996,"BootsTrap",2011,"JS",199,"React",2013,"Java",1995]

console.log(arrayUni);

console.log(arrayUni.length);

console.log(arrayUni[10]);

let receba = arrayUni.toString();
console.log(receba)

let separador = arrayUni.join(" / ")
console.log(separador)

let adiciona = arrayUni.unshift("IOS")
console.log(adiciona)


var arrayBi = [
    ["HTML", 1993,"CSS", 1996],
    ["Bootstrap", 2011,"JS", 1995],
    ["React", 2013,"Java", 1995]
];
console.log(arrayBi)

console.log(arrayBi.length)

console.log(arrayBi[2][1])  

arrayBi[1][2] = "JavaScript"
console.log(arrayBi)

delete arrayBi[2][2]
console.log(arrayBi)

let novaInformacao = arrayBi.push("pipoca")
console.log(novaInformacao)


