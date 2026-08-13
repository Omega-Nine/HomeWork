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

if(window.location.hash === "#preview") {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    const bookId = Number(id);
    const selectedBook = books.find(function(book) {
        return book.id === bookId;
    });
    renderPreview(selectedBook);
};

books.forEach(function(item) {
    const li = document.createElement("li");

    li.textContent = item.bookname;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    li.append(editButton);
    bookList.append(li);

    li.addEventListener("click", function() {
        history.pushState(null, "", `?id=${item.id}#preview`);

        const url = new URL(window.location.href);
        const id = url.searchParams.get("id");
        const bookId = Number(id);
        const selectedBook = books.find(function(book) {
            return book.id === bookId;
        });
        console.log(selectedBook);

        renderPreview(selectedBook);
    });

    editButton.addEventListener("click", function(event) {
        event.stopPropagation();
        history.pushState(null, "", `?id=${item.id}#edit`);

    });
});

const addButton = document.createElement("button");
addButton.textContent = "Add";
bookList.append(addButton);

addButton.addEventListener("click", function() {
    history.pushState(null, "", "#add")
});

document.body.append(bookList);

