//Exercício 01 

let employee = {
  code : 10,
  name : 'John'
};

employee.code = 10;
employee.name = "John";

/* 
  Exercício 02
  Como podemos melhorar o esse código usando TS? 
*/

enum Trabalho {
  Atriz, 
  Padeiro
}

type Dice =  {
  nome: string, 
  idade: number, 
  profissao: Trabalho
}

let pessoa1 : Dice = {
  nome : "maria",
  idade : 29,
  profissao : Trabalho.Atriz
}

let pessoa2 : Dice = {
  nome: "roberto",
  idade: 35,
  profissao: Trabalho.Padeiro
};

let pessoa3 : Dice = {
  nome: "laura",
  idade: 28,
  profissao: Trabalho.Atriz
};

let pessoa4 : Dice = {
  nome: "carlos",
  idade: 15,
  profissao: Trabalho.Padeiro
};

/* Exercício 03 */
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo = 0;

function somarAoSaldo(soma: number) {
    if(campoSaldo){
      soma.value += saldo
      campoSaldo.innerHTML = soma.toString();
    }
}

function limparSaldo() {
    soma.value = '';
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */