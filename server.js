"user strict"

var express = require('express');
var app = express();
var path = require('path');

// MIDDLEWARE TO DEFINE FOLDER FOR STATIC FILES & IMGS
app.use(express.static('public'))

app.get('*', (req, res) => {
    // resolve & sendFile, public/index.html
    res.sendFile(path.resolve(__dirname, 'public', 'index.html' ))
})


app.listen(3000, () => {
    console.log('server is live on 3000!');
})