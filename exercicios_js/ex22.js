jurosCompostos = (capitalI, taxaJuros, timeAplication) => {
    let montante
    taxaJuros = taxaJuros/100

    montante = capitalI*Math.pow((1+taxaJuros), timeAplication)
    
    return montante.toFixed(2)
}



anuidade = (Mes, ValorAnuidade) => {
    return jurosCompostos(ValorAnuidade, 5, Mes)
}


console.log(anuidade(7, 1000))