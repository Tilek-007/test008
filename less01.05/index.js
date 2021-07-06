let setDataBtn = document.getElementById('sumbitBtn');
let getDataBtn = document.getElementById('getDataBtn');
let removeDataBtn = document.getElementById('removeDataBtn');


// //input, textarea
// btn.onclick = function() {
//     let login = document.getElementById('login')
//     let password = document.getElementById('password');
//     login.value = 'Tilek';

//     alert('login:' + login.value);
//     alert('password:' + password.value);
// }


// ******* LOCALSTORAGE ********

setDataBtn.onclick = function() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let userData = {login, password};
    
    localStorage.setItem('userData', JSON.stringify(userData));

    // localStorage.setItem('login', login.value);
    // localStorage.setItem('password', password.value);
}

getDataBtn.onclick = function() {
    let divRoot = document.getElementById('root');
    let result = localStorage.getItem('userData');
    console.log(result);
    //divRoot.append(result);
}

removeDataBtn.onclick = function() {
    localStorage.clear('login');
}