const VetorPilha = [1, 2, 3, 4, 5]

const VetorAdiciona = [6, 7, 8, 9, 10]

//VetorPilha.push(VetorAdiciona) é válido também, porém vai armazenar na 6° posição UM vetor e não os valores 1 por 1

for(let i = 0; i < VetorAdiciona.length; i++){
    VetorPilha.push(VetorAdiciona[i])
}


console.log(VetorPilha)