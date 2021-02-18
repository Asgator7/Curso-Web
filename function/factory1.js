// Factory 

function criarPessoa(X, Y) {
    return {
        nome: X,
        sobrenome: Y
    }
}

console.log(criarPessoa('Ana', 'Victória'))
console.log(criarPessoa('Antonio', 'Brasílio'))
