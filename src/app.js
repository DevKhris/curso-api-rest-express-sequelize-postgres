const { req, res } = require('express')

const express = require('express')
const bodyParser = require('body-parser')
const postRoutes = require('./routes/post.route')
const app = express()

const conf = require('./modules/configuration.module')
const db = require('./modules/database.module')

const startServer = () => {

    conf.getEnviroment()
    app.use(bodyParser.json())

    app.use('/posts', postRoutes)

    app.get('/', (req, res) => {
        res.status(200)
        res.send('Bienvenido a la API del Curso de API REST con Express, Sequelize y Postgres')
        res.end()
    })

    app.listen(process.env.PORT || 3000, () => {
        db.connectDatabase()
        console.log(`Server listening at http://localhost:${process.env.PORT}`);
    })
}

module.exports = {
    startServer
}