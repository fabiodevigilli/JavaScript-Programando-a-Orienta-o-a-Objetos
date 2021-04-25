// teclas ctrl + alt + seta para cima ou para baixo, para selecionar mesma coluna em diferentes linhas

class Cliente{
    nome;
    cpf;    
}

class ContaCorrente{
    // https://github.com/tc39/proposal-class-fields#private-fields
    // "#"  representa uma propriedade privada 
    // "_" representa apenas uma convenção da comunidde de que a propriedade é privada, porém, não há bloqueio efetivo do uso externo
    agencia;
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
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(300);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);

console.log(contaCorrenteRicardo);
