const addTask = () => {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value;

  if (!taskText) {
      alert("Please Add Task.");
      return;
  }

  const tasksContainer = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => tasksContainer.removeChild(newTask);

  newTask.appendChild(deleteButton);
  tasksContainer.appendChild(newTask);

  taskInput.value = "";
};

const addTaskButton = document.getElementById("add-task-btn");
addTaskButton.onclick = addTask;
