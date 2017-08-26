var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


// APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop', {useMongoClient: true});

var Books = require('./models/books.js');

// ----->>> POST BOOKS <<<-------
app.post('/books', (req, res) => {
    var book = req.body;

    Books.create(book, function (err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    })
});

// ------>>> GET BOOKS <<<------------
app.get('/books', function (req, res) {
    Books.find((err, books) => {
        if (err) {
            throw err
        }

        res.json(books)
    })
})

// ------>>> DELETE BOOKS <<<----------
app.delete('/books/:_id', (req, res) => {
    var query = {
        _id: req.params._id
    };

    Books.remove(query, (err, books) => {
        if (err) {
            throw err;
        }

        res.json(books)
    })
});

// ------>>> UPDATE BOOKS <<<----------
app.put('/books/:_id', function (req, res) {
    var book = req.body;
    var query = {
        _id: req.params._id
    };

    //if the field doesn't exist $set will set a new field
    var update = {
        '$set': {
            title: book.title,
            description: book.description,
            price: book.price
        }
    };

    //When true returns the updated document
    var options = {
        new: true
    };

    Books.findOneAndUpdate(query, update, options, function (err, books) {
        if (err) {
            throw err;
            console.log('HELLO WORLD');
        }
        res.json(books);
    })
})

// END APIs


app.listen(3001, (err) => {
    console.log("API server is listening on http://localhost:3001");
})