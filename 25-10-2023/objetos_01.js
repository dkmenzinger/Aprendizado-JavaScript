/* Um objeto em JavaScript é uma estrutura de dados que armazena informações
 como pares chave-valor. Ele é usado para representar entidades ou dados de 
 forma organizada e pode conter vários tipos de informações, como números,
  strings e até mesmo outros objetos. É uma parte fundamental da linguagem JavaScript.*/

const dadosPessoalCliente = {
    nome: 'Rogerio da silva Menzinger',
    idade: 35,
    sexo: 'Masculino',
    cabelo: 'Castanho'
};
dadosPessoalCliente.profissao = 'Programador'

console.log(dadosPessoalCliente.nome + " idade de " + dadosPessoalCliente.idade);
console.log(dadosPessoalCliente)