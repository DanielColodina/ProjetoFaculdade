function getRawArgs() {
  return process.argv;
}

module.exports = getRawArgs;

//mostrar o uso de process.argv, que é a forma nativa do Node de capturar argumentos.
//Enquanto o minimist já deixa os dados "bonitinhos", o argvHandler me dá a
// versão crua, como o Node entrega.