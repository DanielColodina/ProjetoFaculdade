const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../tarefas.json');

function carregarTarefas() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(filePath));
}

function salvarTarefas(tarefas) {
  fs.writeFileSync(filePath, JSON.stringify(tarefas, null, 2));
}

module.exports = { carregarTarefas, salvarTarefas };

//(Carregar tarefas)verifica se já existe o arquivo tarefas.json. Se não existir, ele cria um vazio. Depois, ele lê e retorna as tarefas.
//recebe uma lista de tarefas e sobrescreve o arquivo tarefas.json com os dados atualizados.