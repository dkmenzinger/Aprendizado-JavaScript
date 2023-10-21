let nota1 = 8;
let nota2 = 6;
let nota3 = 7;
let mediaDaNota = (nota1 + nota2 + nota3) / 3;

if (mediaDaNota >= 7) {
    console.log("Nota " + mediaDaNota.toFixed(1) + " passou de semestre! ");
}
else if (mediaDaNota > 5 && mediaDaNota < 7) {
    console.log("Nota " + mediaDaNota.toFixed(1) + " O aluno está de recuperação! ");
}
else {
    console.log("Nota " + mediaDaNota.toFixed(1) + " nota abaixo da média! ");
}