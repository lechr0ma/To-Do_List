
function addTask() {
    if (document.getElementById('input-task').value) {
        let li = document.createElement("li");
        let ul = document.getElementById('task-list').childNodes.length;
        li.innerHTML = `<input type="checkbox">
                    <span class="task">` + document.getElementById(`input-task`).value + `</span><button id="li` + ul + `" onclick="removeTask(this.parentNode)" class="delete-btn">delete task</button>`;
        document.getElementById(`task-list`).appendChild(li);
        //document.getElementById('task-list').insertBefore(li, document.getElementById(`task-list`).firstChild); //to first child
        document.getElementById(`input-task`).value = ``;

    }
    ;
}
function removeTask(node){
    console.log(node);
    node.parentNode.removeChild(node);
}

