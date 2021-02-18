console.log(typeof Array, typeof new Array, typeof [])

let Aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(Aprovados)

Aprovados = ['Bia', 'Carlos', 'Ana']
console.log(Aprovados[0])
console.log(Aprovados[3])
Aprovados[3] = 'Paulo'
Aprovados.push('Abia')
console.log(Aprovados.length)

Aprovados[9] = 'Rafael'

console.log(Aprovados.length)
console.log(Aprovados)
Aprovados.sort()
console.log(Aprovados)

delete Aprovados[1]
console.log(Aprovados)

Aprovados = ['Bia', 'Carlos', 'Ana']
Aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(Aprovados)
