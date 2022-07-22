let myLibrary = [];

function Book(name, author, pages, readed = false) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}

Book.prototype.toggleReaded = function () {
    this.readed = !this.readed;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    printBooks();
}

const showForm = () => {
    const formSel = document.getElementById("formAdd");
    formSel.style.display = "flex";
}

const createSampleBooks = () => {
    const BookOne = new Book("Lord of the rings", "J.R.R. Tolkien", "288", false);
    const BookTwo = new Book("The Hobbit", "J.R.R. Tolkien", "563", false);
    const BookThree = new Book("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", "277", true);
    const BookFour = new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling", "422", false);
    addBookToLibrary(BookOne);
    addBookToLibrary(BookTwo);
    addBookToLibrary(BookThree);
    addBookToLibrary(BookFour);
}

const printBooks = () => {
    const container = document.createElement("div");
    myLibrary.forEach((elem) => {
        const bookDiv = document.createElement("div");
        const titleElem = document.createElement("h3");
        const newContentTitle = document.createTextNode(elem.name);
        titleElem.appendChild(newContentTitle);
        const authorElem = document.createElement("h4");
        const newContentAuthor = document.createTextNode(elem.author);
        authorElem.appendChild(newContentAuthor);
        const pagesElem = document.createElement("p");
        const newContentPages = document.createTextNode(elem.pages);
        pagesElem.appendChild(newContentPages);
        const readedElem = document.createElement("p");
        const changeReadedElem = document.createElement("button");
        const newContentBtnChange = document.createTextNode("TOGGLE READED");
        changeReadedElem.appendChild(newContentBtnChange);
        const newContentReaded = document.createTextNode(elem.readed ? "READED: ✔️" : "READED: ❌");
        readedElem.appendChild(newContentReaded);
        readedElem.appendChild(changeReadedElem);

        const removeButtonElem = document.createElement("button");
        const newContentButton = document.createTextNode("REMOVE");
        removeButtonElem.appendChild(newContentButton);
        removeButtonElem.onclick = function () {
            const findIndex = myLibrary.findIndex((elem) => {
                return elem.name === this.parentElement.dataset.name;
            })
            myLibrary.splice(findIndex, 1);
            this.parentElement.remove();
        };

        bookDiv.appendChild(titleElem);
        bookDiv.appendChild(authorElem);
        bookDiv.appendChild(pagesElem);
        bookDiv.appendChild(readedElem);
        bookDiv.appendChild(removeButtonElem);

        bookDiv.dataset.name = elem.name;

        container.appendChild(bookDiv);

    })

    const booksSelector = document.querySelector(".showBooks");
    booksSelector.innerHTML = "";
    booksSelector.appendChild(container);
}
createSampleBooks();
printBooks();