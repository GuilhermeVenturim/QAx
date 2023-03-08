console.log('Olá, Javascript!')

let userName = 'Guilherme Venturim'

document.getElementById('user-name').innerHTML = userName

/*
let nome = "Mestre Yoda"
let idade = 100
let jedi = True

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)
*/

/* Operadores matemáticos*/

let n1 = 19
let n2 = "11"

let total = n1 + parseInt(n2)

console.log(total)

console.log(n1 + n2)

/* Operadores de comparação */

let v1 = 19
let v2 = 11

let comparar = v1 === v2 /* comparação estrita de valores e tipagem*/
let comparar1 = v1 == v2 /* comparação de valores ignorando a tipagem*/
let comparar2 = v1 != v2 /* comparação se os valores são diferentes ignorando tipagem*/
let comparar3 = v1 !== v2 /* comparação se a tipagem é diferente entre os valores*/

console.log(comparar)
console.log(comparar1)
console.log(comparar2)

/* Funções */

function soma(n1, n2) {
    
    console.log(n1 + n2)
}

soma(19, 11)

function boasVindas (nome) {
    alert(nome + ', Seja bem-vindo(a)!')
}

boasVindas('Guilherme')

function soma1(n1, n2) {
    return n1 + n2
}

let resultado = soma1(19, 11)

console.log(resultado)

/* Controle de fluxos com BDD 

    ->Projeto para desenvolver um projeto bancário.<-

    PO: hestória de usuários
        1 - Sendo um cliente correntista do banco
        2 - Posso sacar dinheiro em caixas eletrônicos
        3 - Para poder comprar em lugares que não aceitem o cartão de débito ou crédito

        1 - Sendo: Identifica o ator
        2 - Posso: Identifica aquilo que deve ser desenvolvido
        3 - Para:  Identifica valor agregado da funcionalidade

    PO + QA: Critérios de aceitação
*/

// controle de fluxo
let saldo = 1000
let valorMax = 700

function saque(valor) {

    if (valor > saldo) {

        alert('Saldo insuficiente. Por favor, digite um novo valor.')

    } else if (valor > valorMax) {

        alert('Operação não realizada. Valor máximo por operação é de R$ 700,00.')

    } else {
        
        saldo = saldo - valor
    
    }
}

saque(701) //massa de teste

console.log(saldo)

/*        Cenário 1 - Saque com sucesso (caminho feliz)
            - Dado que meu saldo é de R$ 1000,00
            - Quando faço um saque de R$ 500,00
            - Então o valor de saque deve ser deduzido do meu saldo
*/

/*
          Cenário 2 - Saque com valor superior ao saldo
            - Dado que meu saldo é de R$ 1000,00
            - Quando faço um saque de R$ 1500,00
            - Então não deve deduzir do meu saldo
            - E deve mostrar uma mensagem de alerta informando que o saque não foi realizado por saldo insuficiente
*/

/*
          Cenário 3 - Saque com valor máximo
            - Dado que meu saldo é de R$ 1000,00
            - E o valor máximo por operação é de R$ 700,00
            - Quando quando faço o saque no valor de R$ 701,00
            - Então não deve deduzir do meu saldo
            - E deve mostrar uma mensagem de alerta informando que o saque não foi realizado por exceder o limite por operação

*/


/* Arrays */

let gaveteiro = ['Camisas', 'Documentos', 'Eletrônicos', 'Livros']

console.log(gaveteiro[3])

let personagens = ['Mestre Yoda', 'Darth Vader', 'Princesa Leia', 'Luke Skywalker']

personagens.push('C3pO')

console.log(personagens)

/* Controle de repetição (Loops) */

personagens.forEach(function(p){ //usando função anônima

    console.log(p)

})

for (let i in personagens) {

    console.log(i)                  //imprime o indice de  cada item do array
    console.log(personagens[i])     //imprime os valores de cada item no array.
}

// 1. (let i = 0)   variável para inicialização em determinado indice
// 2. (i<=10)       Condição de parada
// 3. (i++)         incrementa até atingir a condição de parada
for (let i = 0; i <= 10; i++) {

    console.log(1)

}

/* Objetos */

let yoda = {}

yoda.nome = "Mestre Yoda"
yoda.idade = 100
yoda.jedi = true

console.log(yoda)

//objeto semelhante a json
let info = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostraIdade: function() {

        console.log(this.idade) //Imprime somente a idade

        console.log(`A idade do ${this.nome} é ${this.idade} anos`) //interpolação de string

    }
}
yoda.mostraIdade()


/* Constantes */

//const só deve ser usado onde o valor atribuído não será alterado.