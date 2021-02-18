Calculadora = (Numero1, Operacao, Numero2) => {
    switch (Operacao){
        case "+": return Numero1 + Numero2
        case "-": return Numero1 - Numero2
        case "*": return Numero1 * Numero2
        case "/": return Numero1 / Numero2
        default: return "Operação inválida"
    }
}

console.log(Calculadora(8, '-', 2))