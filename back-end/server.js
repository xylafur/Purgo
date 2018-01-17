
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


// database
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('connected to database '+config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('database error: '+err);
});

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const users = require('./routes/users');

const port = 3000;

// cors middleware
app.use(cors());

// Body Parser middleware
app.use(bodyParser.json());

// users
app.use('/users', users);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // deliver main page
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
