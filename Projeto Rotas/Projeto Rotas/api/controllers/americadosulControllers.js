module.exports = {
    menu
}

function menu (req, res) {
    res.render('america/americadosulMenu.ejs',
        {title: 'AMÉRICA DO SUL', 
            autor: 'Vinícius Gabriel 2ºDSM - Web II'
        })
    
}
