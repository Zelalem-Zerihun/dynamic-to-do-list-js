// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' prevents saving to Local Storage again
  }

  // Function to save tasks to Local Storage
  function saveTasks() {
    const tasks = Array.from(taskList.children).map(
      (li) => li.firstChild.textContent
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    // Check if the task text is empty
    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item for the task
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn"); // Add a class to the button

    // Assign an onclick event to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
      saveTasks(); // Update Local Storage after removal
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Save the task to Local Storage if required
    if (save) {
      saveTasks();
    }

    // Clear the task input field
    taskInput.value = "";
  }

  // Add an event listener to the "Add Task" button
  addButton.addEventListener("click", () => {
    addTask(taskInput.value);
  });

  // Add an event listener to the task input for the "Enter" key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(taskInput.value);
    }
  });

  // Load existing tasks from Local Storage when the page loads
  loadTasks();
});
