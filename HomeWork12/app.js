const savedBooks = localStorage.getItem("books");
const books = JSON.parse(savedBooks);

const bookList = document.createElement("ul");

const dynamicSection = document.createElement("div");
document.body.append(dynamicSection);

function renderPreview(book) {
    const bookName = document.createElement("h2");
    bookName.textContent = book.bookname;

    const previewSection = document.createElement("div");

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    
    const bookPlot = document.createElement("p");
    bookPlot.textContent = book.plot;
    previewSection.append(bookName, bookAuthor, bookImage, bookPlot);

    dynamicSection.textContent = "";
    dynamicSection.append(previewSection);

};

function renderAdd() {
    const addForm = document.createElement("form");
    const nameInput = document.createElement("input");
    const authorInput = document.createElement("input");
    const imageInput = document.createElement("input");
    const plotInput = document.createElement("textarea");

    addForm.append(nameInput, authorInput, imageInput, plotInput);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.type = "button";

    cancelButton.addEventListener("click", function() {
        history.back();
    });

    addForm.append(saveButton, cancelButton);

    addForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const newBook = {
            id: books.length,
            bookname: nameInput.value,
            author: authorInput.value,
            image: imageInput.value,
            plot: plotInput.value
        };

        books.push(newBook);
        const updateBooks = JSON.stringify(books);
        localStorage.setItem("books", updateBooks);
        renderBookList();

        history.pushState(null, "", `?id=${newBook.id}#preview`);
        renderPreview(newBook);

        setTimeout(function() {
            alert("Book successfully added")
        }, 300);
    });

    dynamicSection.textContent = "";
    dynamicSection.append(addForm);

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
        const isConfirmed = confirm("Discard changes");
        if(isConfirmed === true) {
            history.pushState(null, "", `?id=${book.id}#preview`);
            renderPreview(book);
        };
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

        setTimeout(function() {
            alert("Book successfully updated");
        }, 300);
    });

    dynamicSection.textContent = "";
    dynamicSection.append(editForm);

};

function router() {
    if(window.location.hash === "#add") {
        renderAdd();
    };
    
    if(window.location.hash === "#preview" || window.location.hash === "#edit") {
        const url = new URL(window.location.href);
        const id = url.searchParams.get("id");
        const bookId = Number(id);
        const selectedBook = books.find(function(book) {
            return book.id === bookId;
        });

        if(selectedBook !== undefined) {
            if(window.location.hash === "#preview") {
                renderPreview(selectedBook);
            } else {
                renderEdit(selectedBook);
            };
        
        } else{
            alert("Шо ты натыкал голова ты утиная?!");
            history.pushState(null, "", "index.html");
            dynamicSection.textContent = "";
            
        };
    };
    
};

window.addEventListener("popstate", function() {
    router();
});



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
        history.pushState(null, "", "#add");
        renderAdd();
    });
};

renderBookList();
router();
document.body.append(bookList);

