const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    content: {type: String, required: true},
    likes: {type: Number, required: true,  default: 0},
})

const Post = mongoose.model("Post", postSchema);

//Create a post 
async function createPost(content){
    const post = await Post.findOne({ "content": content});
    const newPost = await Post.create({
        content: content,
    });
    return newPost
}

//Like a post
async function likePost(postId) {
    const post = await Post.findById(postId);
    if (!post) {
        throw new Error("Post not found");
    }
    post.likes += 1;
    await Post.findByIdAndUpdate(postId, { likes: post.likes + 1 });
    return post;
}

//Update a post 
async function updatePost(postId, newContent) {
    const updatedPost = await Post.findByIdAndUpdate(postId, { content: newContent });
    if (!updatedPost) {
        throw new Error("Post not found");
    }
    return updatedPost;
}

//Delete a post 
async function deletePost(postId) {
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
        throw new Error("Post not found");
    }
    return deletedPost;
}

module.exports = {
    createPost, likePost, updatePost, deletePost
};


