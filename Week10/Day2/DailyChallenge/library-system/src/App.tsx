import React from "react";
import { DigitalLibrary } from "./classes/DigitalLibrary";
import { Book } from "./interfaces/Book";
import './App.css'; 

const App: React.FC = () => {
  // To create an instance of DigitalLibrary
  const myLibrary = new DigitalLibrary("https://mylibrary.com");

  // To create some book objects
  const book1: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    publishedYear: 1960,
    genre: "Fiction",
  };

  const book2: Book = {
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949,
  };

  
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);

  // To fetch book details by ISBN
  const bookDetails = myLibrary.getBookDetails("9780061120084");

  return (
    <div>
      <h1>Welcome to My Digital Library</h1>
      <p>Library Website: {myLibrary.website}</p>
      
      {bookDetails ? (
        <div>
          <h2>Book Details:</h2>
          <p><strong>Title:</strong> {bookDetails.title}</p>
          <p><strong>Author:</strong> {bookDetails.author}</p>
          <p><strong>ISBN:</strong> {bookDetails.isbn}</p>
          <p><strong>Published Year:</strong> {bookDetails.publishedYear}</p>
          <p><strong>Genre:</strong> {bookDetails.genre || "N/A"}</p>
        </div>
      ) : (
        <p>Book not found.</p>
      )}
      
      <h3>All Book Titles:</h3>
      <ul>
        {myLibrary.listBooks().map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


