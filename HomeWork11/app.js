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

let selectedLi = null;


// ========================
// TREE
// ========================

function createTree(items) {
  const ul = document.createElement("ul");

  items.forEach(function(item) {
    const li = document.createElement("li");

    const title = document.createElement("span");
    title.textContent = item.title;

    const icon = document.createElement("i");
    icon.className = "material-icons";

    // Folder or file
    if (item.folder === true) {
      li.className = "folder";
      icon.textContent = "folder";
    } else {
      li.className = "file";
      icon.textContent = "insert_drive_file";
    }

    li.append(icon, title);


    // Context menu on file/folder
    li.addEventListener("contextmenu", function(event) {
      event.preventDefault();
      event.stopPropagation();

      clearSelection();

      selectedLi = li;
      li.classList.add("selected");

      setMenuEnabled(true);
      showContextMenu(event.pageX, event.pageY);
    });


    // Folder contents
    if (item.folder === true) {
      let childrenUl;

      if (item.children && item.children.length > 0) {
        childrenUl = createTree(item.children);
      } else {
        childrenUl = document.createElement("ul");

        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "This folder is empty";

        childrenUl.append(emptyMessage);
      }

      childrenUl.style.display = "none";
      li.append(childrenUl);


      // Open / close folder
      li.addEventListener("click", function(event) {
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
}


// ========================
// CONTEXT MENU
// ========================

const contextMenu = document.createElement("div");

const renameItem = document.createElement("div");
renameItem.textContent = "Rename";

const deleteItem = document.createElement("div");
deleteItem.textContent = "Delete";

contextMenu.style.display = "none";
contextMenu.style.position = "absolute";

contextMenu.append(renameItem, deleteItem);
document.body.append(contextMenu);


function showContextMenu(x, y) {
  contextMenu.style.display = "block";
  contextMenu.style.left = x + "px";
  contextMenu.style.top = y + "px";
}


function clearSelection() {
  document.querySelectorAll("li.selected").forEach(function(item) {
    item.classList.remove("selected");
  });
}


function setMenuEnabled(enabled) {
  renameItem.style.pointerEvents = enabled ? "auto" : "none";
  deleteItem.style.pointerEvents = enabled ? "auto" : "none";

  renameItem.style.opacity = enabled ? "1" : "0.5";
  deleteItem.style.opacity = enabled ? "1" : "0.5";
}


// Left click outside
document.addEventListener("click", function() {
  contextMenu.style.display = "none";

  clearSelection();
  selectedLi = null;
});


// Right click outside file/folder
document.addEventListener("contextmenu", function(event) {
  const clickedItem = event.target.closest("li.folder, li.file");

  if (!clickedItem) {
    event.preventDefault();

    clearSelection();
    selectedLi = null;

    setMenuEnabled(false);
    showContextMenu(event.pageX, event.pageY);
  }
});


// ========================
// DELETE
// ========================

deleteItem.addEventListener("click", function() {
  if (selectedLi === null) {
    return;
  }

  const parentUl = selectedLi.parentElement;

  selectedLi.remove();
  selectedLi = null;

  if (parentUl.children.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.textContent = "This folder is empty";

    parentUl.append(emptyMessage);
  }
});


// ========================
// RENAME
// ========================

renameItem.addEventListener("click", function() {
  if (selectedLi === null) {
    return;
  }

  const titleElement = selectedLi.querySelector("span");
  const oldName = titleElement.textContent;

  // File
  if (selectedLi.classList.contains("file")) {
    const dotIndex = oldName.lastIndexOf(".");

    const extension =
      dotIndex !== -1 ? oldName.slice(dotIndex) : "";

    const nameWithoutExtension =
      dotIndex !== -1 ? oldName.slice(0, dotIndex) : oldName;

    const newName = prompt(
      "Введите новое имя",
      nameWithoutExtension
    );

    if (newName !== null && newName.trim() !== "") {
      titleElement.textContent =
        newName.trim() + extension;
    }

    return;
  }


  // Folder
  const newName = prompt(
    "Введите новое имя",
    oldName
  );

  if (newName !== null && newName.trim() !== "") {
    titleElement.textContent = newName.trim();
  }
});


// ========================
// START
// ========================

const tree = createTree(data);

const root = document.getElementById("root");
root.append(tree);