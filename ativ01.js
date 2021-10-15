//#1
const multiplicacao = (n1, n2) => {
    var operacao = n1 * n2;
    return operacao;
}
console.log(multiplicacao(8, 5));

//#2
const maior = (num1, num2, num3) => {
    var array = [num1, num2, num3];
    var maior_numero = Math.max(...array);
    return maior_numero;
}
console.log(maior(6, 19, 11));

//#3
const par_ou_impar = numero => {
    if (numero % 2 == 0) {
        return 'par';
    }
    else {
        return 'ímpar';
    }
}
console.log(par_ou_impar(19));