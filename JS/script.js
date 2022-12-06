//Declare empty array
let myLibrary = [];

//Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   // this.info = function() {
   //     return (title + author + ", " + pages + ", " + read)
  //  }
}

//Function for addding book to the array
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// Function to display library array to cards
function displayBooksOnPage() {
    const books = document.querySelector(".books");

    //Loop over the library array and display the cards
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}