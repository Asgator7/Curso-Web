// Coleção dinàmica de pares/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'  // Posso utilizar números no ínicio, sem regras para nomes de variáveis
produto.preco = 220
produto.preco.quantidade = 300 // Não funciona 


console.log(produto.preco.quantidade)


delete produto.preco
delete produto['Marca do produto']


const Carro = {
    modelo: 'A4',
    valor:89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro: function () {
        //....
    }
}


Carro.proprietario.endereco.numero = 1000
Carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'


console.log(Carro)


// delete Carro.condutores
delete Carro.proprietario.endereco
delete Carro.calcularValorDoSeguro

console.log(Carro)
console.log(Carro.condutores)
console.log(Carro.condutores.length)