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
});

document.body.append(bookList);