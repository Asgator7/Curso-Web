let numero = 1
let penultimo = 1
let ultimo = 1

console.log('1')
for(let i = 0; i < 10; i++){
    console.log(numero)
    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;
}