const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { getAlunosCurso, getAlunosStatus, getAlunosAno, getAlunoMatricula, getAlunoAnoStatus } = require('../modulos/alunos.js')
const { getCursos } = require('../modulos/cursos.js')

const app = express()

app.use((request, response, next) => {

    //Permite especificar quem serão os IPs que podem acessar a API
    response.header('Access-Control-Allow-Origin', '*')

    //Permite especificar quais serão os verbos que a API irá reconhecer
    response.header('Access-Control-Allow-Methods',  'GET, POST, PUT, DELETE, OPTIONS')

    //Estabelece que as permições acima serão representadas pelo cors
    app.use(cors())

    next()
})

app.get('/alunos/:curso', cors(), async function(request, response, next){

    let curso = request.params.curso
    let alunos = getAlunosCurso(curso)
    let alunosJSON = {}

    if (alunos) {
        alunosJSON.alunos = alunos
        response.status(200)
        response.json(alunosJSON)
    } else {
        response.status(404)
        response.json({message: '404'})
    }
})

app.get('/alunos/:status/:curso', cors(), async function(request, response, next){

    let status = request.params.status
    let curso = request.params.curso

    let alunos = getAlunosStatus(status, curso)
    let alunosJSON = {}

    if (alunos) {
        alunosJSON.alunos = alunos
        response.status(200)
        response.json(alunosJSON)
    } else{
        response.status(404)
        response.json({message: '404'})
    }
})

app.get('/aluno/:matricula/:curso', cors(), async function(request, response, next){

    let matricula = request.params.matricula
    let curso = request.params.curso

    let aluno = getAlunoMatricula(matricula, curso)

    if (aluno) {
        response.status(200)
        response.json(aluno)
    } else{
        response.status(404)
        response.json({message: '404'})
    }
})

app.get('/estudantes/:ano/:curso', cors(), async function(request, response, next){

    let year = request.params.ano
    let course = request.params.curso

    let alunos = getAlunosAno(year, course)
    let alunosJSON = {}

    if (alunos) {
        alunosJSON.alunos = alunos
        response.status(200)
        response.json(alunosJSON)
    } else{
        response.status(404)
        response.json({message: '404'})
    }

})

app.get('/estudantes/:ano/:curso/:status', cors(), async function(request, response, next){

    let ano = request.params.ano
    let curso = request.params.curso
    let status = request.params.status

    let alunos = getAlunoAnoStatus(ano, curso, status)
    let alunosJSON = {}

    if (alunos) {
        alunosJSON.alunos = alunos
        response.status(200)
        response.json(alunosJSON)
    } else{
        response.status(404)
        response.json({message: '404'})
    }
})

app.get('/cursos', cors(), async function(request, response, next){

    let cursos = getCursos()
    let cursosJSON = {}

    if (cursos) {
        cursosJSON.cursos = cursos
        response.status(200)
        response.json(cursosJSON)
    } else{
        response.status(404)
        response.json({message: '404'})
    }
})

module.exports = app;