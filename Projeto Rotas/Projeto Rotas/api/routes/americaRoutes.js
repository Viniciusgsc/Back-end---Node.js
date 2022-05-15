//ROTA DA AMÉRICA
const controllerAmerica = require('../controllers/americaControllers.js')

app.get('/america/americaMenu', controllerAmerica.menu)

//ROTA DA AMÉRICA DO SUL
const controllerAmericadosul = require('../controllers/americadosulControllers.js')

app.get('/america/americadosulMenu', controllerAmericadosul.menu)

//ROTA DO PANTANAL
const controllerPantanal = require('../controllers/pantanalControllers.js')

app.get('/america/pantanalMenu', controllerPantanal.menu)