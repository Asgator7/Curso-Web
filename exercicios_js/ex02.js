tresLados = (Lado1, Lado2, Lado3) => {
    if(Lado1 === Lado2 && Lado2 === Lado3)
        return 'Equilátero'
    else if(Lado1 === Lado2 || Lado1 === Lado3 || Lado2 === Lado3 )
        return 'Isósceles'
    else
        return 'Escaleno'    
}




console.log(tresLados(5, 3, 2))
