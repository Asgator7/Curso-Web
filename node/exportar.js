console.log(module.exports  === this)
console.log(module.exports  === exports)
console.log(exports === this)


this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

console.log(module.exports)


exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {publico: true}