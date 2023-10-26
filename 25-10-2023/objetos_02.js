const pessoa = {
    nome: "Rogerio S Menzinger",
    idade: 35,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();