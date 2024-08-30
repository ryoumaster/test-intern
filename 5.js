const prompt = require("prompt-sync")();

let string = String(prompt("Digite a string: "));

function reverse(string){
    let result = "";

    for(let i = string.length - 1; i>=0; i--){
        result += string[i];
    }
    return result;
}

console.log(reverse(string));