/* Находим нужные элементы в документе HTML */
document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = todoInput.value.trim();

    /* Проверяем, чтобы запись не была пустой */

    if (task === "") {
      alert("Пожалуйста, напишите таск");
      return;
    }

    addTask(task);
    todoInput.value = "";
  });

  function addTask(task) {
    const listItem = document.createElement("li");
    listItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-start",
      "gap-3",
      "align-items-center"
    );

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("mr-2");
    checkbox.addEventListener("change", () => {
      listItem.classList.toggle("completed");
    });

    const taskSpan = document.createElement("span");
    taskSpan.textContent = task;
    taskSpan.classList.add("task-text");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  }
});
