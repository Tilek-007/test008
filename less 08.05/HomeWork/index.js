let createBtn = document.getElementById('create-btn');
let ClearBtn = document.getElementById('clear-btn');
let allTasks = [];

let spPriority = {
    high: 'bg-danger',
    middle: 'bg-warning',
    low: 'bg-success',  
};

getTasks();
showTasks();

createBtn.onclick = function () {
    let task = document.getElementById('task').value;
    let priority = document.getElementById('priority').value;


    let obj = {
        nameTask:task,
        priority,
    }
    if (obj.nameTask == '') {
        alert('your input is empty');
        return;
    }

    allTasks.push(obj);

    localStorage.setItem('tasks', JSON.stringify(allTasks));

    getTasks();
    showTasks();
}

function getTasks() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        allTasks = JSON.parse(tasks);
    }
}

function showTasks() {
    root.innerHTML = '';
        for (let value of allTasks) {
            let li = document.createElement('li');
            li.textContent = value.nameTask;
            li.className = spPriority[value.priority];
            root.append(li);
        }
}


ClearBtn.onclick = function () {
    root.innerHTML = '';
    localStorage.clear();
}