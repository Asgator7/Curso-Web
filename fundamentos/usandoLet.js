var numero = 1
{
    let numero = 2
    console.log('dentro = ',numero)     // "let" possui escopo de bloco (mesmo não sendo função)
}
console.log('fora = ',numero)