const mongoose = require("mongoose");

//Create Schema 
const userSchema = new mongoose.Schema({
    email: {type: String, unique:true, required: true},
    username: {type: String, unique:true, required: true},
    password: {type: String, required: true},
    followers: [String],
    following: [String], 
})

//Create Mongoose Model

const User = mongoose.model("User", userSchema);

//Create CRUD Functions 
//CREATE a user 
async function register(email, username, password) {
    const user = await getUser(username);
    if(user) throw Error('Username already in use');

    const newUser = await User.create({
        email: email,
        username: username,
        password: password,
    });

    return newUser
}

//READ a user
async function login(username, password) {
    const user = await getUser(username);
    if(!user) throw Error('user not found');
    if(user.password != password) throw Error('Wrong Password');

    return user; 
}

//DRY Code for returning username
async function getUser(username) {
    return await User.findOne({ "username": username});
}

//UPDATE 
async function updatePassword(id, password) {
    const user = await User.updateOne({"_id": id}, {$set: { password: password}});
    return user;
}

//DELETE
async function deleteUser(id) {
    await User.deleteOne({"_id": id});
}

//Export all functions 
module.exports = {
    register, login, updatePassword, deleteUser
};

