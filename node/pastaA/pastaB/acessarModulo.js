const moduloA = require('../../moduloA') // Linux case sensitive
console.log(moduloA.ola)

const http = require('http')

const C = require('./pastaC')
console.log(C.ola2)

http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)