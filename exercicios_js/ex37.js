PA = (N, a1, r) => {
    let soma = 0
    let VetorPA = []
    let aux = a1

    for(let i = 0; i < N; i++){
        VetorPA.push(aux)
        aux += r
        soma += aux
    }

    return "Soma: " + soma + "\nElementos: " + VetorPA
}

PG = (N, a1, r) => {
    let soma = 0
    let VetorPG = []
    let aux = a1

    for(let i = 0; i < N; i++){
        VetorPG.push(aux)
        aux += a1 * (Math.pow(r, i))
        soma += aux / 2
    }

    return "Soma: " + soma + "\nElementos: " + VetorPG
}

console.log(PA(18, 2 ,5))
console.log(PG(10, 2, 2))