Lanchonete = (Codigo, Quantidade) => {
    switch(Codigo){
        case 100:
            return Quantidade*3
        case 200:
            return Quantidade*4
        case 300:
            return Quantidade*5.5
        case 400:
            return Quantidade*7.5
        case 500:
            return Quantidade*3.5
        case 600:
            return Quantidade*2.8    
        default:
            console.log("Código invpalido")
    }
}

PlanoTrabalho(200, 10)