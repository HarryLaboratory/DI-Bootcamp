const express = require('express');
const app = express();

let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 }
];

app.use(express.json()); // Middleware 

// GET /api/books
app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

// GET /api/books
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// POST /api/books 
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Missing required fields: title, author, publishedYear' });
  }

  
  const newId = books.length ? books[books.length - 1].id + 1 : 1;

  
  const newBook = {
    id: newId,
    title,
    author,
    publishedYear
  };

  
  books.push(newBook);

  
  res.status(201).json(newBook);
});

// Setting the app to listen on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

