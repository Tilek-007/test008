let createBtn = document.getElementById('create-btn');
let allTasks = [];
getTasks ();
showTasks ();

createBtn.onclick = function() {
    let task = document.getElementById('task').value;
    allTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(allTasks));

    getTasks();
    showTasks();
}

function getTasks () {
    let tasks = localStorage.getItem('tasks'); //null
    if(tasks){
        allTasks = JSON.parse(tasks);
    }
}

function showTasks () {
    if(allTasks){
        for(let value of allTasks) {
            let li = document.createElement('li');
            li.textContent = value;
            root.append(li);
        }
    }
}
