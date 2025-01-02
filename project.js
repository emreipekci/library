const myLibrary = [];

// the constructor
function Book(title, author, pages, yearPublished, isRead) {    
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.yearPublished}, ${this.pages} pages. Status: ${this.isRead ? "read" : "not read"}`;
  }
}

// Add toggleReadStatus to the prototype
Book.prototype.toggleReadStatus = function() {
  this.isRead = !this.isRead; // Flip the boolean value
};

function addBookToLibrary(title, author, pages, yearPublished, isRead) {     // do stuff here.. when i click the button, it opens a form card with submit.
  const newBook = new Book(title, author, pages, yearPublished, isRead);
  myLibrary.push(newBook);
}

function displayLibrary() {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = ""; // Clear previous display

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.yearPublished || "Unknown"}</p>
      <p><strong>Pages:</strong> ${book.pages || "Unknown"}</p>
      <p><strong>Status:</strong> ${book.isRead ? "read" : "not read"}</p>
      <button onclick="removeBook(${index})">Remove</button>
    `;

    cardsContainer.appendChild(bookCard);
  });
}

// Remove a book from the library
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary(); // Update the display
}

addBookToLibrary("Normal People", "Sally Rooney", 273, 2018, true);
addBookToLibrary("If Cats Disappeared from the World", "Genki Kawamura", 202, 2012, true);

 // Handle form submission
 document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value || "Unknown";
  const pages = document.getElementById("pages").value || "Unknown";
  const isRead = document.querySelector('input[name="isRead"]:checked').value === "true";

  // Add the book to the library and refresh display
  addBookToLibrary(title, author, year, pages, isRead);
  displayLibrary();

  // Clear the form
  document.getElementById("form").reset();
});

// Display the books initially
displayLibrary();


