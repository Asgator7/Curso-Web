let dobro = (a, b) => {
    return a * b
}

dobro = (a, b) => a * b
dobro = _ => a * b   // Possui um parâmetro, mas pode ser ignorado



console.log(dobro(5,6))