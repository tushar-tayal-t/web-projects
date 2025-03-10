// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task event listener
addTaskButton.addEventListener('click', addTask);

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    saveTask(taskText);
    taskInput.value = ""; // Clear input field
  }
}

// Create task element function
function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', () => {
    li.remove();
    removeTask(taskText);
  });

  const toggleButton = document.createElement('button');
  toggleButton.textContent = "Complete";
  toggleButton.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(toggleButton);
  li.appendChild(deleteButton);

  return li;
}

// Save task to localStorage
function saveTask(taskText) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTask(taskText) {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(taskText => {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
  });
}
