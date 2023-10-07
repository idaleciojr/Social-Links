function novoAluno(nome, idade){
    return {nome, idade}            

}

let alunos = [
    novoAluno("Idalecio", 32),
    novoAluno("joao", 12),
    novoAluno("flavio", 42),
    novoAluno("Alef", 22),
]


function temMaisde30(aluno){
    return aluno.idade > 30;
}

console.log(alunos.filter(temMaisde30)) // Filter