import {Cliente} from "./Cliente.js"

export class ContaCorrente{
    // https://github.com/tc39/proposal-class-fields#private-fields
    // "#"  representa uma propriedade privada 
    // "_" representa apenas uma convenção da comunidde de que a propriedade é privada, porém, não há bloqueio efetivo do uso externo
    
    // propriedade static, pertence a classe e não a cada instância do objeto
    static numeroDeContas = 0;
    agencia;    
    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;

    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;            
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}