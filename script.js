// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    // Retrieve and trim the task text
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item for the task
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn"); // Add the class using classList.add

    // Assign an onclick event to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = "";
  }

  // Add an event listener to the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Add an event listener to the task input for the "Enter" key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
