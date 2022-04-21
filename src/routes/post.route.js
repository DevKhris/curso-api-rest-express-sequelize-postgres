const { Router } = require('express')
const postsController = require ('../controllers/posts.controller')
const router = Router()

router.get('/', (req, res) => {
    let { code, content } = postsController.getPosts()
    res.status(code)
    res.send(content)
    res.end()
})

router.get('/:id', (req, res) => {
    let { code, content } = postsController.findPostById(req.params.id)
    res.status(code)
    res.send(content)
})

router.post('/', (req, res) => {
    let { code, content } = postsController.createPost(req.body)
    res.status(code)
    res.send(content)
})

router.patch('/:id', (req, res) => {
    let { code, content } = postsController.updatePost(req.params.id, req.body)
    res.status(code)
    res.send(content)
})

router.delete('/:id', (req, res) => {
    let { code, content } = postsController.deletePost(req.params.id)
    res.status(code)
    res.send(content)
})

module.exports = router