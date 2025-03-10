document.getElementById("addTask").addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    let li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        this.remove(); // Remove task when clicked
    });

    document.getElementById("taskList").appendChild(li);
    taskInput.value = ""; // Clear input after adding
});
