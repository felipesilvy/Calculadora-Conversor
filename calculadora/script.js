window.onload = inicio;

let visor = document.getElementById("span");
let resultadoFinal;
let regra = 1;
let regraOp;
let M1 = "";
let M2 = "";
let btn = document.getElementsByClassName("btn");
let operation = "";
let botaoC = document.getElementById("C");
let botaoCE = document.getElementById("CE");
let botaoApagar = document.getElementById("apagar");
let botaoPorcentagem = document.getElementById("porcentagem");
let botaoSoma = document.getElementById("soma");
let botaoSubtracao = document.getElementById("subtracao");
let botaoMultiplicacao = document.getElementById("multiplicacao");
let botaoDivisao = document.getElementById("divisao");
let botaoPotencia = document.getElementById("potencia");
let botaoRaiz = document.getElementById("raiz");
let botaoPonto = document.getElementById("ponto");
let botaoPi = document.getElementById("pi");
let botaoIgual = document.getElementById("igual");
let botao1 = document.getElementById("1");
let botao2 = document.getElementById("2");
let botao3 = document.getElementById("3");
let botao4 = document.getElementById("4");
let botao5 = document.getElementById("5");
let botao6 = document.getElementById("6");
let botao7 = document.getElementById("7");
let botao8 = document.getElementById("8");
let botao9 = document.getElementById("9");
let botaoZero = document.getElementById("zero");

function inicio() {
  botao1.addEventListener("click", function () {
    adicionarNumero(1);
  });
  botao2.addEventListener("click", function () {
    adicionarNumero(2);
  });
  botao3.addEventListener("click", function () {
    adicionarNumero(3);
  });
  botao4.addEventListener("click", function () {
    adicionarNumero(4);
  });
  botao5.addEventListener("click", function () {
    adicionarNumero(5);
  });
  botao6.addEventListener("click", function () {
    adicionarNumero(6);
  });
  botao7.addEventListener("click", function () {
    adicionarNumero(7);
  });
  botao8.addEventListener("click", function () {
    adicionarNumero(8);
  });
  botao9.addEventListener("click", function () {
    adicionarNumero(9);
  });
  botaoZero.addEventListener("click", function () {
    adicionarNumero(0);
  });
  botaoPonto.addEventListener("click", function () {
    adicionarNumero(".");
  });
  botaoPi.addEventListener("click", function () {
    adicionarNumero(3.14);
  });

  // Operadores
  botaoIgual.addEventListener("click", function () {
    resultado();
  });
  botaoSoma.addEventListener("click", function () {
    Operacao("soma");
  });
  botaoSubtracao.addEventListener("click", function () {
    Operacao("subtracao");
  });
  botaoMultiplicacao.addEventListener("click", function () {
    Operacao("multiplicacao");
  });
  botaoDivisao.addEventListener("click", function () {
    Operacao("divisao");
  });
  botaoPotencia.addEventListener("click", function () {
    Operacao("potencia");
  });
  botaoRaiz.addEventListener("click", function () {
    Operacao("raiz");
  });
  botaoPorcentagem.addEventListener("click", function () {
    Operacao("porcentagem");
  });

  // Botoes de limpar

  botaoC.addEventListener("click", function () {
    BotoesdeApagar("botaoC");
  });

  botaoCE.addEventListener("click", function () {
    BotoesdeApagar("botaoCE");
  });

  botaoApagar.addEventListener("click", function () {
    BotoesdeApagar("botaoApagar");
  });
}

function adicionarNumero(numero) {
  if ((M1 == "" || M1 == "Error") && regra == 1) {
    M1 = `${numero}`;
    visor.textContent = M1;
  } else if (M1.length > 17 && regra == 1) {
    M1 = "Error";
    visor.textContent = M1;
  } else if (M1 != "" && M1 != "Error" && regra == 1) {
    // Caso contrário, concatena o número ao visor
    M1 += `${numero}`;
    visor.textContent = M1;
  } else if ((M2 == "" || M2 == "Error") && regra == 2) {
    M2 = `${numero}`;
    visor.textContent = M2;
    regraOp = 0;
  } else if (M2.length > 17 && regra == 2) {
    M2 = "Error";
    visor.textContent = M2;
    regraOp = 0;
  } else if (M2 != "" && M2 != "Error" && regra == 2) {
    // Caso contrário, concatena o número ao visor
    M2 += `${numero}`;
    visor.textContent = M2;
    regraOp = 0;
  }
}

function Operacao(operador) {
  regra = 2;
  if (operador === "soma" && M1 !== "") {
    visor.textContent = "+";
    operation = "soma";
    regraOp = 1;
  } else if (operador === "subtracao" && M1 !== "") {
    visor.textContent = "-";
    operation = "subtracao";
    regraOp = 1;
  } else if (operador === "multiplicacao" && M1 !== "") {
    visor.textContent = "x";
    operation = "multiplicacao";
    regraOp = 1;
  } else if (operador === "multiplicacao" && M1 !== "") {
    visor.textContent = "x";
    operation = "multiplicacao";
    regraOp = 1;
  } else if (operador === "divisao" && M1 !== "") {
    visor.textContent = "÷";
    operation = "divisao";
    regraOp = 1;
  } else if (operador === "potencia" && M1 !== "") {
    operation = "potencia";
    resultado();
  } else if (operador === "raiz" && M1 !== "") {
    operation = "raiz";
    resultado();
  } else if (operador === "porcentagem" && M1 !== "") {
    visor.textContent = "%";
    operation = "porcentagem";
  }
}

function resultado() {
  if (operation === "soma") {
    resultadoFinal = parseFloat(M1) + parseFloat(M2);
    if (resultadoFinal.toString().length > 17) {
      resultadoFinal = resultadoFinal.toExponential(2);
    }
    visor.textContent = resultadoFinal;
    regra = 1;
    M1 = resultadoFinal;
    M2 = "";
  } else if (operation === "subtracao") {
    resultadoFinal = parseFloat(M1) - parseFloat(M2);
    if (resultadoFinal.toString().length > 17) {
      resultadoFinal = resultadoFinal.toExponential(2);
    }
    visor.textContent = resultadoFinal;
    regra = 1;
    M1 = resultadoFinal;
    M2 = "";
  } else if (operation === "multiplicacao") {
    resultadoFinal = parseFloat(M1) * parseFloat(M2);
    if (resultadoFinal.toString().length > 17) {
      resultadoFinal = resultadoFinal.toExponential(2);
    }
    visor.textContent = resultadoFinal;
    regra = 1;
    M1 = resultadoFinal;
    M2 = "";
  } else if (operation === "divisao") {
    resultadoFinal = parseFloat(M1) / parseFloat(M2);
    if (resultadoFinal.toString().length > 17) {
      resultadoFinal = resultadoFinal.toExponential(2);
    }
    visor.textContent = resultadoFinal;
    regra = 1;
    M1 = resultadoFinal;
    M2 = "";
  } else if (operation === "potencia") {
    resultadoFinal = parseFloat(M1) * parseFloat(M1);
    if (resultadoFinal.toString().length > 17) {
      resultadoFinal = resultadoFinal.toExponential(2);
    }
    visor.textContent = resultadoFinal;
    regra = 1;
    M1 = resultadoFinal;
    M2 = "";
  } else if (operation === "raiz") {
    resultadoFinal = Math.sqrt(parseFloat(M1));
    if (resultadoFinal.toString().length > 17) {
      resultadoFinal = resultadoFinal.toExponential(2);
    }
    visor.textContent = resultadoFinal;
    regra = 1;
    M1 = resultadoFinal;
    M2 = "";
  } else if (operation === "porcentagem") {
    resultadoFinal = (parseFloat(M2) / 100) * parseFloat(M1);
    if (resultadoFinal.toString().length > 17) {
      resultadoFinal = resultadoFinal.toExponential(2);
    }
    visor.textContent = resultadoFinal;
    regra = 1;
    M1 = resultadoFinal;
    M2 = "";
  } else if (M2 == "") {
    visor.textContent = M1;
  } else {
    M1 = "Error";
    visor.textContent = M1;
  }
}

function BotoesdeApagar(botao) {
  if (botao === "botaoC") {
    regra = 1;
    M1 = "";
    M2 = "";
    visor.textContent = "";
  } else if (botao === "botaoCE" && regra === 1) {
    M1 = "";
    visor.textContent = "";
  } else if (
    (botao === "botaoCE" || botao === "botaoApagar") &&
    regra === 2 &&
    regraOp == 1
  ) {
    operador = "";
    operation = "";
    visor.textContent = M1;
    regra = 1;
  } else if (botao === "botaoCE" && regra === 2 && regraOp == 0) {
    M2 = "";
    Operacao(operation);
  } else if (botao === "botaoApagar" && regra === 1 && M1.length > 0) {
    M1 = M1.slice(0, -1);
    visor.textContent = M1;
  } else if (
    botao === "botaoApagar" &&
    regra === 2 &&
    regraOp == 0 &&
    M2.length > 0
  ) {
    M2 = M2.slice(0, -1);
    visor.textContent = M2;
  }
}
