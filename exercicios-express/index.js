const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(saudacao('Antonio'))

app.get('/opa', (req, res) => {
    res.json({
        name: 'iPad 32gb',
        price: 1899.00,
        discount: 0.12
    })
    // res.send('Estou bem!');
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo', (req, res) => {
    res.send(req.body)
})

app.use('/opa', (req, res) => {
    console.log('Será que serei chamado?')
})

app.listen(3000)