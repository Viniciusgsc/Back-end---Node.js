const models = require('../models/models.js')
const fetch = require('node-fetch')

module.exports = {
    rotaRaiz,
    cursoGetById,
    cepGetById,
    livroGetById,
    issGetById

}

function rotaRaiz(req, res) {
    console.log('Rota Raiz Encontrada!')
    res.json({ Ola: 'Rota Raiz Encontrada!' })
}

function cursoGetById(req, res) {
    const curso = req.params.cursoid
    console.log("Parametro esperado: " + curso)
    res.json({ Message: 'Rota Consultar Cursos Encontrada!' })

    let leitura
    console.time(leitura)

    models.getByIdCurso(curso)

    console.timeEnd(leitura)
    console.log("== Curso =============================")

}

function cepGetById(req, res) {
    const cep = req.params.cepid;
    console.log("Parametro esperado: " + cep);

    const url = `http://viacep.com.br/ws/` + cep + `/json/`;
    console.log("Endereço: " + url)

    fetch.get(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({ message: dados })
        })
        .then(response => console.log(dados))
        .catch(function (error) {
            console.log("Erro na requisição!");
        })
        .finally(function () {
            console.log("Final consulta de CEP")
        });
}


function livroGetById(req, res) {
    const livro = req.params.livroid;
    console.log("Parametro esperado: " + livro);
    res.json({ menssage: ' rota livros encontrada!' })

    var leitura
    console.time(leitura)

    models.getByIdLivro(livro);

    console.timeEnd(leitura)
    console.log("== livro =================================")
}

// function cpflGetById(req, res) {
//     const cpfl = req.params.cpflid;
//     console.log("Parametro esperado: " + cpfl);

//     const url = `https://servicosonline.cpfl.com.br/agencia-webapp/#/home` + cpfl + `/json/`;
//     console.log("Consulta de Energia: " + url)

//     fetch(url)
//         .then((response) => response.json())
//         .then(data => {
//             dados = data;
//             res.json({ message: dados })
//         })
//         .then(response => console.log(dados))
//         .catch(function (error) {
//             console.log("Erro na requisição!");
//         })
//         .finally(function () {
//             console.log("Final de consulta de Energia")
//         });
// }

function issGetById(req, res) {
    const iss = req.params.issid
    console.log('Parametro esperado: ' + iss)
const url = `http://api.open-notify.org/iss-now.json`
    console.log('Endereço: ' + url)
   
    fetch(url)
        .then((response) => response.json())

        .then(data => {
            dados = data;
            res.json({ message: dados })
        })
        .then(response => console.log(dados))

        .catch(function (error) {
            console.log('Erro na requisição!')
        })

        .finally(function () {
            console.log('Sempre apresenta esta mensagem')
        })
}



