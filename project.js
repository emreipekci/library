const myLibrary = [];

// the constructor
function Book(title, author, pages, yearPublished, isRead) {    
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.yearPublished}, ${this.pages} pages. Read: ${this.isRead ? "yes" : "no"}`;
  }
}

function addBookToLibrary(title, author, pages, yearPublished, isRead) {     // do stuff here.. when i click the button, it opens a form card with submit.
  const newBook = new Book(title, author, pages, yearPublished, isRead);
  myLibrary.push(newBook);
}

addBookToLibrary("Normal People", "Sally Rooney", 273, 2018, true);
addBookToLibrary("If Cats Disappeared from the World", "Genki Kawamura", 202, 2012, true);


