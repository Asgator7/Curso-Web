Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


const Aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}: ${nome}`)
})