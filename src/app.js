const { req, res } = require('express')

const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()

let posts = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        body: "Voluptates quisquam tempora placeat quia ullam recusandae commodi possimus ad nulla sit animi quod deleniti, quam reprehenderit nesciunt, accusantium modi quis! Ab, corrupti velit est eaque incidunt tempora assumenda inventore facere dignissimos?"
    },
    {
        id: 2,
        title: "Voluptates quisquam tempora placeat quia ullam recusandae",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit commodi possimus ad nulla sit animi quod deleniti, quam reprehenderit nesciunt, accusantium modi quis! Ab, corrupti velit est eaque incidunt tempora assumenda inventore facere dignissimos?"
    },
]


const start = () => {

    app.use(bodyParser.json())

    app.get('/', (req, res) => {
        res.status(200)
        res.send('Bienvenido a la API del Curso de API REST con Express, Sequelize y Postgres')
        res.end()
    })

    app.get('/posts', (req, res) => {
        res.status(200)
        res.send(posts)
        res.end()
    })

    app.get('/posts/:id', (req, res) => {
        let id = parseInt(req.params.id)

        let post = posts.find(post => post.id === id)

        res.status(200)
        res.send(post)
    })

    app.post('/posts', (req, res) => {

        let post = { id, title, body } = req.body

        post.id = Math.floor(Math.random() * 1000 / 7 );

        posts.push(post)

        res.status(201)
        res.send(posts.filter(result => result.id === post.id))
    })

    app.patch('/posts/:id', (req, res) => {
        let id = parseInt(req.params.id)

        let post = posts.find(post => post.id === id)

        const index = posts.indexOf(post)

        post = { title, body } = req.body
        post.id = id

        if(index > -1 ) {
            posts.splice(index, 1)
        }

        posts[index] = post

        res.status(200)
        res.send('Post updated succesfully')
    })

    app.delete('/posts/:id', (req, res) => {
        let id = parseInt(req.params.id)

        let post = posts.find(post => post.id === id)

        const index = posts.indexOf(post)
        
        if(index > -1) {
            posts.splice(index, 1)

        }
        res.status(200)
        res.send('Post deleted succesfully')
    })
    
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    })
}

module.exports = {
    Start: start
}