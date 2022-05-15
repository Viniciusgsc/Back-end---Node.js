const controllerSaude = require('../controllers/saudeController.js')

app.get('/noticias/saudeMenu', controllerSaude.menu)