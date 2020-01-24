const express = require('express');
const mongoose = require('mongoose');
const app = express();
const users = require('./route/api/user');
const profile = require('./route/api/profile');
const posts = require('./route/api/posts');
const database = require('./config/keys').mongoURI;


// Connect to mongodb
mongoose.connect(database)
    .then(() => console.log('mongo db connected'))
    .catch(err => console.log(err));
app.get('/', (req, res) => res.send('Hello world'));
//use router 
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})