const express = require("express");
const Post = require('../models/post'); //accesses functions in user model file
const router = express.Router();

router
  .post('/create', async (req, res) => {
    try {
      const post = await createPost(req.body.content);
      res.send(post);
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
  .put('/like', async (req, res) => {
    try {
      const post = await likePost(req.body.id);
      res.send(post);
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
  .put('/update', async (req, res) => {
    try {
      const post = await updatePost(req.body.id, req.body.content);
      res.send(post);
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
  .delete('/delete', async (req, res) => {
    try {
      const deletedPost = await deletePost(req.body.id);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = router;