//Tipo number
let idade = 16;
console.log(`eu tenho ${idade} anos`);
//Tipo String

let nome = "CAFÉ";
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);

let maiorIdade;
if (idade >= 18){
    maiorIdade = true;
} else{
    maiorIdade = false;
}
console.log(`Eu sou maior de idade? ${maiorIdade}`);

//Tipo undefined
let endereco;
console.log("Endereco: ", endereco);

//Tipo Null
let salario = null;
console.log(`Meu Salario e de ${salario} reais`);

//Tipo Symbol

let simbolo = Symbol("identificador unico");
console.log(`Meu ID e: ${simbolo.description}`);

//Tipo BigInt
let numeroGrande = BigInt(9000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
console.log(`Numero grande: ${numeroGrande}`);

//Somar 2 numeros 