const Vetor = [10, 20, 15, 16, 17, 14, 15, 16, 17, 1, 2, 3, 9, 21, 10, 20, 21, 21, 1, 2, 3, 4, 5]

let Dentro = 0
let Fora = 0

for(let i = 0; i < Vetor.length; i++){
    if((Vetor[i] >= 10) && (Vetor[i] <= 20))
        Dentro++
    else
        Fora++
}

console.log(Fora)

console.log(Dentro)