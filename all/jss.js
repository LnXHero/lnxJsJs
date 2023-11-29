let botaoVermelho = document.getElementById("vermelho")
let botaoVerde = document.getElementById("verde")

console.log(botaoVerde)
console.log(botaoVermelho)

function mudaCorFundo(cor) {
    document.body.style.backgroundColor = cor
}

botaoVermelho.addEventListener("click", function(){
    mudaCorFundo("red")
})
botaoVerde.addEventListener("click", function(){
    mudaCorFundo("green")
})








const botao = document.getElementById("clicar")

botao.addEventListener("click", function mudarBotao(){
    let saudacao = document.getElementById("asd")
    saudacao.innerHTML = "boa noite e obrigado por clicar"
})




// const botao = document.getElementById("clicar")

// botao.addEventListener("click", function mudarBotao(){
//     const botao = document.getElementById('clicar')
// })





// function mudarBotao() {
//     const botao = document.getElementById('clicar')
//     botao.innerHTML = 'clicou'
// }