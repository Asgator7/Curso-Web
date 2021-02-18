const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const conversao  = e => JSON.parse(e)
const apenasPreco = e => e.preco


resultado = carrinho.map(conversao).map(apenasPreco)

console.log(resultado)