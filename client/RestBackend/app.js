const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');



const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080; 

const routes = require('./routes/api');




mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://amcadmin:jgxP1d9B0PkcCjv1@cluster0.g6l0k.mongodb.net/amcDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));






// HTTP request logger
app.use(morgan('tiny'));
app.get('/teams', routes);
app.get('/projects', routes);
app.get('/alumni', routes);
app.get('/events', routes);
app.get('/resources', routes);
app.get('/achievements', routes);







app.listen(PORT, console.log(`Server is starting at ${PORT}`));
