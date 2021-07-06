let time = document.getElementById('time');
        let startBtn = document.getElementById('start');
        let stopBtn = document.getElementById('stop');
        let restartBtn = document.getElementById('restart');
        let count = 0;
        let intervalId;
        time.textContent = count;

        function timer(){

            time.textContent = count++;

        }

        startBtn.onclick = function(){
            intervalId = setTimeout(timer, 500);
        }

        setTimeout(timer, 500);

        stopBtn.onclick = function(){
            clearInterval(intervalId);
        }

        restart.onclick = function(){
            clearInterval(intervalId);
            count = 0;
            time.textContent = count;
        }