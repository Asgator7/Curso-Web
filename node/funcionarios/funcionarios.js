const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = array => array.pais === 'China'

const mulheres = array => array.genero === 'F'


const menorSalario = (array, menorAtual) => {
    return array.salario < menorAtual.salario ? array : menorAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario))
})



