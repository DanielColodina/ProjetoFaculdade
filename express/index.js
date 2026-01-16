const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

const path = require('path');
const fs = require('fs');

const checkAuth = function (req, res, next) {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Esta logado, pode continuar')
    } else {
        console.log('Não está logado, faca login para concluir')
    }
}

// procura primeiro por templates dentro da pasta do projeto express
let basePath = path.join(__dirname, 'templates');
const fallbackPath = path.join(__dirname, '..', '3_render_HTML', 'templates');
if (!fs.existsSync(path.join(basePath, 'index.html')) && fs.existsSync(path.join(fallbackPath, 'index.html'))) {
    basePath = fallbackPath;
}

app.get('/', (req, res) => {
    const indexFile = path.join(basePath, 'index.html');
    res.sendFile(indexFile, (err) => {
        if (err) {
            res.type('text').send('Olá, Mundo!');
        }
    });
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});