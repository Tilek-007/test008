let timer = document.getElementById('timer');
let callBtn = document.getElementById('call');

let count = 28;
timer.textContent = count;
console.log(timer);
let intervalId;

function time () {
    timer.textContent = --count;
}

function showMessage () {
    if(count <= -1) {
        clearInterval(intervalId);
        alert('Вам скоро позвонят');
        count = 28;
        timer.textContent = count;
        intervalId = undefined;
    }
}

callBtn.onclick = function () {
    if (intervalId === undefined) {
        intervalId = setInterval(function () {
            time();
            showMessage();
        }, 1000);
    }
}
