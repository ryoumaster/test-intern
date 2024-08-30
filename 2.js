const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Numero: "));
resultado = fibonacci(numero);
console.log(resultado);

function fibonacci(numero){
    let a = 0;
    let b = 1;

    while(b < numero){
        let calc = b;
        b = a + b;
        a = calc;
    }

    if(b === numero || numero === 0){
        return `${numero} pertence a sequencia`
    }else {
        return `${numero} não pertence a sequencia`
    }
}