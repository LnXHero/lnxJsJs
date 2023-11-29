let corzinha = ["azul", "vermelho", "green"]

let asd = document.getElementById("loop")

function mudaCorFundo(cor) {
    document.body.style.backgroundColor = cor
}

asd.addEventListener("click", function(){
    if (mudaCorFundo() == mudaCorFundo("white")){
        mudaCorFundo("red")
    } else if (mudaCorFundo("red") == mudaCorFundo("red")) {
        mudaCorFundo("blue")
    } else {
        mudaCorFundo("green")
    } 
})