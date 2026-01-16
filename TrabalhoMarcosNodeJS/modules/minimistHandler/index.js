const minimist = require('minimist');

function getArgs() {
  return minimist(process.argv.slice(2));
}

module.exports = getArgs;

//interpretar argumentos passados pelo terminal.
//Por exemplo, se o usuário digitar node app.js 
// --add "Comprar leite", o minimist vai interpretar 
// que --add é uma opção e "Comprar leite" é o valor 
// associado a essa opção.