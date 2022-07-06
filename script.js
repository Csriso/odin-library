let myLibrary = [];

function Book(readed = false, name, author, pages) {
    this.readed = readed;
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const showForm = () => {
    const formSel = document.getElementById("formAdd");
    formSel.style.display = "block";
}