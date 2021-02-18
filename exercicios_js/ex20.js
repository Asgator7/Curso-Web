NotasNecessarias = (Valor) => {
    let Cem = 100, Cinquenta = 50, Vinte = 20, Dez = 10, Cinco = 5, Dois = 2, Um = 1
    let Aux = Valor
    let Vetor = []
    Aux %= Cem
    if(Aux!==0){
        if(parseInt(Valor/Cem)!==0)
            Vetor.push(parseInt(Valor/Cem) + " Notas de " + Cem)
        Valor -= parseInt(Valor/Cem)*Cem
    }
    else{
        Vetor.push(parseInt(Valor/Cem) + " Notas de " + Cem)
        return Vetor
    }


    Aux %= Cinquenta
    if(Aux!==0){
        if(parseInt(Valor/Cinquenta)!==0)
        Vetor.push(parseInt(Valor/Cinquenta) + " Notas de " + Cinquenta)
        Valor -= parseInt(Valor/Cinquenta)*Cinquenta
    }
    else{
        Vetor.push(parseInt(Valor/Cinquenta) + " Notas de " + Cinquenta)
        return Vetor
    }


    Aux %= Vinte
    if(Aux!==0){
        if(parseInt(Valor/Vinte)!==0)
        Vetor.push(parseInt(Valor/Vinte) + " Notas de " + Vinte)
        Valor -= parseInt(Valor/Vinte)*Vinte
    }
    else{
        Vetor.push(parseInt(Valor/Vinte) + " Notas de " + Vinte)
        return Vetor
    }


    Aux %= Dez
    if(Aux!==0){
        if(parseInt(Valor/Dez)!==0)
             Vetor.push(parseInt(Valor/Dez) + " Notas de " + Dez)
        Valor -= parseInt(Valor/Dez)*Dez
    }
    else{
        Vetor.push(parseInt(Valor/Dez) + " Notas de " + Dez)
        return Vetor
    }


    Aux %= Cinco
    if(Aux!==0){
        if(parseInt(Valor/Cinco)!==0)
            Vetor.push(parseInt(Valor/Cinco) + " Notas de " + Cinco)
        Valor -= parseInt(Valor/Cinco)*Cinco
    }
    else{
        Vetor.push(parseInt(Valor/Cinco) + " Notas de " + Cinco)
        return Vetor
    }

   
    Aux %= Dois
    if(Aux!==0){
        if(parseInt(Valor/Dois)!==0)
            Vetor.push(parseInt(Valor/Dois) + " Notas de " + Dois)
        Valor -= parseInt(Valor/Dois)*Dois
    }
    else{
        Vetor.push(parseInt(Valor/Dois) + " Notas de " + Dois)
        return Vetor
    }


    Aux %= Um
    if(Aux!==0){
        if(parseInt(Valor/Um)!==0)
            Vetor.push(parseInt(Valor/Um) + " Notas de " + Um)
        Valor -= parseInt(Valor/Um)*Um
    }
    else{
        Vetor.push(parseInt(Valor/Um) + " Notas de " + Um)
        return Vetor
    }



    return Vetor
    
}

console.log(NotasNecessarias(153))