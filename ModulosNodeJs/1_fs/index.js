//modelo Asysnc não trava, continua executando enquanto le e escreve arquvivo
const fs = require ('fs');

fs.writeFile('async.txt', 'Olá, este é o assíncrono!', (err) => {
    if (err) throw err;

        console.log('Conteudo assincrono');
});


//modelo fs com Sincrono para travar a aplicação ate terminar 
//aqui o Node espera terminar antes de continuar                                        
fs.writeFileSync('sync.txt', 'Olá, este é o síncrono!');

//Confirma a criação            
console.log('Arquivo síncrono criado com sucesso! ');