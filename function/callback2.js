const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// let notasBaixas = []

// for(let i in notas){
//         if(notas[i] < 7)
//             notasBaixas.push(notas[i])
// }

// console.log(notasBaixas)


// notasBaixas = notas.filter((nota)=> nota<7)

// console.log(notasBaixas)

const alunos = ["Antonio", "Pedro", "Maria", "Ana", "Carol", "Amanda"]

let alunosBons = []

alunosBons = alunos.filter((alunos) => {
    for(let i in alunos)
        return alunos[1] == "n"
})

console.log(alunosBons)