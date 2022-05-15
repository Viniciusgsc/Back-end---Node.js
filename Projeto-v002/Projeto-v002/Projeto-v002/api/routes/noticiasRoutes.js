const controllerNoticias= require('../controllers/noticiasController.js')

app.get('/noticias/noticiasMenu', controllerNoticias.menu)
