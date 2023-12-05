let btn = document.getElementById("botao")


btn.addEventListener("click", function trocar(){
    let div = document.getElementById("titulo")
        
    // Isso aqui em cima faz a mesma coisa do que em
    // baixo, porém pode dar um erro futuro

    // div.classList.toggle("verde")


    if(div.classList.contains("verde")){
        div.classList.remove("verde")
    } else {
        div.classList.add("verde")
    }
})