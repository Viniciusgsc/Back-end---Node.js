/*
 * Objeto básico 
 */

const express = require('express')
const consign = require('consign')
const path = require('path')
//const body = require('body-parser')

// Intanciamento
app = express()

app.use(express.json());

app.set('url', 'http://localhost:')
app.set('porta', 3000)

// Diretório estático
app.set('views', path.join(__dirname,'../api/views'))
app.set('view engine', 'ejs')


// DIretório estático - public
app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('public'))
app.use(express.static('estilos'))
app.use(express.static('imagens'))

consign({cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

module.exports = app

