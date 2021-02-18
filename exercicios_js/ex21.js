let Idade = 0

let Valor = 100


    if (Idade<10) Valor += 80
    if(Idade>=10 && Idade<=30) Valor += 50
    if (Idade>30 && Idade<=60) Valor += 95
    if (Idade>60) Valor += 130

console.log(Valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}))