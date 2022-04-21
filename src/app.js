const { req, res } = require('express')

const express = require('express')
const bodyParser = require('body-parser')
const postsController = require('./controllers/posts.controller')
const port = 3000
const app = express()


const start = () => {

    app.use(bodyParser.json())

    app.get('/', (req, res) => {
        res.status(200)
        res.send('Bienvenido a la API del Curso de API REST con Express, Sequelize y Postgres')
        res.end()
    })

    app.get('/posts', (req, res) => {
        let { code, content } = postsController.getPosts()
        res.status(code)
        res.send(content)
        res.end()
    })

    app.get('/posts/:id', (req, res) => {
        let { code, content } = postsController.findPostById(req.params.id)
        res.status(code)
        res.send(content)
    })

    app.post('/posts', (req, res) => {
        let { code, content } = postsController.createPost(req.body)
        res.status(code)
        res.send(content)
    })

    app.patch('/posts/:id', (req, res) => {
        let { code, content } = postsController.updatePost(req.params.id, req.body)
        res.status(code)
        res.send(content)
    })

    app.delete('/posts/:id', (req, res) => {
        let { code, content } = postsController.deletePost(req.params.id)
        res.status(code)
        res.send(content)
    })
    
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    })
}

module.exports = {
    Start: start
}