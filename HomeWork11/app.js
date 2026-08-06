const data = [
  {
    folder: true,
    title: "Pictures",
    children: [
      {
        title: "logo.png",
      },
      {
        folder: true,
        title: "Vacations",
        children: [
          {
            title: "spain.jpeg",
          },
        ],
      },
    ],
  },
  {
    folder: true,
    title: "Desktop",
    children: [
      {
        folder: true,
        title: "screenshots",
        children: null,
      },
    ],
  },
  {
    folder: true,
    title: "Downloads",
    children: [
      {
        folder: true,
        title: "JS",
        children: null,
      },
      {
        title: "nvm-setup.exe",
      },
      {
        title: "node.exe",
      },
    ],
  },
  {
    title: "credentials.txt",
  },
];

function createTree(items) {
  const ul = document.createElement("ul");

    items.forEach(function(item) {
      const li = document.createElement("li");

      const title = document.createElement("span");
      title.textContent = item.title;

      const icon = document.createElement("i");
      icon.className = "material-icons";

      if (item.children) {
        li.className = "folder";
        icon.textContent = "folder";
      } else {
        li.className = "file";
        icon.textContent = "insert_drive_file";
      }
      
      li.append(icon, title);
      li.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        event.stopPropagation();
        selectedLi = li;
        contextMenu.style.display = "block";
        contextMenu.style.left = event.pageX + "px";
        contextMenu.style.top = event.pageY + "px";
        console.log(item.title);
      });

      if(item.children && item.children.length > 0) {
        const childrenUl = createTree(item.children);

        childrenUl.style.display = "none";

        li.append(childrenUl);

        li.addEventListener("click", function (event) {
          if (childrenUl.contains(event.target)) {
            return;
          }

          if (childrenUl.style.display === "none") {
            childrenUl.style.display = "block";
            icon.textContent = "folder_open";
          } else {
            childrenUl.style.display = "none";
            icon.textContent = "folder";
          } 
        });
      }

      ul.append(li);
        
    });

    return ul;
};

let selectedLi = null;

const contextMenu = document.createElement("div");
const renameItem = document.createElement("div");
renameItem.textContent = "Rename";
contextMenu.style.display = "none";
contextMenu.style.position = "absolute";


document.addEventListener("click", function() { 
  contextMenu.style.display = "none";
});

const deleteItem = document.createElement("div");
deleteItem.textContent = "Delete";

deleteItem.addEventListener("click", function() {
  const parentUl = selectedLi.parentElement;

  selectedLi.remove();

  if(parentUl.children.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.textContent = "This folder is empty";
    parentUl.append(emptyMessage);
  }
});

renameItem.addEventListener("click", function() {
  const titleElement = selectedLi.querySelector("span");
  const newName = prompt("Введите новое имя");

  if(newName !== null && newName.trim() !== "") {
    titleElement.textContent = newName.trim();
  }
});


contextMenu.append(renameItem);
contextMenu.append(deleteItem);
document.body.append(contextMenu);


const tree = createTree(data);
const root = document.getElementById("root");
root.append(tree);

const titleElement = selectedLi.querySelector("span");
selectedLi