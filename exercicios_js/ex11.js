AnoBissexto = (Ano) => {
    let Confirmacao
    if(Ano%400 === 0)
        Confirmacao = "É bissexto"
    else if(Ano%100 === 0)
        Confirmacao = "Não é bissexto"
    else if(Ano%4 === 0)
        Confirmacao = "É bissexto"
    else Confirmacao = "Não é bissexto"
    return Confirmacao
}


console.log(AnoBissexto(2017))