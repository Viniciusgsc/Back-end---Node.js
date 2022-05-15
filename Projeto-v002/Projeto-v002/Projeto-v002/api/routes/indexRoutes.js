const controllerIndex = require('../controllers/indexController')

app.get('/', controllerIndex.index)
