const express = require('express');
const app = express();
const port = 3009; // variavel do ambiente

const path = require('path');
const basePath = path.join(__dirname, 'templates');

app.get('/users/:id', (req, res) => {

    const id = req.params.id;

     console.log(`Estamos buscando pelo usuário ${id}`);

     res.sendFile(`${basePath}/users.html`);
})

app.get('/', (req, res) => {
    
    res.sendFile(`${basePath}/users.html`);
})

app.listen(port, () => {

    console.log(`App rodando na porta ${port}`);

})