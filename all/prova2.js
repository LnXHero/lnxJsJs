function imc(peso, altura) {

    let media = peso / (altura * altura)

    if (media < 18.5) {
        return("Abaixo do peso")
    } else if (media >= 18.5 && media <25) {
        return("Peso normal")
    } else if (media >= 25 && media <30) {
        return("Acima do peso")
    } else if (media >= 30 && media <40) {
        return("Obeso")
    } else {
        return("Obesidade grave")
    }

}

console.log(imc(80, 1.70))