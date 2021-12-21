function loadTasks(){
    document.getElementById(`task-list`).innerHTML = ``;
    for ( let i = 0; i <= taskList.length - 1; i++) {
        let li = document.createElement("li");
        li.innerHTML = taskList[i].html;
        if (taskList[i].isCrossed){
            li.innerHTML = taskList[i].html.replace(`class="task"`, `class="task" style="text-decoration: line-through"`).replace(`type="checkbox"`, `type="checkbox" checked`);
        }
        document.getElementById(`task-list`).appendChild(li);
    }}

let taskList = JSON.parse(localStorage.getItem(`tasks`)) || [] ;
loadTasks();

function removeTask(id){
    for (let i = 0; i < taskList.length; i++){
        if (taskList[i].id == id){
            taskList.splice(i, 1);
        }
    }
    localStorage.setItem(`tasks`, JSON.stringify(taskList));
    loadTasks();
}

function textChange(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (id == taskList[i].id) {
            if (taskList[i].isCrossed){
                taskList[i].isCrossed = 0;
            }else {
                taskList[i].isCrossed = 1;
            }
        }
        localStorage.setItem(`tasks`, JSON.stringify(taskList));
    }
    loadTasks();
}
function createTask() {
    if (document.getElementById('input-task').value) {
        let id = Date.now();
        taskList.push({
            html: `<input type="checkbox" onchange="textChange(this.id)" id="` + id + `"><span class="task">` +
                document.getElementById('input-task').value + `</span><button id="` + id + `"onclick="removeTask(this.id)"
                class="delete-btn">delete task</button>`,
            isCrossed: 0,
            id: id,
        });
        localStorage.setItem(`tasks`, JSON.stringify(taskList));
        document.getElementById(`input-task`).value = ``;
        loadTasks();
    }
    }