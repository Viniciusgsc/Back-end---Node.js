module.exports = {
    index
}

function index(req, res){
   return res.render('index.ejs',
   {
        title: 'Rotas',
        mensagem: 'Iniciando com NodeJS e Express',
        conteudo: 'Corpo da Página vh x vw',
        autor: 'Vinícius Gabriel - 2° DSM - WEB II'
    })
}




