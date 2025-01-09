import React, { useState } from "react";
import { Book } from "./types/Book";
import List from "./components/List";
import './App.css';

function App() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "Moby Dick", author: "Herman Melville" }
  ]);

  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");

  // To add a new book
  const addBook = (title: string, author: string) => {
    const newBook: Book = {
      id: books.length + 1, 
      title,
      author
    };
    setBooks([...books, newBook]);
  };

  // To handle form submit to add a new book
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBookTitle && newBookAuthor) {
      addBook(newBookTitle, newBookAuthor);
      setNewBookTitle("");
      setNewBookAuthor("");
    }
  };

  // To render logic for each book in the list
  const renderBook = (book: Book) => (
    <div>
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
    </div>
  );

  return (
    <div>
      <h1>Book List</h1>
      
      {/* Render the list of books */}
      <List items={books} renderItem={renderBook} />

      {/* Form to add a new book */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newBookTitle}
          onChange={(e) => setNewBookTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBookAuthor}
          onChange={(e) => setNewBookAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default App;

