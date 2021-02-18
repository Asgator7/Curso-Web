function Construtor(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(this.nome)
    }
}


const p1 = new Construtor('Antonio')
p1.falar()