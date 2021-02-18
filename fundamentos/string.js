const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('r'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log(escola.substring(3,0))

console.log('Escola '.concat(escola).concat(" !"))
console.log('Escola ' + escola + " !")
console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/,'e'))           // /\d/ nesse caso, substituir todos os números pelo segundo parâmetro
console.log(escola.replace(/\w/,'e'))           // /\w/ nesse caso, substituindo o primeiro caractér pelo segundo parâmetro
console.log(escola.replace(/\w/g,'e'))          // /\w/g nesse caso, o 'g' significa global, substituindo todos os termos

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))