const express = require("express");
const Post = require('../models/post'); //accesses functions in user model file
const router = express.Router();

router
  .post('/createPost', async (req, res) => {
    try {
      const post = await Post.createPost(req.body.content);
      res.send(post);
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
  .put('/likePost', async (req, res) => {
    try {
      const post = await Post.likePost(req.body.id);
      res.send(post);
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
  .put('/updatePost', async (req, res) => {
    try {
      const post = await Post.updatePost(req.body.id, req.body.content);
      res.send(post);
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
  .delete('/deletePost', async (req, res) => {
    try {
      await Post.deletePost(req.body.id);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = router;