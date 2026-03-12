var altura = 5;
let area
var comprimento = 9;
area = comprimento * altura;
const forma = "triangulo";
console.log(comprimento * altura);

if(forma == 'retangulo'){
    area = altura * comprimento;
} else {
    area = (area * comprimento ) / 2;
}

console.log(area)


