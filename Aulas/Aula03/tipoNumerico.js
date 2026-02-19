const meuNumero = 3;

const primeiroNumero = 21;

const segundoNumero = 3;

const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;
const divisao = primeiroNumero / segundoNumero;

console.log(`the sum is: ${soma}`);
console.log(`the subtraction is: ${subtracao}`);
console.log(`the multiplication is: ${multiplicacao}`);
console.log(`the division is: ${divisao.toFixed(2)}`);

//ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

console.log(numeroPontoFlutuante);
console.log(`Numero sem zero ${pontoFlutuanteSemZero}`);


const novaOperacao = numeroPontoFlutuante * pontoFlutuanteSemZero;
console.log(novaOperacao);

const texto = "text";
console.log(texto * primeiroNumero);