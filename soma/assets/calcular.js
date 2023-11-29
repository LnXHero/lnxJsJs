const calcular = document.getElementById("calcular")

calcular.addEventListener("click", function(){
    const numero1 = Number(document.getElementById('n1').value)
    const numero2 = Number(document.getElementById('n2').value)

    const total = document.getElementById("total")

    total.textContent = numero1 * 321 * 123 * 0 * numero2 
})