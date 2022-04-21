const Post = require("../entities/post.entity");

const getPosts = async () => {
  try {
    await Post.findAll().then((data) => {
      return data
    })
  } catch (ex) {
    console.error(ex);
    throw `Can't found requested resource : ${ex}`;
  }
};

const findPostById = async (id) => {
  try {
    await Post.findByPk(parseInt(id)).then((data) => {
      return data
    })
  } catch (ex) {
    console.error(ex);
    throw `Can't found requested resource : ${ex}`;
  }
};

const createPost = async (body) => {
  try {
    const post = { title: body.title, body: body.body}
    await Post.create(post).then((data) => {
      return data
    })
  } catch (ex) {
    console.log(ex);
    throw `Can't create resource : ${ex}`;
  }
};

const updatePost = async (id, body) => {
  try {
    await Post.update(body, { where: { id: parseInt(id) } }).then((num) => {
      if (num > 1) return "Post updated succesfully";
    })
  } catch (ex) {
    console.log(ex);
    throw `Can't update resource : ${ex}`;
  }
};

const deletePost = async (id) => {
  try {
    await Post.destroy( { where: { id: parseInt(id) } }).then((num) => {
      if (num => 1 ) return "Post deleted succesfully";
    }).catch((err) => {
      throw err;
    })
  } catch (ex) {
    console.log(ex);
    throw `Can't delete resource : ${ex}`;
  }
};

module.exports = {
  getPosts,
  findPostById,
  createPost,
  updatePost,
  deletePost,
};
