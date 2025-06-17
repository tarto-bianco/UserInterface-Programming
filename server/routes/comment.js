const express = require("express");
const Comment = require('../models/comment'); //accesses functions in user model file
const router = express.Router();

router
  .post('/createComment', async (req, res) => {
    try {
      const comment = await Comment.createComment(req.body.content);
      res.send(comment);
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
  .put('/likeComment', async (req, res) => {
    try {
      const comment = await Comment.likeComment(req.body.id);
      res.send(comment);
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
  .put('/updateComment', async (req, res) => {
    try {
      const comment = await Comment.updateComment(req.body.id, req.body.content);
      res.send(comment);
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })
  .delete('/deleteComment', async (req, res) => {
    try {
      await Comment.deleteComment(req.body.id);
      res.send({ success: "Comment deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = router;