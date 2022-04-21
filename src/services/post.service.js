const posts = require("../entities/post.entity");

const getPosts = () => {
  try {
    return posts;
  } catch (ex) {
    console.error(ex);
    throw `Can't found requested resource : ${ex}`;
  }
};

const findPostById = (id) => {
  try {
    let post = null;
    if ((post = posts.find((post) => post.id === parseInt(id)))) {
      return post;
    }
    throw "Can't find resource";
  } catch (ex) {
    console.error(ex);
    throw `Can't found requested resource : ${ex}`;
  }
};

const createPost = (body) => {
  try {
    let post = ({ id, title, body } = body);

    post.id = Math.floor((Math.random() * 1000) / 7);

    if (posts.push(post)) {
      return posts.filter((result) => result.id === post.id);
    }
    throw "Failed on creating this resource";
  } catch (ex) {
    console.log(ex);
    throw `Can't create resource : ${ex}`;
  }
};

const updatePost = (id, body) => {
  try {
    let post = posts.find((post) => post.id === parseInt(id));

    const index = posts.indexOf(post);

    post = { title, body } = body;
    post.id = id;

    if (index > -1) {
      posts.splice(index, 1);

      posts[index] = post;

      return "Post updated succesfully";
    }

    throw "Can't find resource to update";
  } catch (ex) {
    console.log(ex);
    throw `Can't update resource : ${ex}`;
  }
};

const deletePost = (id) => {
  try {
    let post = posts.find((post) => post.id === parseInt(id));

    const index = posts.indexOf(post);

    if (index > -1) {
      posts.splice(index, 1);
      return "Post deleted succesfully";
    }

    throw `Can't delete a resource that doesn't exists`;
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
