const calcular = document.getElementById("calcular")

calcular.addEventListener("click", function(){
    const peso1 = Number(document.getElementById('peso').value)
    const altura1 = Number(document.getElementById('altura').value)

    const total = document.getElementById("total")

    total.textContent = Number(peso1 / (altura1 * altura1)).toFixed(2)
})