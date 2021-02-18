Comparar = (string1, string2) => {
    string1 = string1.toUpperCase()
    string2 = string2.toUpperCase()
    if(string1==string2)
        return 1
    else return 0
}


console.log(Comparar("AnTonio", "Antonio"))