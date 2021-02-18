const nome = 'rebeca'
const concatenacao = 'Olá ' + nome + ' !'
const template = `
    Olá
    ${nome} !`                      
console.log(concatenacao,template)
//o símbolo '$' indica para a template que o elemento entre {} não deve ser sonsiderado string, e deve ter processamento

//expressões 
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')} !`)