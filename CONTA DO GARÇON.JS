/*
elabore um programa que leia o valor de um jantar. Calcule e inofrme o valor da 
taxa do garçon 10% e o valor total a ser pago
EXEMPLO:
valor do jantar: R% 200,00
taxa do garçon: 
total a pagar:
*/ 

let valorDoJantar = 200;
let taxaGarcom = (0.1*valorDoJantar);
let totalPagar = valorDoJantar + taxaGarcom;

console.log("Valor do jantar: " + valorDoJantar);
console.log("taxa do garçon: " + taxaGarcom);
console.log("total a pagar: " + totalPagar);

console.log(`valor do jamtar: R$ ${valorDoJantar},00`)
console.log(`taxa do garçon: R$$ ${taxaGarcom},00`)
console.log(`total a pagar: R$$ ${totalPagar},00`)