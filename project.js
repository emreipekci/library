const myLibrary = [];

// the constructor
function Book(title, author, pages, yearPublished, isRead) {    
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.pages = pages;
  this.isRead = isRead;

  this.getInfo = function () {
    return `${this.title} by ${this.author}, ${this.yearPublished}, ${this.pages} pages. Read: ${this.isRead ? "yes" : "no"}`;
  }
}

function addBookToLibrary() {     // do stuff here.. when i click the button, it opens a form card with submit.
 
}

theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
