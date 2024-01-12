let Num1 = parseInt(prompt("Escolha um numero !"))
let Num2 = parseInt(prompt("Escolha outro numero !"))
let operação = parseInt(prompt("Dentre as operações básicas soma = aperte 1, subtração = aperte 2, multiplicação = aperte 3 e divisão = aperte 4."))

let soma = Num1 + Num2
let subtração = Num1 - Num2
let multiplicação = Num1 * Num2


switch(operação){
       case 1 :
        console.log(soma)
        break

        case 2 :
            console.log(subtração)
            break

            case 3  :
                console.log(multiplicação)
                break
                    
                    default :
                    console.log(Num1 / Num2)
                    break
}