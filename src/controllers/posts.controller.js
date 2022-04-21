
const postService = require('../services/post.service')

const index = () => {
    try {
        return { code: 200, content: postService.getPosts()}
    } catch (ex) {
        return { code: 404, content: ex }
    }
}

const get = (id) => {
    try {
        return { code: 200, content: postService.findPostById(id) }
    } catch (ex) {
       console.error(ex)
       return { code: 404, content: ex }
    } 
}

const create = (body) => {
    try {
        return { code: 201, content: postService.createPost(body) }
    } catch (error) {
        console.error(ex)
        return { code: 400, content: ex }    
    }
}

const update = (id, body) => {
    try {
        return { code: 200, content: postService.updatePost(id, body)}
    } catch (ex) {
        console.error(ex)
        return { code: 404, content: ex }   
    }
}


const del = (id) => {
    try {
        return { code: 200, content: postService.deletePost(id) }
    } catch (ex) {
        console.error(ex)
        return { code: 404, content: ex }   
    }
}

module.exports = {
    index,
    get,
    create,
    update,
    del
}