juroSimples = (capitalI, taxaJuros, timeAplication) => (capitalI*(taxaJuros/100)*timeAplication)+capitalI


console.log(juroSimples(2490, 2.5, 8))



jurosCompostos = (capitalI, taxaJuros, timeAplication) => {
    let montante
    taxaJuros = taxaJuros/100

    montante = capitalI*Math.pow((1+taxaJuros), timeAplication)
    
    return montante.toFixed(2)
}

console.log(jurosCompostos(20000, 0.5, 48))