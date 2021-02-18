const peso1 = 1.0
const peso2 = Number('2.1')
console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliação1 = 9.871
const avaliação2 = 6.871

const total = avaliação1*peso1+avaliação2*peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2))
console.log(media.toString(16))     //transforma em outra base, nesse caso hexadecimal
console.log(media.toString(2))      //nesse caso binário

console.log(typeof media)
console.log(typeof Number)