const posts = require('../entities/post.entity')

const getPosts = () => {
   try {
    return { code: 200, content: posts }
   } catch (ex) {
       console.error(ex)
       return { code: 404, content: `Can't found requested resource : ${ex}` }
   } 
}

const findPostById = (id) => {
    try {
        let post = posts.find(post => post.id === parseInt(id))
        return { code: 200, content: post }
    } catch (ex) {
       console.error(ex)
       return { code: 404, content: `Can't found requested resource : ${ex}` }
    } 
}

const createPost = (body) => {
    try {
        let post = { id, title, body } = body
        post.id = Math.floor(Math.random() * 1000 / 7 );
        if(posts.push(post)) {
            return { code: 201, content: posts.filter(result => result.id === post.id) }
        }
        throw "Can't create resource"
    } catch (error) {
        console.error(ex)
        return { code: 400, content: `Can't create resource : ${ex}` }    
    }
}

const updatePost = (id, body) => {
    try {
        let post = posts.find(post => post.id === parseInt(id))

        const index = posts.indexOf(post)
    
        post = { title, body } = body
        post.id = id
    
        if(index > -1 ) {
            posts.splice(index, 1)

            posts[index] = post

            return { code: 200, content: 'Post updated succesfully' }
        }
    
        throw "Can't update the requested resource"

    } catch (ex) {
        console.error(ex)
        return { code: 404, content: ex }   
    }
}


const deletePost = (id) => {
    try {
        let post = posts.find(post => post.id === parseInt(id))

        const index = posts.indexOf(post)
        
        if(index > -1) {
            posts.splice(index, 1)
            return { code: 200, content: 'Post deleted succesfully' }
        }
        
        throw `Can't delete a resource that doesn't exists`

    } catch (ex) {
        console.error(ex)
        return { code: 404, content: ex }   
    }
}

module.exports = {
    getPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}