function Carro (velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0 //atributo privado
    
    this.acelerar = () => {   // método público
        if(velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaxima
    }

    this.GetVelocidadeAtual = () => velocidadeAtual

}

const uno = new Carro

uno.acelerar()
console.log(uno.GetVelocidadeAtual())

const ferrari = new Carro(350, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.GetVelocidadeAtual())
