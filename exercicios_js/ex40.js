
Conceitos = (VetorNotas) => {
    let NotasD = VetorNotas.filter((VetorNotas) => VetorNotas < 5)

    let NotasC = VetorNotas.filter((VetorNotas) => VetorNotas >= 5 && VetorNotas < 7)

    let NotasB = VetorNotas.filter((VetorNotas) => VetorNotas >= 7 && VetorNotas < 9)


    let NotasA = VetorNotas.filter((VetorNotas) => VetorNotas >= 9 && VetorNotas <= 10)

    return "Notas D: " + NotasD + "\nNotas C: " + NotasC + "\nNotas B: " + NotasB + "\nNotas A: " + NotasA

}

const Vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(Conceitos(Vetor))