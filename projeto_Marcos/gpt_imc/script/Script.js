function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const container = document.getElementById("container");

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        container.innerHTML = `
            <h1>Erro</h1>
            <p>Por favor, preencha valores válidos.</p>
            <button onclick="voltar()">Voltar</button>
        `;
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau I";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
    }

    container.innerHTML = `
        <h1>Resultado</h1>
        <p>Seu IMC é: <strong>${imc.toFixed(2)}</strong></p>
        <p>Classificação: <strong>${classificacao}</strong></p>
        <button onclick="voltar()">Calcular Novamente</button>
    `;
}

function voltar() {
    const container = document.getElementById("container");
    container.innerHTML = `
        <h1>Calculadora de IMC</h1>
        <label for="altura">Altura (m):</label>
        <input type="number" id="altura" step="0.01" placeholder="Ex: 1.75">

        <label for="peso">Peso (kg):</label>
        <input type="number" id="peso" placeholder="Ex: 70">

        <button onclick="calcularIMC()">Calcular</button>
    `;
}
