const colors = {
    p:'#388e3c',
    div:'#1565c0',
    span:'#e53935',
    section:'#f67809',
    ul:'#5e35b1',
    ol:'#fbc02d',
    header:'#d81b60',
    nav:'#64dd17',
    main:'#00acc1',
    footer:'#304ffe',
    form:'#9f6581',
    body:'#25b6da',
    padrao:'#616161',

    get(tag) {
        return this[tag] ? this [tag] : this.padrao
    }
}




document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)


    if(!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})


function verificar() {
    var data= new Date()
    var anoo= data.getFullYear()
    var fano= document.getElementById('ano')
    var res= document.getElementById ('res')
     if (fano.value.length == 0 || Number(fano.value)> anoo) {
         window.alert('[ERRO] tente novamente')
     }
     else {
        var fsex = document.getElementsByName('gender') 
        var idade = anoo -Number(fano.value)
        var genero=''
        var img = document.createElement ('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero='homem'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src','menino.png')
            }
            else if (idade<21) {
                //jovem
                img.setAttribute('src','adolescenteH.png')
            }
            else if(idade>21 && idade<59){
                //adulto
                img.setAttribute('src','homem.png')
            }
            else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        }
        else {
            genero='Mulher'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src','menina.png')
            }
            else if (idade<21) {
                //jovem
                img.setAttribute('src','adolescenteM.png')
            }
            else if(idade>21 && idade <59){
                //adulto
                img.setAttribute('src','mulher.png')
            }
            else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`detectamos ${genero} com ${idade} ano(s)`
        res.appendChild(img)
     }

}