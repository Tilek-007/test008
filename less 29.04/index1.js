let timer = document.getElementById('timer');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let restartBtn = document.getElementById('restart');
let count = 0;
let numHistory = 0;
timer.textContent = count;
let intervalId;

function time() {
    timer.textContent = ++count;
}

function showHistory() {
    let historyStr = `${++numHistory}. Остановка на значении: ${count}`;
    let p = document.createElement('p');
    p.className = 'text-center';
    p.textContent = historyStr;
    root.append(p);
}

startBtn.onclick = function () {
    if(intervalId === undefined) {
        intervalId = setInterval(time, 500);
    }
}

stopBtn.onclick = function () {
    clearInterval(intervalId);
    intervalId = undefined;
}

restartBtn.onclick = function () {
    showHistory();

    clearInterval(intervalId);
    count = 0;
    timer.textContent = count;
    intervalId = undefined;
}