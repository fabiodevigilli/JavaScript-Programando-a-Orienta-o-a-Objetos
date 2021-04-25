export class ContaCorrente{
    // https://github.com/tc39/proposal-class-fields#private-fields
    // "#"  representa uma propriedade privada 
    // "_" representa apenas uma convenção da comunidde de que a propriedade é privada, porém, não há bloqueio efetivo do uso externo
    agencia;
    cliente;

    _saldo = 0;
    

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