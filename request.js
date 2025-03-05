import needle from 'needle';

needle.post('http://localhost:3000/add-book', 
{
    bookName:'Harry Potter and the Chamber of Secrets',
    isbn:'978-0-7475-3269-9',
    author:'J.K. Rowling',
    yearPublished:1998
}, (err, res) => {
    console.log(res.body);
});

