potenciacao = (base, expoente) => {
    let valorAcumulado = 1
    for(let i = 0; i < expoente; i++)
        valorAcumulado *= base;    
    return valorAcumulado
} 

console.log(potenciacao(2, 4))