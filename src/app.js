const { req, res } = require('express')
const express = require('express')

const port = 3000
const app = express()

const start = () => {

    app.get('/', (req, res) => {
        res.send('Bienvenido a la API del Curso de API REST con Express, Sequelize y Postgres')
    })
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    })
}

module.exports = {
    Start: start
}