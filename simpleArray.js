//crie um array e em seguida faça a soma de seus elementos e mostre o resultado dessa soma


function simpleArray (lista) {
    let soma = 0;
    for (let indice = 0; indice < lista.length; indice += 1) {
        soma = soma + lista[indice];
    }
    return soma;
}

console.log(simpleArray([1,2,3]));