const savedBooks = localStorage.getItem("books");
const books = JSON.parse(savedBooks);

const bookList = document.createElement("ul");

books.forEach(function(item) {
    const li = document.createElement("li");

    li.textContent = item.bookname;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    li.append(editButton);
    bookList.append(li);

    li.addEventListener("click", function() {
        history.pushState(null, "", `?id=${item.id}#preview`);
        console.log(window.location.hash);
        const url = new URL(window.location.href);
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

