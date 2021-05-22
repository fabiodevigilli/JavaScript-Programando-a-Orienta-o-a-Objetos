import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);


// teclas ctrl + alt + seta para cima ou para baixo, para selecionar mesma coluna em diferentes linhas

// valor null deve ser informado (intencional), ou seja, é explícito
// undefined é implícito, ou deja, não precisa ser informado

// Sobre os assessores do tipo get e set marque as alternativas corretas:
// Usando assessores do tipo set podemos alterar a regra de como um atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código
// Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura
