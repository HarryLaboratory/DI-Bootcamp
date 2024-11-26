const allBooks = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        image: "https://example.com/harry-potter.jpg", // didn't know if we were supposed to pick real jpg
        alreadyRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://example.com/gatsby.jpg", 
        alreadyRead: false
    }
];

const section = document.querySelector('.listBooks');

allBooks.forEach(book => {
    const bookDiv = document.createElement('div');
    
    if (book.alreadyRead) {
        bookDiv.style.color = 'red'; 
    }

    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.alt = book.title;
    bookImage.style.width = '100px';

    bookDiv.appendChild(bookImage);
    bookDiv.appendChild(bookDetails);

    section.appendChild(bookDiv);
});
