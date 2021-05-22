export class Cliente{
    nome;
    _cpf;    

    // tendo apenas o acessor get, não conseguimos mais atribuir valor no cpf, fora do construtor
    get cpf() {
        return this._cpf;
    }

   // A inicialização de atributos é a principal responsabilidade do construtor.
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}