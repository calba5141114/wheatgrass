//jshint esversion: 6

const express = require('express');
const app = express();
app.use(express.static('public'));
app.set("view engine", "pug");
app.set("views", __dirname +"/public/views");

// sending off the index.page
app.get('/', (req, res) => {
    res.render('index');
});

// sending off the about page
app.get('/about', (req, res) => {
    res.render('about');
});


// retrieving user data from front end on form click.
app.get('/process_get', (req, res) =>{
    response = {
        first_name : req.query.first_name,
        last_name : req.query.last_name,
        gender: req.query.gender
        };

    console.log(response);
    res.end(JSON.stringify(response));
});










app.listen(3000, () => {
    console.log('Example app listening on port 3000');
});