Troca = (Vetor1, Vetor2) => {
    for(let i = 0; i < Vetor1.length; i++){
        Vetor1.push(Vetor2.shift())
        Vetor2.push(Vetor1.shift())
    }
    return Vetor1 + "\n" + Vetor2
}
const v1 = [1, 2, 3, 4, 5]
const v2 = [6, 7, 8, 9, 10]


console.log(Troca(v1, v2))