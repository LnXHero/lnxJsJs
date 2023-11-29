function calculo(bruto, beneficios) {

    let imposto;

    if (bruto < 1100.00) {
        imposto = bruto * 0.05
    } else if (bruto >= 1100.01 && bruto < 2500.00) {
        imposto = bruto * 0.1
    } else {
        imposto = bruto * 0.15
    }

    return (bruto - imposto) + beneficios

}

console.log(calculo(1100, 50))
console.log(calculo(2000, 250))
console.log(calculo(3000, 400))