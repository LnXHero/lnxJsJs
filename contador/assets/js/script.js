const btnAdd1 = document.getElementById("adiciona1")
const btnAdd2 = document.getElementById("adiciona2")
const btnRemove1 = document.getElementById("remove1")
const btnRemove2 = document.getElementById("remove2")

let numero1 = 0
let numero2 = 0 

btnAdd1.addEventListener("click", function () {

    const add1 = document.getElementById("primeiroContador")
    
    numero1++

    add1.textContent = Number(numero1)
})
btnAdd2.addEventListener("click", function () {

    const add1 = document.getElementById("segundoContador")
    
    numero2++

    add1.textContent = Number(numero2)
})
btnRemove1.addEventListener("click", function () {

    const add1 = document.getElementById("primeiroContador")
    

    // numero1--

    if (numero1 === 0) {

    } else {
        numero1--
    }

    add1.textContent = Number(numero1)
})
btnRemove2.addEventListener("click", function () {

    const add1 = document.getElementById("segundoContador")
    

    // numero2--

    if (numero2 === 0) {

    } else {
        numero2--
    }

    add1.textContent = Number(numero2)
})








// calcular.addEventListener("click", function(){
//     const peso1 = Number(document.getElementById('peso').value)
//     const altura1 = Number(document.getElementById('altura').value)

//     const total = document.getElementById("total")

//     total.textContent = Number()
// })