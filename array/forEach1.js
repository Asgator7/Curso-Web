const Aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}: ${nome}`)
    console.log(array)
})

Aprovados.forEach(nome => console.log(nome))

const exibirAprovados = Aprovados => console.log(Aprovados)

Aprovados.forEach(exibirAprovados)