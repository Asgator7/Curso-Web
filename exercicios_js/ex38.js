Sequencia = (Inicio = 0, Fim = 100) => {
    if (Inicio > Fim) {
        for (let i = Fim+1; i < Inicio; i++)
            if (i % 2 !== 0)
                console.log(`${i}`)
    }
    else
        for (let i = Inicio+1; i < Fim; i++)
            if (i % 2 !== 0)
                console.log(`${i}`)
}


Sequencia()