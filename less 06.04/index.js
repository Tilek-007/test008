// setTimeout
// function hello(){
//     alert('Hello, world');
// }

// setTimeout(() =>{
//     alert('задержка');
// },3000);

// ******* setTimeout с аргументами ********

// function showMessage(txt1, txt2){
//     alert(`${txt1} ${txt2}`);
// }

// setTimeout(showMessage, 2000, 'Hello', 'world');

// ****** ClearTimeout ******

// function hello(){
//     document.write('Hello, world');
// }

// let timerId = setTimeout(hello, 3000);
// console.log(timerId);
//clearTimeout(timerId);

// ******** SetInterval ********

function updateTime(){
    document.querySelector('#time').innerHTML = new Date().toTimeString();
}

let intervalId = setInterval(updateTime, 1000);

setTimeout(function(){
    clearInterval(intervalId);
    alert('stop');
}, 5000);