AlturaAno = (H1, H2, TaxaAnual1, TaxaAnual2) => {
    let Anos = 0
    if(H1 < H2)
        if(TaxaAnual1 > TaxaAnual2){
            while(H1 < H2){
                H1 += TaxaAnual1
                H2 += TaxaAnual2
                Anos++
            }
            return "A primeira passará a segunda em " + Anos + " anos"
        }
        else return "A primeira nunca passará a segunda"
    else if(H2 < H1)
           if(TaxaAnual2 > TaxaAnual1){
               while(H2 < H1){
                   H1 += TaxaAnual1
                   H2 += TaxaAnual2
                   Anos++
               }
               return "A segunda passará a primeira em " + Anos + " anos"
           }
        else return "A segunda nunca passará a primeira"
    else if(TaxaAnual1 > TaxaAnual2)
            return "A primeira passará a segunda no próximo ano"
    else if(TaxaAnual2 > TaxaAnual1)
            return "A segunda passará a primeira no próximo ano"
    else return "As duas terão sempre a mesma altura"
}

console.log(AlturaAno(150, 150, 10, 1))