function soBoaNoticia(nota) {
    if (nota>=7) {
        console.log(`Aprovado com ${nota} pontos`)
    }
    else {
        console.log(`Reprovado com ${nota} pontos`)
    }
}

soBoaNoticia(9)
soBoaNoticia(5)

function seForVerdade(valor) {
    if (valor) {
        console.log(`${valor} é verdadeiro`)
    }
    else {
        console.log(`${valor} é falso`)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(true)
seForVerdade(0)