/* Elabore um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento
da loja. Calcule e informe o valor para pagamento a vista com 10% de desonto e o valor em 3x*/

let valorProduto = 135;
let descontoaVista = (0.15*valorProduto);
let parcelado3x = (valorProduto/3);

console.log(`Preço: R$ ${valorProduto},00`);
console.log(`A vista: R$ ${valorProduto-descontoaVista}`);
console.log(`Parcelado em 3x de: R$ ${parcelado3x},00`);
