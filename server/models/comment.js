const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    author: {type: String, required: true},
    content: {type: String, required: true},
    likes: {type: Number, required: true,  default: 0},
})

const Comment = mongoose.model("Comment", commentSchema);

//create a comment

async function createComment(author, content) {
    const comment = await Comment.findOne({ "author": author}, { "content": content});
    const newComment = await Comment.create({ author: author, content: content });
    return newComment;
}

//like a comment

async function likeComment(commentID) {
    const comment = await Comment.findOne({"_id": commentID},);
    if (!comment) throw new Error("Comment not found");
    
    comment.likes += 1;
    await Comment.updateOne({"_id": commentID}, {$set: {likes: post.likes}});
    return comment;
}

//update a comment

async function updateComment(commentID, newContent) {
    const comment = await Comment.updateOne({"_id": commentID}, {$set: { content: newContent }});
    return comment;
}

//delete a comment
async function deleteComment(commentID) {
    await Comment.deleteOne({"_id": commentID});
}


module.exports = {
    createComment, likeComment, updateComment, deleteComment
};