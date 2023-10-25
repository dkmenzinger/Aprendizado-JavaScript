/* Calculadora Simples: Crie funções para realizar operações de adição,
 subtração, multiplicação e divisão. Em seguida, peça ao usuário que insira dois números e a operação desejada.*/
 
 function CalculadoraSimples(x, y, operacaoMatematica) {
    if (operacaoMatematica === "subtracao") {
        return x - y;
    } else if (operacaoMatematica === "adicao") {
        return x + y;
    } else if (operacaoMatematica === "multiplicacao") {
        return x * y;
    } else if (operacaoMatematica === "divisao") {
        if (y !== 0) {
            return x / y;
        } else {
            return "Divisão por zero não é permitida.";
        }
    } else {
        return "Operação não reconhecida.";
    }
}
const x = 10;
const y = 5;
const operacao = "subtracao";

const resultado = CalculadoraSimples(x, y, operacao);

console.log(`Resultado: ${resultado}`);
    


 