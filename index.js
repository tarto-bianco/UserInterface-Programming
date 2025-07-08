require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const path = require('path');


mongoose.connect(process.env.dbUrl)
    .then(console.log("DB Connected"))
    .catch(error => console.log(error));

app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')));

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
}));

const userRoutes = require('./server/routes/user');
const postRoutes = require('./server/routes/post');
const commentRoutes = require('./server/routes/comment');

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
