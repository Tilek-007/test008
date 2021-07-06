let user = [];

function askSurname() {
    let surname = prompt('Ваша фамилия?', );
    user.push(surname);
}
function askName() {
    let name = prompt('Ваше Имя?', );   
    user.push(name);
}
function askAge() {
    let age = prompt('Ваш возраст?', );
    user.push(age);
} 

function showMessage(){
    document.write(`Ваша фамилия: ${user[0]} <br>`);
    document.write(`Ваше имя: ${user[1]} <br>`);
    document.write(`Ваш возраст: ${user[2]} <br>`);
}


