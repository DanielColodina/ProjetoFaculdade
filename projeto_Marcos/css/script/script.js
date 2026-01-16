document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("imc-form");
  const alturaInput = document.getElementById("height");
  const pesoInput = document.getElementById("weight");
  const limparBtn = document.getElementById("clear-btn");
  const resultContainer = document.getElementById("result-container");
  const imcNumber = document.querySelector("#imc-number span");
  const imcInfo = document.querySelector("#imc-info span");
  const voltarBtn = document.getElementById("back-btn");
  const mainContainer = document.querySelector(".container");

  const classificacoes = [
    { min: 0, max: 18.4, info: "Abaixo do peso" },
    { min: 18.5, max: 24.9, info: "Peso normal" },
    { min: 25, max: 29.9, info: "Sobrepeso" },
    { min: 30, max: 34.9, info: "Obesidade grau 1" },
    { min: 35, max: 39.9, info: "Obesidade grau 2" },
    { min: 40, max: Infinity, info: "Obesidade grau 3" },
  ];

  function limparCampos() {
    alturaInput.value = "";
    pesoInput.value = "";
  }

  function validarNumero(valor) {
    return !isNaN(valor) && valor > 0;
  }

  function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }

  function obterClassificacao(imc) {
    return classificacoes.find((item) => imc >= item.min && imc <= item.max)?.info || "Desconhecido";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const altura = parseFloat(alturaInput.value.replace(",", "."));
    const peso = parseFloat(pesoInput.value.replace(",", "."));

    if (!validarNumero(altura) || !validarNumero(peso)) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }

    const imc = calcularIMC(peso, altura);
    const classificacao = obterClassificacao(imc);

    imcNumber.textContent = imc.toFixed(2);
    imcInfo.textContent = classificacao;

    mainContainer.style.display = "none";
    resultContainer.classList.remove("hide");
  });

  limparBtn.addEventListener("click", (e) => {
    e.preventDefault();
    limparCampos();
  });

  voltarBtn.addEventListener("click", () => {
    limparCampos();
    resultContainer.classList.add("hide");
    mainContainer.style.display = "block";
  });
});
