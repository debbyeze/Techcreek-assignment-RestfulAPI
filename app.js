const { Route } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());


require('dotenv').config();

// import Route
const postsRoute = require('./routes/posts');

// middleware
app.use('/posts', postsRoute);

// Route
// app.get('/', (req,res) => {
//     res.send('welcome');
// });








// connect to database
mongoose.connect(process.env.MONGODB_URL,() =>console.log('connected to database')
 );


// SERVER
const port = 8000;
app.listen(port, () => {
    console.log(`app is listening on ${port}`)
})
