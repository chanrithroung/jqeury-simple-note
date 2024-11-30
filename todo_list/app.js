$(document).ready(function () {
    // Add a new task
    $("#add-task").click(function () {
        const taskText = $("#task-input").val();
        if (taskText.trim() !== "") {
            const taskItem = `<li>
                                <span class="task">${taskText}</span>
                                <span class="remove">❌</span>
                              </li>`;
            $("#task-list").append(taskItem);
            $("#task-input").val(""); // Clear the input field
        } else {
            alert("Please enter a task!");
        }
    });

    // Mark task as completed
    $("#task-list").on("click", ".task", function () {
        $(this).toggleClass("completed");
    });

    // Remove a task
    $("#task-list").on("click", ".remove", function () {
        $(this).parent().remove();
    });
});
