const express = require('express');
const app = express();
const port = 3009; // variavel do ambiente

app.get('/', (req, res) => {
    res.send('Olá, mundo! Servidor Express está funcionando.');
})

app.listen(port, () => {

    console.log(`App rodando na porta ${port}`);

})