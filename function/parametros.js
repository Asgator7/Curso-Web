function soma (a, b, c){
    a = a!=undefined ? a : 1
    b = b!=undefined ? b : 1
    c = c!=undefined ? c : 1

    return a + b + c
}

function soma2(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma2(1, 2, 4))
