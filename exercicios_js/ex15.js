RevendedoraCarros = (Carro) => {
    Carro = Carro.toUpperCase()
    switch (Carro){
        case "HATCH": return "Compra efetuada com sucesso"
        case "SEDANS": return "Tem certeza que não prefere este modelo?"
        case "MOTOCICLETAS": return "Tem certeza que não prefere este modelo?"
        case "CAMINHONETES": return "Tem certeza que não prefere este modelo?"
        default: return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(RevendedoraCarros("motocicletas"))