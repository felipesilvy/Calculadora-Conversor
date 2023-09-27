var select1 = document.getElementById("Categoria");
var select2 = document.getElementById("numero1");
var select3 = document.getElementById("numero2");

// Armazenar as opções originais
var opcoesOriginaisSelect2 = Array.from(select2.options);
var opcoesOriginaisSelect3 = Array.from(select3.options);

let comprimento = [
  "Metro",
  "Centímetro",
  "Quilômetro",
  "Mílimetro",
  "Polegada",
  "Pé",
  "Hectômetro",
];
let velocidade = [
  "Metro por segundo",
  "Quilômetro por hora",
  "Milha por segundo",
  "Nó",
  "Pés por segundo",
];
let tempo = [
  "Segundo",
  "Minuto",
  "Hora",
  "Milissegundo",
  "Dia",
  "Ano-Calendário",
];
let area = [
  "Metro Quadrado",
  "Quilômetro Quadrado",
  "Centímetro Quadrado",
  "Mílimetro Quadrado",
  "Milha Quadrada",
  "Hectare",
];
let massa = [
  "Quilograma",
  "Grama",
  "Miligrama",
  "Tonelada",
  "Libra",
  "Micrograma",
  "Quilate",
];
let temperatura = ["Graus Celsius", "Graus Fahrenheit", "Kelvin"];
let volume = [
  "Litro",
  "Mililitro",
  "Metro cúbico",
  "Pé cúbico",
  "Polegada cúbica",
];

let valorSelecionado;
let valorMudado;
let valorPraMudar;
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

window.onload = function () {
  DefinirCategoria();
  MudarCategoria("Comprimento");
  DefinirValores();
};

// Adiciona um ouvinte de evento para detectar quando o valor é alterado
function DefinirCategoria() {
  select1.addEventListener("change", function () {
    // Obtém o valor selecionado
    valorSelecionado = select1.value;
    MudarCategoria(valorSelecionado);
    // Faça algo com o valor selecionado, por exemplo, exibir no console
    console.log("Valor selecionado: " + valorSelecionado);
  });
}

function MudarCategoria(Categoria) {
  // Restaura as opções originais
  select2.innerHTML = "";
  select3.innerHTML = "";
  input1.value = null;
  input2.value = null;

  if (Categoria == "Comprimento") {
    teste(comprimento);
  } else if (Categoria == "Velocidade") {
    teste(velocidade);
  } else if (Categoria == "Tempo") {
    teste(tempo);
  } else if (Categoria == "Área") {
    teste(area);
  } else if (Categoria == "Massa") {
    teste(massa);
  } else if (Categoria == "Temperatura") {
    teste(temperatura);
  } else if (Categoria == "Volume") {
    teste(volume);
  }

  function teste(lista) {
    for (var i = 0; i < lista.length; i++) {
      var option = document.createElement("option");
      option.textContent = lista[i];
      option.value = lista[i];
      select2.appendChild(option);
      select3.appendChild(option.cloneNode(true));
    }
  }
  escritaFormula();
}

function DefinirValores() {
  input1.addEventListener("input", function () {
    selecionar(select1.value, input1, input2);
  });
  input2.addEventListener("input", function () {
    selecionar(select1.value, input2, input1);
  });
  select2.addEventListener("change", function () {
    input1.value = null;
    input2.value = null;
    escritaFormula();
  });
  select3.addEventListener("change", function () {
    input1.value = null;
    input2.value = null;
    escritaFormula();
  });
}

function selecionar(opcao, valor1, valor2) {
  if (opcao == "Comprimento") {
    calculoComprimento(valor1, valor2);
  } else if (opcao == "Velocidade") {
    calculoVelocidade(valor1, valor2);
  } else if (opcao == "Tempo") {
    calculoTempo(valor1, valor2);
  } else if (opcao == "Área") {
    calculoArea(valor1, valor2);
  } else if (opcao == "Massa") {
    calculoMassa(valor1, valor2);
  } else if (opcao == "Temperatura") {
    calculoTemperatura(valor1, valor2);
  } else if (opcao == "Volume") {
    calculoVolume(valor1, valor2);
  }
}

function calculoComprimento(valor1, valor2) {
  const conversoes = {
    "Metro-Centímetro": 100,
    "Centímetro-Metro": 1 / 100,
    "Metro-Quilômetro": 1 / 1000,
    "Quilômetro-Metro": 1000,
    "Metro-Mílimetro": 1000,
    "Mílimetro-Metro": 1 / 1000,
    "Metro-Polegada": 39.37,
    "Polegada-Metro": 1 / 39.37,
    "Metro-Pé": 3.281,
    "Pé-Metro": 1 / 3.281,
    "Metro-Hectômetro": 1 / 100,
    "Hectômetro-Metro": 100,
    "Centímetro-Quilômetro": 1 / 100000,
    "Quilômetro-Centímetro": 100000,
    "Centímetro-Mílimetro": 10,
    "Mílimetro-Centímetro": 1 / 10,
    "Centímetro-Polegada": 1 / 2.54,
    "Polegada-Centímetro": 2.54,
    "Centímetro-Pé": 1 / 30.48,
    "Pé-Centímetro": 30.48,
    "Centímetro-Hectômetro": 1 / 10000,
    "Hectômetro-Centímetro": 10000,
    "Quilômetro-Mílimetro": 1000000,
    "Mílimetro-Quilômetro": 1 / 1000000,
    "Quilômetro-Polegada": 39370.1,
    "Polegada-Quilômetro": 1 / 39370.1,
    "Quilômetro-Pé": 3280.84,
    "Pé-Quilômetro": 1 / 3280.84,
    "Quilômetro-Hectômetro": 0.1,
    "Hectômetro-Quilômetro": 10,
  };
  const chaveConversao = `${select2.value}-${select3.value}`;
  if (select2.value == select3.value) {
    valor2.value = valor1.value;
  } else if (valor1 === input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * conversoes[chaveConversao];
    }
  } else if (valor1 !== input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * (1 / conversoes[chaveConversao]);
    }
  }
}

function calculoVelocidade(valor1, valor2) {
  const conversoes = {
    "Metro por segundo-Centímetro por segundo": 100,
    "Centímetro por segundo-Metro por segundo": 1 / 100,
    "Metro por segundo-Quilômetro por hora": 3.6,
    "Quilômetro por hora-Metro por segundo": 1 / 3.6,
    "Metro por segundo-Milha por segundo": 0.000621371,
    "Milha por segundo-Metro por segundo": 1609.34,
    "Metro por segundo-Nó": 1.94384,
    "Nó-Metro por segundo": 0.514444,
    "Metro por segundo-Pés por segundo": 3.28084,
    "Pés por segundo-Metro por segundo": 1 / 3.28084,
    "Quilômetro por hora-Centímetro por segundo": 100000 / 3600,
    "Centímetro por segundo-Quilômetro por hora": 3600 / 100000,
    "Quilômetro por hora-Milha por segundo": 0.000277778,
    "Milha por segundo-Quilômetro por hora": 3600 / 1609.34,
    "Quilômetro por hora-Nó": 0.539957,
    "Nó-Quilômetro por hora": 1852,
    "Quilômetro por hora-Pés por segundo": 3280.84 / 3600,
    "Pés por segundo-Quilômetro por hora": 3600 / 3280.84,
    "Milha por segundo-Centímetro por segundo": (1609.34 * 100) / 3600,
    "Centímetro por segundo-Milha por segundo": 3600 / (1609.34 * 100),
    "Milha por segundo-Nó": 1852 / 3600,
    "Nó-Milha por segundo": 3600 / 1852,
    "Milha por segundo-Pés por segundo": 3600 / 5280,
    "Pés por segundo-Milha por segundo": 5280 / 3600,
    "Nó-Centímetro por segundo": 185200 / 3600,
    "Centímetro por segundo-Nó": 3600 / 185200,
    "Nó-Pés por segundo": 6076.12 / 3600,
    "Pés por segundo-Nó": 3600 / 6076.12,
    "Pés por segundo-Centímetro por segundo": 30.48,
    "Centímetro por segundo-Pés por segundo": 1 / 30.48,
  };

  const chaveConversao = `${select2.value}-${select3.value}`;
  if (select2.value == select3.value) {
    valor2.value = valor1.value;
  } else if (valor1 === input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * conversoes[chaveConversao];
    }
  } else if (valor1 !== input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * (1 / conversoes[chaveConversao]);
    }
  }
}

function calculoTempo(valor1, valor2) {
  const conversoes = {
    "Segundo-Minuto": 1 / 60,
    "Minuto-Segundo": 60,
    "Segundo-Hora": 1 / 3600,
    "Hora-Segundo": 3600,
    "Segundo-Milissegundo": 1000,
    "Milissegundo-Segundo": 1 / 1000,
    "Segundo-Dia": 1 / 86400,
    "Dia-Segundo": 86400,
    "Segundo-Ano-Calendário": 1 / 31536000,
    "Ano-Calendário-Segundo": 31536000,
    "Minuto-Hora": 1 / 60,
    "Hora-Minuto": 60,
    "Minuto-Milissegundo": 60000,
    "Milissegundo-Minuto": 1 / 60000,
    "Minuto-Dia": 1 / 1440,
    "Dia-Minuto": 1440,
    "Minuto-Ano-Calendário": 1 / 525600,
    "Ano-Calendário-Minuto": 525600,
    "Hora-Milissegundo": 3600000,
    "Milissegundo-Hora": 1 / 3600000,
    "Hora-Dia": 1 / 24,
    "Dia-Hora": 24,
    "Hora-Ano-Calendário": 1 / 8760,
    "Ano-Calendário-Hora": 8760,
    "Milissegundo-Dia": 1 / 86400000,
    "Dia-Milissegundo": 86400000,
    "Milissegundo-Ano-Calendário": 1 / 31536000000,
    "Ano-Calendário-Milissegundo": 31536000000,
    "Dia-Ano-Calendário": 1 / 365,
    "Ano-Calendário-Dia": 365,
  };
  const chaveConversao = `${select2.value}-${select3.value}`;
  if (select2.value == select3.value) {
    valor2.value = valor1.value;
  } else if (valor1 === input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * conversoes[chaveConversao];
    }
  } else if (valor1 !== input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * (1 / conversoes[chaveConversao]);
    }
  }
}

function calculoArea(valor1, valor2) {
  const conversoes = {
    "Metro Quadrado-Quilômetro Quadrado": 1 / 1000000,
    "Quilômetro Quadrado-Metro Quadrado": 1000000,
    "Metro Quadrado-Centímetro Quadrado": 10000,
    "Centímetro Quadrado-Metro Quadrado": 1 / 10000,
    "Metro Quadrado-Mílimetro Quadrado": 1000000,
    "Mílimetro Quadrado-Metro Quadrado": 1 / 1000000,
    "Metro Quadrado-Milha Quadrada": 3.861e-7,
    "Milha Quadrada-Metro Quadrado": 2590000,
    "Metro Quadrado-Hectare": 0.0001,
    "Hectare-Metro Quadrado": 10000,
    "Quilômetro Quadrado-Centímetro Quadrado": 10000000000,
    "Centímetro Quadrado-Quilômetro Quadrado": 1 / 10000000000,
    "Quilômetro Quadrado-Mílimetro Quadrado": 1e12,
    "Mílimetro Quadrado-Quilômetro Quadrado": 1 / 1e12,
    "Quilômetro Quadrado-Milha Quadrada": 0.239913,
    "Milha Quadrada-Quilômetro Quadrado": 1 / 0.239913,
    "Quilômetro Quadrado-Hectare": 100,
    "Hectare-Quilômetro Quadrado": 0.01,
    "Centímetro Quadrado-Mílimetro Quadrado": 100,
    "Mílimetro Quadrado-Centímetro Quadrado": 1 / 100,
    "Centímetro Quadrado-Milha Quadrada": 3.861e-9,
    "Milha Quadrada-Centímetro Quadrado": 25900000000,
    "Centímetro Quadrado-Hectare": 1e-8,
    "Hectare-Centímetro Quadrado": 100000000,
    "Mílimetro Quadrado-Milha Quadrada": 3.861e-13,
    "Milha Quadrada-Mílimetro Quadrado": 2590000000000000,
    "Mílimetro Quadrado-Hectare": 1e-10,
    "Hectare-Mílimetro Quadrado": 1e10,
    "Milha Quadrada-Hectare": 259,
    "Hectare-Milha Quadrada": 1 / 259,
  };
  const chaveConversao = `${select2.value}-${select3.value}`;
  if (select2.value == select3.value) {
    valor2.value = valor1.value;
  } else if (valor1 === input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * conversoes[chaveConversao];
    }
  } else if (valor1 !== input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * (1 / conversoes[chaveConversao]);
    }
  }
}

function calculoMassa(valor1, valor2) {
  const conversoes = {
    "Quilograma-Grama": 1000,
    "Grama-Quilograma": 1 / 1000,
    "Quilograma-Miligrama": 1000000,
    "Miligrama-Quilograma": 1 / 1000000,
    "Quilograma-Tonelada": 0.001,
    "Tonelada-Quilograma": 1000,
    "Quilograma-Libra": 2.20462,
    "Libra-Quilograma": 1 / 2.20462,
    "Quilograma-Micrograma": 1000000000,
    "Micrograma-Quilograma": 1 / 1000000000,
    "Quilograma-Quilate": 5000,
    "Quilate-Quilograma": 1 / 5000,
    "Grama-Miligrama": 1000,
    "Miligrama-Grama": 1 / 1000,
    "Grama-Tonelada": 1e-6,
    "Tonelada-Grama": 1e6,
    "Grama-Libra": 0.00220462,
    "Libra-Grama": 453.592,
    "Grama-Micrograma": 1000000,
    "Micrograma-Grama": 1 / 1000000,
    "Grama-Quilate": 5000,
    "Quilate-Grama": 1 / 5000,
    "Miligrama-Tonelada": 1e-9,
    "Tonelada-Miligrama": 1e9,
    "Miligrama-Libra": 2.20462e-6,
    "Libra-Miligrama": 453592,
    "Miligrama-Micrograma": 1000,
    "Micrograma-Miligrama": 1 / 1000,
    "Miligrama-Quilate": 5,
    "Quilate-Miligrama": 1 / 5,
    "Tonelada-Libra": 2204.62,
    "Libra-Tonelada": 1 / 2204.62,
    "Tonelada-Micrograma": 1e12,
    "Micrograma-Tonelada": 1 / 1e12,
    "Tonelada-Quilate": 5e6,
    "Quilate-Tonelada": 1 / 5e6,
    "Libra-Micrograma": 453592000,
    "Micrograma-Libra": 1 / 453592000,
    "Libra-Quilate": 2267.96,
    "Quilate-Libra": 1 / 2267.96,
    "Micrograma-Quilate": 2e-6,
    "Quilate-Micrograma": 1 / 2e-6,
  };
  const chaveConversao = `${select2.value}-${select3.value}`;
  if (select2.value == select3.value) {
    valor2.value = valor1.value;
  } else if (valor1 === input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * conversoes[chaveConversao];
    }
  } else if (valor1 !== input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * (1 / conversoes[chaveConversao]);
    }
  }
}

function calculoTemperatura(valor1, valor2) {
  if (select2.value == select3.value) {
    valor2.value = valor1.value;
  } else if (valor1 === input1) {
    if (
      select2.value == "Graus Celsius" &&
      select3.value == "Graus Fahrenheit"
    ) {
      valor2.value = parseFloat(valor1.value) * 1.8 + 32;
    } else if (select2.value == "Graus Celsius" && select3.value == "Kelvin") {
      valor2.value = parseFloat(valor1.value) + parseFloat(273.15);
    } else if (
      select2.value == "Kelvin" &&
      select3.value == "Graus Fahrenheit"
    ) {
      valor2.value = valor1.value * 1.8 - 459.7;
    } else if (
      select2.value == "Graus Fahrenheit" &&
      select3.value == "Graus Celsius"
    ) {
      valor2.value = (parseFloat(valor1.value) - 32) / 1.8;
    } else if (select2.value == "Kelvin" && select3.value == "Graus Celsius") {
      valor2.value = parseFloat(valor1.value) - parseFloat(273.15);
    } else if (
      select2.value == "Graus Fahrenheit" &&
      select3.value == "Kelvin"
    ) {
      valor2.value = (valor1.value - 32) * (5 / 9) + 273.15;
    }
  } else if (valor1 !== input1) {
    if (
      select2.value == "Graus Celsius" &&
      select3.value == "Graus Fahrenheit"
    ) {
      valor2.value = (parseFloat(valor1.value) - 32) / 1.8;
    } else if (select2.value == "Graus Celsius" && select3.value == "Kelvin") {
      valor2.value = parseFloat(valor1.value) - parseFloat(273.15);
    } else if (
      select2.value == "Kelvin" &&
      select3.value == "Graus Fahrenheit"
    ) {
      valor2.value = (valor1.value - 32) * (5 / 9) + 273.15;
    } else if (
      select2.value == "Graus Fahrenheit" &&
      select3.value == "Graus Celsius"
    ) {
      valor2.value = parseFloat(valor1.value) * 1.8 + 32;
    } else if (select2.value == "Kelvin" && select3.value == "Graus Celsius") {
      valor2.value = parseFloat(valor1.value) + parseFloat(273.15);
    } else if (
      select2.value == "Graus Fahrenheit" &&
      select3.value == "Kelvin"
    ) {
      valor2.value = valor2.value = valor1.value * 1.8 - 459.7;
    }
  }
}

function calculoVolume(valor1, valor2) {
  const conversoes = {
    "Litro-Mililitro": 1000,
    "Mililitro-Litro": 1 / 1000,
    "Litro-Metro cúbico": 0.001,
    "Metro cúbico-Litro": 1000,
    "Litro-Pé cúbico": 0.0353147,
    "Pé cúbico-Litro": 1 / 0.0353147,
    "Litro-Polegada cúbica": 61.0237,
    "Polegada cúbica-Litro": 1 / 61.0237,
    "Mililitro-Metro cúbico": 1e-6,
    "Metro cúbico-Mililitro": 1e6,
    "Mililitro-Pé cúbico": 3.53147e-5,
    "Pé cúbico-Mililitro": 1 / 3.53147e-5,
    "Mililitro-Polegada cúbica": 0.0610237,
    "Polegada cúbica-Mililitro": 1 / 0.0610237,
    "Metro cúbico-Pé cúbico": 35.3147,
    "Pé cúbico-Metro cúbico": 1 / 35.3147,
    "Metro cúbico-Polegada cúbica": 61023.7,
    "Polegada cúbica-Metro cúbico": 1 / 61023.7,
    "Pé cúbico-Polegada cúbica": 1728,
    "Polegada cúbica-Pé cúbico": 1 / 1728,
  };
  const chaveConversao = `${select2.value}-${select3.value}`;
  if (select2.value == select3.value) {
    valor2.value = valor1.value;
  } else if (valor1 === input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * conversoes[chaveConversao];
    }
  } else if (valor1 !== input1) {
    if (chaveConversao in conversoes) {
      valor2.value = valor1.value * (1 / conversoes[chaveConversao]);
    }
  }
}

function escritaFormula() {
  const conversoes = {
    "Metro-Centímetro": `Multiplique o valor inicial por 100`,
    "Centímetro-Metro": "Divida o valor inicial por 100",
    "Metro-Quilômetro": "Divida o valor inicial por 1000",
    "Quilômetro-Metro": "Multiplique o valor inicial por 1000",
    "Metro-Mílimetro": "Multiplique o valor inicial por 1000",
    "Mílimetro-Metro": "Divida o valor inicial por 1000",
    "Metro-Polegada": "Multiplique o valor inicial por 39.37",
    "Polegada-Metro": "Divida o valor inicial por 39.37",
    "Metro-Pé": "Multiplique o valor inicial por 3.281",
    "Pé-Metro": "Divida o valor inicial por 3.281",
    "Metro-Hectômetro": "Divida o valor inicial por 100",
    "Hectômetro-Metro": "Multiplique o valor inicial por 100",
    "Centímetro-Quilômetro": "Divida o valor inicial por 100000",
    "Quilômetro-Centímetro": "Multiplique o valor inicial por 100000",
    "Centímetro-Mílimetro": "Multiplique o valor inicial por 10",
    "Mílimetro-Centímetro": "Divida o valor inicial por 10",
    "Centímetro-Polegada": "Divida o valor inicial por 2.54",
    "Polegada-Centímetro": "Multiplique o valor inicial por 2.54",
    "Centímetro-Pé": "Divida o valor inicial por 30.48",
    "Pé-Centímetro": "Multiplique o valor inicial por 30.48",
    "Centímetro-Hectômetro": "Divida o valor inicial por 10000",
    "Hectômetro-Centímetro": "Multiplique o valor inicial por 10000",
    "Quilômetro-Mílimetro": "Multiplique o valor inicial por 1000000",
    "Mílimetro-Quilômetro": "Divida o valor inicial por 1000000",
    "Quilômetro-Polegada": "Multiplique o valor inicial por 39370.1",
    "Polegada-Quilômetro": "Divida o valor inicial por 39370.1",
    "Quilômetro-Pé": "Multiplique o valor inicial por 3280.84",
    "Pé-Quilômetro": "Divida o valor inicial por 3280.84",
    "Quilômetro-Hectômetro": "Multiplique o valor inicial por 0.1",
    "Hectômetro-Quilômetro": "Multiplique o valor inicial por 10",

    "Metro por segundo-Centímetro por segundo":
      "Multiplique o valor inicial por 100",
    "Centímetro por segundo-Metro por segundo":
      "Divida o valor inicial por 100",
    "Metro por segundo-Quilômetro por hora": "Divida o valor inicial por 3.6",
    "Quilômetro por hora-Metro por segundo":
      "Multiplique o valor inicial por 3.6",
    "Metro por segundo-Milha por segundo":
      "Multiplique o valor inicial por 0.000621371",
    "Milha por segundo-Metro por segundo":
      "Divida o valor inicial por 0.000621371",
    "Metro por segundo-Nó": "Multiplique o valor inicial por 1.94384",
    "Nó-Metro por segundo": "Divida o valor inicial por 1.94384",
    "Metro por segundo-Pés por segundo":
      "Multiplique o valor inicial por 3.28084",
    "Pés por segundo-Metro por segundo": "Divida o valor inicial por 3.28084",
    "Quilômetro por hora-Centímetro por segundo":
      "Multiplique o valor inicial por 27.7778",
    "Centímetro por segundo-Quilômetro por hora":
      "Divida o valor inicial por 27.7778",
    "Quilômetro por hora-Milha por segundo":
      "Divida o valor inicial por 0.000277778",
    "Milha por segundo-Quilômetro por hora":
      "Multiplique o valor inicial por 3600",
    "Quilômetro por hora-Nó": "Divida o valor inicial por 0.539957",
    "Nó-Quilômetro por hora": "Multiplique o valor inicial por 1852",
    "Quilômetro por hora-Pés por segundo":
      "Divida o valor inicial por 0.911344",
    "Pés por segundo-Quilômetro por hora":
      "Multiplique o valor inicial por 1.09728",
    "Milha por segundo-Centímetro por segundo":
      "Multiplique o valor inicial por 447.04",
    "Centímetro por segundo-Milha por segundo":
      "Divida o valor inicial por 447.04",
    "Milha por segundo-Nó": "Multiplique o valor inicial por 0.514444",
    "Nó-Milha por segundo": "Divida o valor inicial por 0.514444",
    "Milha por segundo-Pés por segundo": "Divida o valor inicial por 1.09728",
    "Pés por segundo-Milha por segundo":
      "Multiplique o valor inicial por 0.911344",
    "Nó-Centímetro por segundo": "Multiplique o valor inicial por 51.126",
    "Centímetro por segundo-Nó": "Divida o valor inicial por 51.126",
    "Nó-Pés por segundo": "Multiplique o valor inicial por 1.68781",
    "Pés por segundo-Nó": "Divida o valor inicial por 1.68781",
    "Pés por segundo-Centímetro por segundo":
      "Multiplique o valor inicial por 30.48",
    "Centímetro por segundo-Pés por segundo":
      "Divida o valor inicial por 30.48",

    "Segundo-Minuto": "Multiplique o valor inicial por 60",
    "Minuto-Segundo": "Divida o valor inicial por 60",
    "Segundo-Hora": "Multiplique o valor inicial por 3600",
    "Hora-Segundo": "Divida o valor inicial por 3600",
    "Segundo-Milissegundo": "Multiplique o valor inicial por 1000",
    "Milissegundo-Segundo": "Divida o valor inicial por 1000",
    "Segundo-Dia": "Multiplique o valor inicial por 86400",
    "Dia-Segundo": "Divida o valor inicial por 86400",
    "Segundo-Ano-Calendário": "Multiplique o valor inicial por 31536000",
    "Ano-Calendário-Segundo": "Divida o valor inicial por 31536000",
    "Minuto-Hora": "Multiplique o valor inicial por 60",
    "Hora-Minuto": "Divida o valor inicial por 60",
    "Minuto-Milissegundo": "Multiplique o valor inicial por 60000",
    "Milissegundo-Minuto": "Divida o valor inicial por 60000",
    "Minuto-Dia": "Multiplique o valor inicial por 1440",
    "Dia-Minuto": "Divida o valor inicial por 1440",
    "Minuto-Ano-Calendário": "Multiplique o valor inicial por 525600",
    "Ano-Calendário-Minuto": "Divida o valor inicial por 525600",
    "Hora-Milissegundo": "Multiplique o valor inicial por 3600000",
    "Milissegundo-Hora": "Divida o valor inicial por 3600000",
    "Hora-Dia": "Multiplique o valor inicial por 24",
    "Dia-Hora": "Divida o valor inicial por 24",
    "Hora-Ano-Calendário": "Multiplique o valor inicial por 8760",
    "Ano-Calendário-Hora": "Divida o valor inicial por 8760",
    "Milissegundo-Dia": "Multiplique o valor inicial por 86400000",
    "Dia-Milissegundo": "Divida o valor inicial por 86400000",
    "Milissegundo-Ano-Calendário":
      "Multiplique o valor inicial por 31536000000",
    "Ano-Calendário-Milissegundo": "Divida o valor inicial por 31536000000",
    "Dia-Ano-Calendário": "Multiplique o valor inicial por 365",
    "Ano-Calendário-Dia": "Divida o valor inicial por 365",

    "Metro Quadrado-Quilômetro Quadrado":
      "Divida o valor inicial por 1,000,000",
    "Quilômetro Quadrado-Metro Quadrado":
      "Multiplique o valor inicial por 1,000,000",
    "Metro Quadrado-Centímetro Quadrado":
      "Multiplique o valor inicial por 10,000",
    "Centímetro Quadrado-Metro Quadrado": "Divida o valor inicial por 10,000",
    "Metro Quadrado-Mílimetro Quadrado":
      "Multiplique o valor inicial por 1,000,000",
    "Mílimetro Quadrado-Metro Quadrado": "Divida o valor inicial por 1,000,000",
    "Metro Quadrado-Milha Quadrada": "Multiplique o valor inicial por 3.861e-7",
    "Milha Quadrada-Metro Quadrado": "Divida o valor inicial por 3,861,000",
    "Metro Quadrado-Hectare": "Multiplique o valor inicial por 0.0001",
    "Hectare-Metro Quadrado": "Divida o valor inicial por 0.0001",
    "Quilômetro Quadrado-Centímetro Quadrado":
      "Multiplique o valor inicial por 10,000,000,000",
    "Centímetro Quadrado-Quilômetro Quadrado":
      "Divida o valor inicial por 10,000,000,000",
    "Quilômetro Quadrado-Mílimetro Quadrado":
      "Multiplique o valor inicial por 1e12",
    "Mílimetro Quadrado-Quilômetro Quadrado": "Divida o valor inicial por 1e12",
    "Quilômetro Quadrado-Milha Quadrada":
      "Multiplique o valor inicial por 0.239913",
    "Milha Quadrada-Quilômetro Quadrado": "Divida o valor inicial por 0.239913",
    "Quilômetro Quadrado-Hectare": "Multiplique o valor inicial por 100",
    "Hectare-Quilômetro Quadrado": "Divida o valor inicial por 100",
    "Centímetro Quadrado-Mílimetro Quadrado":
      "Multiplique o valor inicial por 100",
    "Mílimetro Quadrado-Centímetro Quadrado": "Divida o valor inicial por 100",
    "Centímetro Quadrado-Milha Quadrada":
      "Multiplique o valor inicial por 3.861e-9",
    "Milha Quadrada-Centímetro Quadrado":
      "Divida o valor inicial por 3,861,000,000",
    "Centímetro Quadrado-Hectare": "Multiplique o valor inicial por 1e-8",
    "Hectare-Centímetro Quadrado": "Divida o valor inicial por 1e-8",
    "Mílimetro Quadrado-Milha Quadrada":
      "Multiplique o valor inicial por 3.861e-13",
    "Milha Quadrada-Mílimetro Quadrado":
      "Divida o valor inicial por 3,861,000,000,000,000",
    "Mílimetro Quadrado-Hectare": "Multiplique o valor inicial por 1e-10",
    "Hectare-Mílimetro Quadrado": "Divida o valor inicial por 1e-10",
    "Milha Quadrada-Hectare": "Multiplique o valor inicial por 259",
    "Hectare-Milha Quadrada": "Divida o valor inicial por 259",

    "Quilograma-Grama": "Multiplique o valor inicial por 1000",
    "Grama-Quilograma": "Divida o valor inicial por 1000",
    "Quilograma-Miligrama": "Multiplique o valor inicial por 1,000,000",
    "Miligrama-Quilograma": "Divida o valor inicial por 1,000,000",
    "Quilograma-Tonelada": "Multiplique o valor inicial por 0.001",
    "Tonelada-Quilograma": "Divida o valor inicial por 0.001",
    "Quilograma-Libra": "Multiplique o valor inicial por 2.20462",
    "Libra-Quilograma": "Divida o valor inicial por 2.20462",
    "Quilograma-Micrograma": "Multiplique o valor inicial por 1,000,000,000",
    "Micrograma-Quilograma": "Divida o valor inicial por 1,000,000,000",
    "Quilograma-Quilate": "Multiplique o valor inicial por 5000",
    "Quilate-Quilograma": "Divida o valor inicial por 5000",
    "Grama-Miligrama": "Multiplique o valor inicial por 1000",
    "Miligrama-Grama": "Divida o valor inicial por 1000",
    "Grama-Tonelada": "Multiplique o valor inicial por 1e-6",
    "Tonelada-Grama": "Divida o valor inicial por 1e6",
    "Grama-Libra": "Multiplique o valor inicial por 0.00220462",
    "Libra-Grama": "Divida o valor inicial por 453.592",
    "Grama-Micrograma": "Multiplique o valor inicial por 1,000,000",
    "Micrograma-Grama": "Divida o valor inicial por 1,000,000",
    "Grama-Quilate": "Multiplique o valor inicial por 5000",
    "Quilate-Grama": "Divida o valor inicial por 5000",
    "Miligrama-Tonelada": "Multiplique o valor inicial por 1e-9",
    "Tonelada-Miligrama": "Divida o valor inicial por 1e9",
    "Miligrama-Libra": "Multiplique o valor inicial por 2.20462e-6",
    "Libra-Miligrama": "Divida o valor inicial por 453592",
    "Miligrama-Micrograma": "Multiplique o valor inicial por 1000",
    "Micrograma-Miligrama": "Divida o valor inicial por 1000",
    "Miligrama-Quilate": "Multiplique o valor inicial por 5",
    "Quilate-Miligrama": "Divida o valor inicial por 5",
    "Tonelada-Libra": "Multiplique o valor inicial por 2204.62",
    "Libra-Tonelada": "Divida o valor inicial por 2204.62",
    "Tonelada-Micrograma": "Multiplique o valor inicial por 1e12",
    "Micrograma-Tonelada": "Divida o valor inicial por 1e12",
    "Tonelada-Quilate": "Multiplique o valor inicial por 5e6",
    "Quilate-Tonelada": "Divida o valor inicial por 5e6",
    "Libra-Micrograma": "Multiplique o valor inicial por 453592000",
    "Micrograma-Libra": "Divida o valor inicial por 453592000",
    "Libra-Quilate": "Multiplique o valor inicial por 2267.96",
    "Quilate-Libra": "Divida o valor inicial por 2267.96",
    "Micrograma-Quilate": "Multiplique o valor inicial por 2e-6",
    "Quilate-Micrograma": "Divida o valor inicial por 2e-6",

    "Litro-Mililitro": "Multiplique o valor inicial por 1000",
    "Mililitro-Litro": "Divida o valor inicial por 1000",
    "Litro-Metro cúbico": "Multiplique o valor inicial por 0.001",
    "Metro cúbico-Litro": "Divida o valor inicial por 0.001",
    "Litro-Pé cúbico": "Multiplique o valor inicial por 0.0353147",
    "Pé cúbico-Litro": "Divida o valor inicial por 0.0353147",
    "Litro-Polegada cúbica": "Multiplique o valor inicial por 61.0237",
    "Polegada cúbica-Litro": "Divida o valor inicial por 61.0237",
    "Mililitro-Metro cúbico": "Multiplique o valor inicial por 1e-6",
    "Metro cúbico-Mililitro": "Divida o valor inicial por 1e6",
    "Mililitro-Pé cúbico": "Multiplique o valor inicial por 3.53147e-5",
    "Pé cúbico-Mililitro": "Divida o valor inicial por 3.53147e-5",
    "Mililitro-Polegada cúbica": "Multiplique o valor inicial por 0.0610237",
    "Polegada cúbica-Mililitro": "Divida o valor inicial por 0.0610237",
    "Metro cúbico-Pé cúbico": "Multiplique o valor inicial por 35.3147",
    "Pé cúbico-Metro cúbico": "Divida o valor inicial por 35.3147",
    "Metro cúbico-Polegada cúbica": "Multiplique o valor inicial por 61023.7",
    "Polegada cúbica-Metro cúbico": "Divida o valor inicial por 61023.7",
    "Pé cúbico-Polegada cúbica": "Multiplique o valor inicial por 1728",
    "Polegada cúbica-Pé cúbico": "Divida o valor inicial por 1728",

    "Graus Celsius-Graus Fahrenheit":
      "Multiplique o valor inicial por 9/5 e some 32",
    "Graus Fahrenheit-Graus Celsius":
      "subtraia 32 do valor inicial e multiplique por 5/9",
    "Graus Celsius-Kelvin": "adicione 273.15 ao valor inicial",
    "Kelvin-Graus Celsius": "subtraia 273.15 do valor inicial",
    "Graus Fahrenheit-Kelvin":
      "subtraia 32 do valor inicial, multiplique por 5/9 e adicione 273.15",
    "Kelvin-Graus Fahrenheit":
      "subtraia 273.15 do valor inicial, multiplique por 9/5 e some 32",
  };
  const chaveConversao = `${select2.value}-${select3.value}`;
  const paragrafo = document.getElementById("textoformula");
  if (select2.value === select3.value) {
    paragrafo.textContent =
      "Fórmula não é necessária pois as unidades de medida são iguais";
  } else if (select2.value !== select3.value) {
    paragrafo.textContent =
      "Para fazer a conversão: " + `${conversoes[chaveConversao]}`;
  }
}
