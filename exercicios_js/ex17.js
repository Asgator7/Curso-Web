PlanoTrabalho = (Plano, Salario) => {
    Plano = Plano.toUpperCase()
    switch(Plano){
        case "A":
            console.log(Salario*1.10)
            break
        case "B":
            console.log(Salario*1.15)
            break
        case "C":
            console.log(Salario*1.20)
            break
        default:
            console.log("Plano inválido")
            break    
    }
}

PlanoTrabalho("B", 500)