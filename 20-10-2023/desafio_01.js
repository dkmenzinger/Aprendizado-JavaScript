const precoEtanol = 4.75;
const precoGasolina = 5.75;
let combustivelDoCarro = "gasolina";
let distanciaDaViagem = 500;

let custoTotal

if(combustivelDoCarro === "gasolina") {
    custoTotal = precoGasolina * distanciaDaViagem;
    console.log("O custo da viagem fica em " + custoTotal + " Reais de " + combustivelDoCarro )
}
else if (combustivelDoCarro === "Etanol"){
    custoTotal = precoEtanol * distanciaDaViagem
    console.log("O custo da viagem fica em " + custoTotal + " Reais de " + combustivelDoCarro ) 
}
else {
    console.log("Escolha um tipo  de combústivel válido: 'etanol' ou 'galosina'.")
}
