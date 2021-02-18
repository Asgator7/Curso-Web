let VetorInt = [1, 2, 3, 4]
let VetorString = ["Ana", "Bia", "Caio", "Beto"]
let VetorDouble = [10.5, 11.5, 12.5, 13.5]
let VetorMisto = []

VetorMisto = VetorDouble.concat(VetorInt, VetorString)
console.log(VetorMisto)

console.log(VetorInt.concat(VetorString, VetorDouble))