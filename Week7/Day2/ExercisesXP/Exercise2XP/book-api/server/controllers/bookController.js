const books = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
    res.status(200).json(books);
};

exports.getBookById = (req, res) => {
    const { bookId } = req.params;
    const book = books.find(b => b.id === parseInt(bookId));

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

exports.createBook = (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
};
