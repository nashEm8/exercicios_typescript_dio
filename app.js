//Exercício 01 
var employee = {
    code: 10,
    name: 'John'
};
employee.code = 10;
employee.name = "John";
/*
  Exercício 02
  Como podemos melhorar o esse código usando TS?
*/
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Trabalho.Atriz
};
var pessoa2 = {
    nome: "roberto",
    idade: 35,
    profissao: Trabalho.Padeiro
};
var pessoa3 = {
    nome: "laura",
    idade: 28,
    profissao: Trabalho.Atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 15,
    profissao: Trabalho.Padeiro
};
/* Exercício 03 */
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = 0;
function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
