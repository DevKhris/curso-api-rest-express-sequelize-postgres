const { req, res } = require('express')

const express = require('express')
const bodyParser = require('body-parser')
const postRoutes = require('./routes/post.route')
const port = 3000
const app = express()


const start = () => {

    app.use(bodyParser.json())

    app.use('/posts', postRoutes)

    app.get('/', (req, res) => {
        res.status(200)
        res.send('Bienvenido a la API del Curso de API REST con Express, Sequelize y Postgres')
        res.end()
    })

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    })
}

module.exports = {
    Start: start
}