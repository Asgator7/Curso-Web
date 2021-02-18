bhaskara = (ax2, bx, c) => {
    let resultados = []
    let delta =(bx*bx) - (4*(ax2*c))
    
    if(delta<0)
        return 'Delta é negativo'
    else{
        resultados.push((-bx - Math.sqrt(delta))/2*ax2)
        resultados.push((-bx + Math.sqrt(delta))/2*ax2)
        return resultados
    }
        
}

console.log(bhaskara(3, -5, 12))