fatorial = (numero) => {
    let aux = 1
    for(let i = 0; i < numero; i++)
        aux *= i+1;
    return aux
}

console.log(fatorial(5))