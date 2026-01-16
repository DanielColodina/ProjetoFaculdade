const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

//colocar dentro de um array
prompt([
    {
        type: 'input', //Tipo de pergunta  sendo a entrada
        name: 'nome', //nome variavel, onde sera armazenada os dados do input
        message: 'Qual é o seu nome?' //Pergunta ao terminal
    },
    {
        type: 'list',
        name: 'linguagem',
        message: 'Qual linguagem você prefere?',
        choices: ['javaScript', 'Python', 'Java']
    }
]).then((respostas) => {
    //Aqui recebemos as respotas do Usuario
    console.log(`Olá, ${respostas.nome}! Você prefere ${respostas.linguagem}.`);
});