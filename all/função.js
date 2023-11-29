function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(10, 20));
 
function saudacao() {
    console.log("Bom dia!");    
}
saudacao();

function saudacao1(nome){
    console.log(`Boa noite ${nome}`);
}
saudacao1("João");

const raiz = function(n){
    return n ** 0.5;
}
console.log(raiz(9));

const raiz1 = (n) => {return n ** 0.5;
}
console.log(raiz1(9));

const raiz2 = n => n ** 0.5;
console.log(raiz2(9));