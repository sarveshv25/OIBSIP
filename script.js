 let tasks = [];

    function addTask() {
        const taskInput = document.getElementById("taskInput");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const task = {
                text: taskText,
                date: new Date(),
                completed: false
            };

            tasks.push(task);
            displayTasks();
            taskInput.value = "";
        }
    }

    function displayTasks() {
        const pendingTasksDiv = document.getElementById("pendingTasks");
        const completedTasksDiv = document.getElementById("completedTasks");

        pendingTasksDiv.innerHTML = "";
        completedTasksDiv.innerHTML = "";

        tasks.forEach((task, index) => {
            const taskDiv = document.createElement("div");
            taskDiv.className = "task";

            const status = task.completed ? "Complete" : "Pending";

            taskDiv.innerHTML = `
                <span>${task.text} (${status}) - ${task.date.toLocaleString()}</span>
                <span class="complete" onclick="completeTask(${index})">Complete</span>
                <span class="delete" onclick="deleteTask(${index})">Delete</span>
            `;

            if (task.completed) {
                completedTasksDiv.appendChild(taskDiv);
            } else {
                pendingTasksDiv.appendChild(taskDiv);
            }
        });
    }

    function completeTask(index) {
        tasks[index].completed = true;
        displayTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        displayTasks();
    }