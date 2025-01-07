import { Book } from "../interfaces/Book"; 

// The parent Library class
export class Library {
  protected books: Book[] = [];  

  // To add a new book to the library
  public addBook(book: Book): void {
    this.books.push(book);  
  }

  // To get a book's details by ISBN
  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn); 
  }
}

// The DigitalLibrary class extending Library
export class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string) {
    super(); 
    this.website = website;
  }

  // To list all book titles in the digital library
  public listBooks(): string[] {
    return this.books.map(book => book.title);
  }
}


