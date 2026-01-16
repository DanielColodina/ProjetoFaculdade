const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()

// Setar a pasta de views (sua pasta é `view`, não `views`)
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'handlebars')

// Configurar express-handlebars explicitamente apontando o diretório de layouts
app.engine(
    'handlebars',
    exphbs.engine({
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'view', 'layouts')
    })
)

app.get('/', (req, res) => {
        // Passa um exemplo de objeto user para evitar valores undefined na view
        res.render('home', { user: { name: 'Marcos' } })
})

app.listen(3000, () => {
        console.log('App funcionando! Acesse http://localhost:3000')
})