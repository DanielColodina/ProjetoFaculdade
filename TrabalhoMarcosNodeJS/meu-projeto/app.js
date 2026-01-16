
// Arquivo principal do projeto
// Aqui é onde tudo começa
//Importação dos módulos criados
//Cada módulo tem uma responsabilidade específica,
// o que ajuda a manter o código organizado e fácil de entender.
const { carregarTarefas, salvarTarefas } = require('../modules/fsHandler');
const eventos = require('../modules/eventHandler');
const chalk = require('../modules/chalkHandler');
const inquirer = require('../modules/inquirerHandler');
const getArgs = require('../modules/minimistHandler');
const getRawArgs = require('../modules/argvHandler');

//Eventos listados, dentro dos modulos ou seja em
// outros arquivosNDevice service Online!")
eventos.on('adicionar', (tarefa) => {
  const tarefas = carregarTarefas();
  tarefas.push({ tarefa, concluida: false });
  salvarTarefas(tarefas);
  console.log(chalk.green(' Tarefa adicionada com sucesso!'));
});

eventos.on('listar', () => {
  const tarefas = carregarTarefas();
  console.log(chalk.blue('\n📋 Lista de Tarefas:'));
  tarefas.forEach((t, i) => {
    console.log(`${i + 1}. ${t.concluida ? chalk.green('[✔]') : chalk.red('[ ]')} ${t.tarefa}`);
  });
});

eventos.on('concluir', (index) => {
  const tarefas = carregarTarefas();
  if (tarefas[index]) {
    tarefas[index].concluida = true;
    salvarTarefas(tarefas);
    console.log(chalk.yellow(' Tarefa concluída!'));
  } else {
    console.log(chalk.red('Tarefa não encontrada.'));
  }
});

//Inquirer Menu
async function menu() {
  const resposta = await inquirer.prompt([
    { type: 'list', name: 'acao', message: 'O que deseja fazer?', choices: ['Adicionar Tarefa', 'Listar Tarefas', 'Concluir Tarefa', 'Sair'] }
  ]);
//Dependendo da resposta do usuário, o código emite diferentes eventos

  if (resposta.acao === 'Adicionar Tarefa') {
    const { tarefa } = await inquirer.prompt([{ type: 'input', name: 'tarefa', message: 'Digite a tarefa:' }]);
    eventos.emit('adicionar', tarefa);

  } else if (resposta.acao === 'Listar Tarefas') {
    eventos.emit('listar');


  } else if (resposta.acao === 'Concluir Tarefa') {
    const { index } = await inquirer.prompt([{ type: 'number', name: 'index', message: 'Número da tarefa:' }]);
    eventos.emit('concluir', index - 1);

  } else {
    console.log(chalk.cyan(' Até logo!'));
    process.exit();
  }

  menu();
}



//Aqui é onde fica o código que decide se vai rodar o menu interativo
//  ou processar argumentos passados via terminal.
const args = getArgs();
const rawArgs = getRawArgs();

if (args._.length > 0) {
  if (args._[0] === 'add') {
    eventos.emit('adicionar', args._[1]);
  } else if (args._[0] === 'list') {
    eventos.emit('listar');
  } else if (args._[0] === 'done') {
    eventos.emit('concluir', args._[1] - 1);
  }
} else {
  menu();
}


//cada responsabilidade separada.
//Se um dia eu quiser trocar, por exemplo,
// o chalk por outra biblioteca de cores,
//  eu só mexo dentro da pasta
//dele e não afeta o resto do código