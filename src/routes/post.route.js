const { Router } = require("express");
const postsController = require("../controllers/posts.controller");
const router = Router();

router.get("/", (req, res) => {
  let { code, message } = postsController.index();
  res.status(code);
  res.send(message);
  res.end();
});

router.get("/:id", (req, res) => {
  let { code, message } = postsController.get(req.params.id);
  res.status(code);
  res.send(content);
});

router.post("/", (req, res) => {
  let { code, message } = postsController.create(req.body);
  res.status(code);
  res.send(content);
});

router.patch("/:id", (req, res) => {
  let { code, message } = postsController.update(req.params.id, req.body);
  res.status(code);
  res.send(message);
});

router.delete("/:id", (req, res) => {
  let { code, message } = postsController.del(req.params.id);
  res.status(code);
  res.send(message);
});

module.exports = router;
