MaiorNumero = (Jogos) => {
    let Maior = Jogos[0]
    let Menor = Jogos[0]
    let Recordes = 0
    let PiorJogo = 1
    let Resposta = []
    for(let i = 1; i < Jogos.length; i++){
        if(Jogos[i] > Maior){
            Maior = Jogos[i]
            Recordes++
        }
        if(Jogos[i] < Menor){
            Menor = Jogos[i]
            PiorJogo = i + 1
        }
    }
    Resposta.push(Recordes)
    Resposta.push(PiorJogo)
    return Resposta
}

const Jogos = [10, 20, 20, 8, 25, 3, 0, 30, 1];

console.log(MaiorNumero(Jogos))