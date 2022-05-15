module.exports = {
    index
}

function index (req, res) {
    res.render('index.ejs',
        {title: 'Projeto Rotas - América', 
            mensagem: 'Projeto Rotas - Menu Principal Opções Das Américas',
            conteudo: 'Corpo da Página - vh x vw',
            autor: 'Vinícius Gabriel 2ºDSM - Web II'
        })
}

