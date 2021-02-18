let Vetor = [10, 5, 10, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5]


let impar = 0, par = 0

for(let i = 0; i < Vetor.length; i++)
    (Vetor[i]%2===0) ? par++ : impar++

console.log(par)
console.log(impar)