const Pilotos = ['Vettel', 'Alonso', 'Raikkonen','Massa']
Pilotos.pop()
console.log(Pilotos)

Pilotos.push('Verstappen')

Pilotos.shift() // Remove primeiro elemento
Pilotos.unshift('Hamilton') // Insere na primeira posição
console.log(Pilotos)

// Splice pode adicionar e remover

// Adicionar
Pilotos.splice(2, 0, 'Bottas', 'Massa')

// Remover
Pilotos.splice(3, 1)

const algunsPilotos = Pilotos.slice(2) // Retorna um novo Array

const algunsPilotos2 = Pilotos.slice(1, 4)