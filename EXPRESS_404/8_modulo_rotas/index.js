 const express = require('express')
 const app = express();
 const port = 3000 // variavel de ambiente

 const path = require('path')

 const users = require('./users')


 //Ler o Body

 app.use(
   express.urlencoded({
      extended: true
   }),
 )

 app.use(express.json())

 const basePath = path.join(__dirname, 'templates')

 app.use(function(req,res, next) {
   res.status(404).sendFile(`${basePath}/404.html`)
 })


 app.get('/user/:id', (req, res) => {

   const id = req.params.id

   // leitura da tabela de usuários

   console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}/users.html`)
 })

 app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
 })

 app.listen(port, () => {

    console.log(`App rodando na porta ${port}`)

 })

