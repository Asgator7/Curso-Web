// Object.preventExtensions  (Não pode aumentar, apenas remover atributos)

const produto = Object.preventExtensions ({
    nome : 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))    // Tem também, Object.isFrozen

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


// Object.seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado : ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)