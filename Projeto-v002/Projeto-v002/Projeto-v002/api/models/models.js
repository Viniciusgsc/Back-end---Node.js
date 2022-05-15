module.exports = {
    getByIdCurso,
    getByIdLivro

}

const cursosInfo = [
    {'curso':'Css', 'info':'Curso de CSS'},
    {'curso':'Java', 'info':'Curso de Programação Java'},
    {'curso':'NodeJs', 'info':'Curso de NodeJS'},
    {'curso':'React', 'info':'Curso de React'}
]

function getByIdCurso(pcurso) {
    const cursoI = cursosInfo.find(i => i.curso == pcurso)
    if(!cursoI){
        console.error("Curso não encontrado!")
    } else {
        console.log({cursoI})
    }
}

function getByIdLivro(plivro) {
    const livroI = livroInfo.find(i => i.id == plivro)
    if(!livroI){
        console.error("livro não encontrado!")
    } else {
        console.log({livroI})
    }
}

//  function getByIdcpfl(pcpfl) {
//      const cpflI = cpflInfo.find(i => i.id == pcpfl)
//      if(!cpflI){
//          console.error("Consulta de Energia não encontrada!")
//      } else {
//          console.log({cpflI})
//      }
//  }