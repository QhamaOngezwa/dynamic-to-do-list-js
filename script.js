document.addEventListener("DOMContentLoaded", function () {
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask(taskText, save = true) {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      removeButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
      });
      removeButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
      });

      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  document.addEventListener("DOMContentLoaded", addTask);
});
