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

app.get('/team', (req, res)=>{
res.render('team');
});










app.listen(3000, () => {
    console.log('Example app listening on port 3000');
});