
const postService = require('../services/post.service')

const index = () => {
    try {
        return { code: 200, message: postService.getPosts()}
    } catch (ex) {
        return { code: 404, message: ex }
    }
}

const get = (id) => {
    try {
        return { code: 200, message: postService.findPostById(id) }
    } catch (ex) {
       console.error(ex)
       return { code: 404, message: ex }
    } 
}

const create = (body) => {
    try {
        return { code: 201, message: postService.createPost(body) }
    } catch (error) {
        console.error(ex)
        return { code: 400, content: ex }    
    }
}

const update = (id, body) => {
    try {
        return { code: 200, message: postService.updatePost(id, body)}
    } catch (ex) {
        console.error(ex)
        return { code: 404, message: ex }   
    }
}


const del = (id) => {
    try {
        return { code: 200, content: postService.deletePost(id) }
    } catch (ex) {
        console.error(ex)
        return { code: 404, message: ex }   
    }
}

module.exports = {
    index,
    get,
    create,
    update,
    del
}