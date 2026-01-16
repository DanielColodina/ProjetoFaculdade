const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/0', (req, res) => {
    res.render('home')
})

app.listen(300, () => {
    console.log('App funcionando!')
})