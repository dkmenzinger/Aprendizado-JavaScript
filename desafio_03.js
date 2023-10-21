const pesoKilo = 155;
const alturaMetro = 1.55;
const imc = pesoKilo / Math.pow(alturaMetro,2);
// Math.pow biblioteca que é uma função incorporada do JavaScript que é usada para elevar um número à potência de outro número.

if (imc < 18.5) {
  console.log(
    "Indice de Massa corporal " + imc.toFixed(1) + " está abaixo do peso"
  );
} else if (imc >= 18.5 && imc < 25) {
  console.log(
    "Indice de Massa corporal " + imc.toFixed(1) + " está com o peso normal"
  );
} else if (imc >= 25 && imc < 30) {
  console.log(
    "Indice de Massa corporal " + imc.toFixed(1) + " está acima do peso"
  );
} else if (imc >= 30 && imc < 40) {
  console.log("Indice de Massa corporal " + imc.toFixed(1) + " está obeso ");
} else {
  console.log(
    "Indice de Massa corporal " +
      imc.toFixed(1) +
      " procure ajuda obesidade Grave! "
  );
}
