const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}

const nomeAttr = 'Nota'
const valorattr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorattr
console.log(obj3)


const obj4 = {[nomeAttr]: valorattr}


const obj5 = {
    funcao1: function(){
        // ...
    }, 
    funcao2(){
        // ...
    }
}
