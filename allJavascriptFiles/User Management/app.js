document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const addTodoBtn = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");

    const leaveInput = document.getElementById("leaveInput");
    const addLeaveBtn = document.getElementById("addLeaveBtn");
    const leaveList = document.getElementById("leaveList");

    // Load lists from local storage
    function loadLists() {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        const leaves = JSON.parse(localStorage.getItem("leaves")) || [];

        todos.forEach(addTodoToList);
        leaves.forEach(addLeaveToList);
    }

    // Add a To-Do item
    function addTodoToList(todo) {
        const li = document.createElement("li");
        li.textContent = todo;
        li.appendChild(createDeleteButton("todo"));
        todoList.appendChild(li);
    }

    // Add a Leave request
    function addLeaveToList(leave) {
        const li = document.createElement("li");
        li.textContent = leave;
        li.appendChild(createDeleteButton("leave"));
        leaveList.appendChild(li);
    }

    // Create delete button
    function createDeleteButton(type) {
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => deleteItem(type, button.parentElement);
        return button;
    }

    // Delete an item
    function deleteItem(type, listItem) {
        const currentList = type === "todo" ? "todos" : "leaves";
        const items = JSON.parse(localStorage.getItem(currentList)) || [];
        const updatedItems = items.filter(item => item !== listItem.firstChild.textContent);
        localStorage.setItem(currentList, JSON.stringify(updatedItems));

        listItem.remove();
    }

    // Add To-Do on button click
    addTodoBtn.onclick = () => {
        const todo = todoInput.value.trim();
        if (todo) {
            addTodoToList(todo);
            updateLocalStorage("todos", todo);
            todoInput.value = "";
        }
    };

    // Add Leave Request on button click
    addLeaveBtn.onclick = () => {
        const leave = leaveInput.value.trim();
        if (leave) {
            addLeaveToList(leave);
            updateLocalStorage("leaves", leave);
            leaveInput.value = "";
        }
    };

    // Update local storage
    function updateLocalStorage(type, item) {
        const currentList = JSON.parse(localStorage.getItem(type)) || [];
        currentList.push(item);
        localStorage.setItem(type, JSON.stringify(currentList));
    }

    // Initial load
    loadLists();
});
