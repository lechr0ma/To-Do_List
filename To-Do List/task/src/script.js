
// function addTask() {
//     if (document.getElementById('input-task').value) {
//         let li = document.createElement("li");
//         let ul = document.getElementById('task-list').childNodes.length;
//         li.innerHTML = `<input type="checkbox" onchange="textChange(this)">
//                     <span class="task">` + document.getElementById(`input-task`).value + `</span><button id="li` + ul + `" onclick="removeTask(this.parentNode)" class="delete-btn">delete task</button>`;
//         document.getElementById(`task-list`).appendChild(li);
//         //document.getElementById('task-list').insertBefore(li, document.getElementById(`task-list`).firstChild); //to first child
//         document.getElementById(`input-task`).value = ``;
//
//     }
// }
function removeTask(node){
    console.log(node);
    node.parentNode.removeChild(node);
    let taskList = JSON.parse(localStorage.getItem(`tasks`)) || [];

}
function textChange(node){
    let span = node.parentNode.childNodes[1];
    if (node.checked){
        span.style.textDecoration = 'line-through'
    } else{
        span.removeAttribute('style') }
}
let n = 0;
let taskList = [];
function createTask() {

    let task = {
        text: ``,
        html: ``,
        status: ``
    }
    let ul = document.getElementById('task-list').childNodes.length;
    task.text = document.getElementById('input-task').value;
    task.html = `<input type="checkbox" onchange="textChange(this)"><span class="task">` + task.text + `</span><button id="li` + ul + `" onclick="removeTask(this.parentNode)" class="delete-btn">delete task</button>`;
    task.status = `created`;
    //console.log(task);
    taskList[n] = task;
    localStorage.setItem(`task` + n, JSON.stringify(taskList));
    n++;
    let fromSt = JSON.parse(localStorage.getItem(`tasks`)) || [];
    console.log(fromSt);
    for ( i = 0; i <= fromSt.length - 1; i++){
        if (fromSt[i].status == `created`){
            console.log(fromSt[i].status);
            let li = document.createElement("li");
            li.innerHTML = fromSt[i].html;
            document.getElementById(`task-list`).appendChild(li);

        }

        }

    }


