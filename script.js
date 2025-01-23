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
    removeButton.className = "remove-btn"; // Assign the class name directly

    // Attach an event listener to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = "";
  }

  // Event listener for the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Event listener for the "Enter" key in the input field
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
