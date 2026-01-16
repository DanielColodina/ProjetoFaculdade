const EventEmitter = require("events");
//Criando emissor do evento 
const emitter = new EventEmitter();

emitter.on("mensagem", (msg) => {
    //Escutando todo o evento mensagem 
    console.log("Evento disparado ",msg);
});
//Disparando o evento
emitter.emit("mensagem", "Óla, mundo de eventos!");