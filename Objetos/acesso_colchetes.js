const cliente = {
    nome : "Gabrielcio",
    idade : 28, 
    cpf : "13390223975",
    email : "gutiajs@gmail.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} com idade de ${cliente["idade"]} anos e o seu CPF é ${cliente["cpf"].substring(0,3)} e email ${cliente["email"]}`)

const chaves = ["nome", "idade", "cpf", "email"]

 chaves.forEach((chave) => {
    console.log(`A chave é ${chave} e o valor é ${cliente[chave]}`)
 })