// Função sem retorno
function imprimirSoma (a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma('antonio ', 'brasílio')
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5)   //pegar os dois primeiros parâmetros, ignorando o resto

// Função com retorno
function soma(a, b = 0) {
    return a+b
}

console.log(soma(2, 5))
console.log(soma(2,))
