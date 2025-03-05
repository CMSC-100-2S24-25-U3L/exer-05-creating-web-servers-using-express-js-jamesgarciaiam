//Name: James Anthony P. Garcia
//Student Number: 2023-03678
//Section: CMSC 100 (U-3L)
//Date: March 5, 2025
//Code Description: Creating your own ExpressJS Server.

import express from 'express';
import * as fs from 'fs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/add-book', (req, res) => {
    if(
        req.query.bookName == "" ||
        req.query.isbn == "" ||
        req.query.author == "" ||
        req.query.yearPublished == ""
    ) {
        res.send('Please provide all the required fields');
        return;
    } else {
        fs.appendFileSync('books.txt', `${req.query.bookName}, ${req.query.isbn}, ${req.query.author}, ${req.query.yearPublished}\n`);
        res.send('Book added');
    }
});

app.listen(3000, () => {console.log('Server is running on port 3000')});