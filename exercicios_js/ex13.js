DiaUtil = (Dia) => {
    switch (Dia){
        case 1: return "Domingo"
        case 2: return "Segunda-feira"
        case 3: return "Terça-feira"
        case 4: return "Quarta-feira"
        case 5: return "Quinta-feira"
        case 6: return "Sexta-feira"
        case 7: return "Sábado"
        default: return "Dia inválido"
    }
}

console.log(DiaUtil(8))