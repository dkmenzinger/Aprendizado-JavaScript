let valorDoProdutoNormal = 100;
const aVistaDebito = 10; // 10% de desconto.
const aVistaDinheiroPix = 15; // 15% de desconto.
const parceladoDuasVezes = valorDoProdutoNormal / 2; // Parcelamento sem juros.
const parceladoAcimaDuasVezes = (valorDoProdutoNormal / 3) * 1.1; // Acima de duas parcelas 10% de juros.
const metodoDePagamento = parceladoDuasVezes; // Cliente escolhe método de pagamento.

let valorFinal;

if (metodoDePagamento === aVistaDebito) {
    valorFinal = valorDoProdutoNormal - (valorDoProdutoNormal * aVistaDebito / 100);
    console.log("O valor do produto é " + valorDoProdutoNormal + " Reais, mas foi dividido em duas vezes sem desconto. Com pagamento à vista com débito, você recebeu 10% de desconto, então pagará " + valorFinal + " Reais.");
} else if (metodoDePagamento === aVistaDinheiroPix) {
    valorFinal = valorDoProdutoNormal - (valorDoProdutoNormal * aVistaDinheiroPix / 100);
    console.log("O valor do produto é " + valorDoProdutoNormal + " Reais, mas foi dividido em duas vezes sem desconto. Com pagamento à vista com dinheiro/Pix, você recebeu 15% de desconto, então pagará " + valorFinal + " Reais.");
} else if (metodoDePagamento === parceladoDuasVezes) {
    valorFinal = parceladoDuasVezes;
    console.log("O valor do produto é " + valorDoProdutoNormal + " Reais, mas foi dividido em duas vezes sem desconto. Você pagará " + valorFinal + " Reais.");
} else if (metodoDePagamento >= parceladoAcimaDuasVezes) {
    valorFinal = metodoDePagamento;
    console.log("O valor do produto é " + valorDoProdutoNormal + " Reais, mas foi dividido em duas vezes sem desconto. Parcelamento acima de duas vezes com 10% de juros. Total a pagar: " + valorFinal + " Reais.");
} else {
    console.log("Método de pagamento não reconhecido. O valor do produto é " + valorDoProdutoNormal + " Reais, mas foi dividido em duas vezes sem desconto.");
}




