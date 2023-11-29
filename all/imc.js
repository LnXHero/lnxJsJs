function imc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}
console.log(imc(84, 1.71));