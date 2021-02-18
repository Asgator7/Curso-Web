// Pessoa -> 123 -> {...}


const Pessoa = {nome: 'João'}
Pessoa.nome = 'Pedro'

// Pessoa -> 456 -> {...} 

Pessoa = {nome: 'Ana'}  // Mesmo que o nome do atributo seja diferente

Object.freeze(Pessoa)  // Deixa impossível 'mexer' no objeto (deixa o objeto constante, e não apenas constante o endereço para onde ele aponta)

Pessoa.nome = 'Maria'