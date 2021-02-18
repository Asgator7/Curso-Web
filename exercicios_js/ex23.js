aluno = (CodAluno, Nota1, Nota2, Nota3) => {
    let Vetor = []
    let Maior = Nota1
    let MaiorI = 1
    let MediaPonderada = 0
    let Aprovacao
    Vetor.push(Nota1, Nota2, Nota3)
    for(let i = 1; i < Vetor.length; i++)
        if(Maior < Vetor[i]){
            Maior = Vetor[i]
            MaiorI = i+1
        }
    switch(MaiorI){
        case 1:
            MediaPonderada = (4*Nota1 + 3*Nota2 + 3*Nota3)/(4+3+3)
            break;
        case 2:
            MediaPonderada = (4*Nota2 + 3*Nota1 + 3*Nota3)/(4+3+3)
            break;
        case 3:
            MediaPonderada = (4*Nota3 + 3*Nota2 + 3*Nota1)/(4+3+3)
            break;
    }
    if(MediaPonderada>=5)
        Aprovacao = "APROVADO"
    else
        Aprovacao = "REPROVADO"
    return "Aluno: " + CodAluno + "\nNota1: " + Nota1 + "\nNota2: " + Nota2 + "\nNota3: " + Nota3 + "\nMédia: " + MediaPonderada + "\n" + Aprovacao
}

console.log(aluno(15301925601, 10, 1, 4))