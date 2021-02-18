const pessoa = {
    saudacao: "Olá, bom dia",
    falar (){
        console.log(this.saudacao)
    }
}

// pessoa.falar()

// const falar = pessoa.falar
// falar()

// const falarDepessoa = pessoa.falar.bind(pessoa)

// falarDepessoa()


function venda () {
    console.log(this.valor)
}


const venda1 = {
    valor:  100
}

venda.bind(venda1)()






