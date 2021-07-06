let timer = document.getElementById('timer');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let restartBtn = document.getElementById('restart');
let count = 0;
timer.textContent = count;
let intervalId;
let clickCount = 0;

function time() {
    timer.textContent = count++;
}

startBtn.onclick = function () {
    if(intervalId === undefined) {
        intervalId = setInterval(time, 1000);
    }
}

stopBtn.onclick = function () {
    clearInterval(intervalId);
    clickCount++;
    let p = document.createElement('p');
    for(let num = 0; num < count; num++){
        p.textContent = `${clickCount}. остановка на значении - ${num}`;
        }
    document.getElementById('root').after(p);
    intervalId = undefined;
}

restartBtn.onclick = function () {
    clearInterval(intervalId);
    count = 0;
    timer.textContent = count;
    intervalId = undefined;
}