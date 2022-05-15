module.exports = {
    menu
}

function menu(req, res){
   return res.render('noticias/frm_noticiasMenu.ejs',
   {
        title: 'Noticias',
        autor: 'Vinícius Gabriel - 2° DSM - WEB II'
    })
}




