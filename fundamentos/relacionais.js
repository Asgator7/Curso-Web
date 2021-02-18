console.log('01)' , '1' ==1)    //menos precisão, 2 '=' o tipo não precisa ser igual, só o valor
console.log('02)' , '1' ===1)   //mais precisão, 3 '=' o tipo terá de ser igual, não só o valor
console.log('03)' , '3' !=3)
console.log('04)' , '4' !==4)

console.log('05)'  , 3<2)
console.log('06)'  , 3>2)
console.log('08)'  , 3<=2)
console.log('09)'  , 3>=2)

const d1 = new Date (0) //1° de janeiro de 1970, data referência
const d2 = new Date (0)
console.log('09)' , d1===d2)
console.log('10)' , d1==d2)
console.log('11)' , d1.getTime()===d2.getTime())

console.log('12)' , undefined == null)
console.log('13)' , undefined === null)