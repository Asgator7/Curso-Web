// Armazenando uma funcao em uma variável
const imprimirSoma = function (a, b) {
    console.log(a+b)
}

imprimirSoma(2,5)

// Armazenando uma função Arrow em uma variável
const soma = (a, b) => {
    return a+b
}

console.log(soma(2, 8))

// Retorno implícito 
const subtracao = (a, b) => a-b         // não possuindo chaves a sentença executa uma única linha (como no "for" e "if")

console.log(subtracao(10,3))

const imprimir2 = a => console.log(a)
imprimir2('legal')