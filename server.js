//Name: James Anthony P. Garcia
//Student Number: 2023-03678
//Section: CMSC 100 (U-3L)
//Date: March 5, 2025
//Code Description: Creating your own ExpressJS Server.

import express from 'express';
import * as fs from 'fs';

const app = express();

app.use(express.json()); //Middleware to parse incoming requests
app.use(express.urlencoded({extended: false}));

app.get('/add-book', (req, res) => { //GET route to add a book
    if( //Check if the fields are displayed
        req.query.bookName == "" ||
        req.query.isbn == "" ||
        req.query.author == "" ||
        req.query.yearPublished == ""
    ) { //If any field is missing, respond failure of adding book
        console.log({success: false});
        res.send('Please provide all the required fields');
        return;
    } else { //Otherwise, append the book to text file
        fs.appendFileSync('books.txt', `${req.query.bookName}, ${req.query.isbn}, ${req.query.author}, ${req.query.yearPublished}\n`);
        console.log({success: true});
        res.send('Book added');
    }
});

app.listen(3000, () => {console.log('Server is running on port 3000')}); //Run server on port 3000
