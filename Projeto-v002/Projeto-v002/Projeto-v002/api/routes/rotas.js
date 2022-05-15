const controller = require('../controllers/controllers.js')

app.get('/', controller.rotaRaiz);

app.get('/cursos/:cursoid', controller.cursoGetById);

app.get('/cep/:cepid', controller.cepGetById);

app.get('/livro/:livrosid', controller.livroGetById);

// app.get('/cpfl/:cpflid', controller.cpflGetById);

app.get('/iss/:issid', controller.issGetById);