arredondar = (numeroReal) => (numeroReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).replace(".", ",");

console.log(arredondar(0.30000000000000004))