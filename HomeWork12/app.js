const savedBooks = localStorage.getItem("books");
const books = JSON.parse(savedBooks);

const bookList = document.createElement("ul");

const dynamicSection = document.createElement("div");
document.body.append(dynamicSection);

function renderPreview(book) {
    const bookName = document.createElement("h2");
    bookName.textContent = book.bookname;

    const previewSection = document.createElement("div");
    previewSection.append(bookName);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    previewSection.append(bookAuthor);

    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    previewSection.append(bookImage);

    const bookPlot = document.createElement("p");
    bookPlot.textContent = book.plot;
    previewSection.append(bookPlot);

    dynamicSection.textContent = "";
    dynamicSection.append(previewSection);

};

function renderEdit(book) {
    const editForm = document.createElement("form");
    const nameInput = document.createElement("input");
    nameInput.value = book.bookname;

    const authorInput = document.createElement("input");
    authorInput.value = book.author;

    const imageInput = document.createElement("input");
    imageInput.value = book.image;

    const plotInput = document.createElement("textarea");
    plotInput.value = book.plot;

    editForm.append(nameInput, authorInput, imageInput, plotInput);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.type = "button";

    cancelButton.addEventListener("click", function() {
        history.pushState(null, "", `?id=${book.id}#preview`);
        renderPreview(book);
    });

    editForm.append(saveButton, cancelButton);

    editForm.addEventListener("submit", function(event) {
        event.preventDefault();
        book.bookname = nameInput.value;
        book.author = authorInput.value;
        book.image = imageInput.value;
        book.plot = plotInput.value;

        const updateBooks = JSON.stringify(books);
        localStorage.setItem("books", updateBooks);

        renderBookList();

        history.pushState(null, "", `?id=${book.id}#preview`);
        renderPreview(book);
    });

    dynamicSection.textContent = "";
    dynamicSection.append(editForm);

}

if(window.location.hash === "#preview") {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    const bookId = Number(id);
    const selectedBook = books.find(function(book) {
        return book.id === bookId;
    });
    renderPreview(selectedBook);
};

function renderBookList() {
    bookList.textContent = "";

    books.forEach(function(item) {
        const li = document.createElement("li");

        const spanNameBook = document.createElement("span");
        spanNameBook.textContent = item.bookname;
        li.append(spanNameBook);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        li.append(editButton);
        bookList.append(li);

        spanNameBook.addEventListener("click", function() {
            history.pushState(null, "", `?id=${item.id}#preview`);

            const url = new URL(window.location.href);
            const id = url.searchParams.get("id");
            const bookId = Number(id);
            const selectedBook = books.find(function(book) {
                return book.id === bookId;
            });
            
            renderPreview(selectedBook);
        });

        editButton.addEventListener("click", function(event) {
            history.pushState(null, "", `?id=${item.id}#edit`);
            renderEdit(item);
        });
    });

    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    bookList.append(addButton);

    addButton.addEventListener("click", function() {
        history.pushState(null, "", "#add")
    });
};

renderBookList();
document.body.append(bookList);

