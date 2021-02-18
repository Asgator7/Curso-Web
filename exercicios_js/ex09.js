Avaliacao = (Nota) => {
    let ok = 0
    let aux = Nota
    let cont = 0
    if((Nota%5 === 0) && (Nota >= 38))
        ok = 1
    else if (Nota >= 38){
        while(aux%5 !== 0){
            aux++
            cont++
        }
        if(cont < 3)
            ok = 1
    }
    if(ok === 1)
        Nota = aux

    return Nota
}

