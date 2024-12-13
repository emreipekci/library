const myLibrary = [];

// the constructor
function Book(title, author, pages, yearPublished, isRead) {    
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.yearPublished = yearPublished;
  this.isRead = isRead;

  this.getInfo = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.yearPublished}. Read: ${this.isRead ? "yes" : "no"}`;
  }
}

function addBookToLibrary() {
  // do stuff here
}

theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
