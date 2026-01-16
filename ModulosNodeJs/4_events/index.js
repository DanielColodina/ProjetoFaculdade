const EventEmitter = require('events')

//Criar um emissor de eventos 
const meuEmissor = new EventEmitter();

//Criando um 'ouvinte' para o evento chamado "Mensagem"
meuEmissor.on('mensagem', (texto) => {
    console.log(`Evento recebido:${texto}`);
})

//Emitindo o evento da "mensagem"
meuEmissor.emit('mensagem', 'Olá! Esse é um evento Funcionando!');