//jshint esversion: 6

const express = require('express');
const app = express();
app.use(express.static('public'));
app.set("view engine", "pug");
app.set("views", __dirname +"/public/views");

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000');
});