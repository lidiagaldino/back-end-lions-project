var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://e7.pngegg.com/pngimages/992/121/png-clipart-bmp-file-format-bitmap-html-icon-text-rectangle.png",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDS",
        "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga" :   "1200"
    }
];

const getCursos = function() {
    
    let listaCursos = []

    cursos.forEach(item => {
        listaCursos.push({nome: item.nome, sigla: item.sigla, carga: item.carga, icone: item.icone})
    })

    if (listaCursos.length == 0) {
        return false
    } else{
        return listaCursos
    }

}

module.exports = {
    getCursos
}