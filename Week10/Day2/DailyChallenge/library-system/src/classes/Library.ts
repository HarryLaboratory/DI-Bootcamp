import { Book } from "../interfaces/Book";

export class Library {
  // Private property to hold an array of books
  private books: Book[] = [];

  // To add a book to the library
  public addBook(book: Book): void {
    this.books.push(book);
  }

  // To get book details based on ISBN
  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }
}
