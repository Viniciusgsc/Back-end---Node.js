module.exports = {
    menu
}
function menu (req, res) {
    res.render('america/pantanalMenu.ejs',
        {title: 'PANTANAL', 
            autor: 'Vinícius Gabriel 2ºDSM - Web II'
        })
    
}
