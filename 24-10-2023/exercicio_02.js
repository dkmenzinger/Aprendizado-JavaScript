// Função vereficar se o usuário maior de idade.


function vereficarMaiorDeIdade(name, idade){
    var maiorDeIdade = idade >= 18;
    
    if (maiorDeIdade) {
    console.log(name + " tem a idade de: " + idade + " anos é maior de idade");
    }
    else {
    console.log(name + " tem a idade de: " + idade+ " anos é menor de idade");

    }
}
vereficarMaiorDeIdade("Rogerio", 30);




