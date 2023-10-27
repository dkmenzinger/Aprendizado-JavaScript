/* Crie uma classe para representar carros.
OS carros possuem um marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos de o valor
gasto em reais para realizar este percurso. */

class Carro {
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularCustoViagem(kilometros, precoCombustivel) {
        const custo = (kilometros / this.gastoMedio) * precoCombustivel;
        return custo;
    }

    descrever() {
        console.log(`Carro ${this.marca} é da cor ${this.cor} e tem um gasto médio de ${this.gastoMedio} km/l.`);
    }
}

const corola = new Carro("Corola", "preto", 12); // Exemplo de carro com gasto médio de 12 km/l
corola.descrever();

const distanciaViagem = 200; // Quilômetros a percorrer
const precoCombustivel = 5.75; // Preço do combustível por litro
const custoViagem = corola.calcularCustoViagem(distanciaViagem, precoCombustivel);
console.log(`O custo da viagem de ${distanciaViagem} km será de R$${custoViagem.toFixed(2)}.`);
