module.exports = {
    menu
}

function menu(req, res){
   return res.render('noticias/frm_saudeMenu.ejs',
   {
        title: 'Saude',
        autor: 'Vinícius Gabriel - 2° DSM - WEB II'
    })
}

