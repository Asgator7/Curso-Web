let Vetor = [2, 1, 84, 5, 6, 7, 8]
let maior = Vetor[0]


for(let i = 1; i < Vetor.length; i++)
    if(maior<Vetor[i])
        maior = Vetor[i]


console.log(maior)