let opcao = "Kiwi"


opcao = opcao.toUpperCase()

switch(opcao){
    case "MACA":
        console.log("Não vendemos essa fruta aqui")
        break;
    case "KIWI":
        console.log("Estamos com escassez de kiwis")
        break;
    case "MELANCIA":
        console.log("Aqui está!\nSão 3 reais o quilo")
        break;
    default:
        console.log("Digite uma opção válida, por gentileza!")
        break;
}