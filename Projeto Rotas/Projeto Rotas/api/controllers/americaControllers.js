module.exports = {
    menu
}

function menu (req, res) {
    res.render('america/americaMenu.ejs',
        {title: 'AMÉRICA', 
            autor: 'Vinícius Gabriel 2ºDSM - Web II'
        })
  
}




