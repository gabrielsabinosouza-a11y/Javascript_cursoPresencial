const pessoa = {
    nome: "Maria",
    profissao: "Engenheira",
}

console.log(pessoa.nome)
console.log(pessoa.telefone)

pessoa.telefone = "996713782"   
console.log(pessoa.telefone)

console.log(pessoa)

pessoa.nome = "luma silva"


console.log(pessoa) 


const novaPessoa = {
    nome: "João",
}

pessoa = novaPessoa
console.log(pessoa)