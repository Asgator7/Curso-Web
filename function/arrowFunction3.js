let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)


const obj = {}
comparaComThis.bind(obj)(obj)
// comparaComThis = comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(module.exports)

comparaComThisArrow.bind(obj)()

comparaComThisArrow(module.exports) // module.exports = this