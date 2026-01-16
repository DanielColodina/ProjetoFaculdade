const minimist = require('minimist');

//Pegando argumentos da linha de comando 
const args = minimist(process.argv.slice(2));


//Mostrando os argumetos
console.log("Argumentos Recebidos: ",args);

//Exemplo: node index.js --node=Daniel --idade=20
console.log(`Olá, ${args.nome}! Você tem ${args.idade} anos.`);