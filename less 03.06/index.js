const URL = 'http://localhost:3333/users';

let getUsers = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => showUsers(data))
}

let showUsers = (data) => {
    let bodyTable = document.querySelector('#body-table');
    let tr = '';

    data.forEach((item) => {
        tr += `
         <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.email}</td>
                <td><button class="btn btn-danger">Удалить</button></td>
            </tr>`
    })

    bodyTable.innerHTML = tr;

}

getUsers();

let btn = document.getElementById('addBtn');

btn.onclick = function () {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surName').value;
    let email = document.getElementById('email').value;

    let data = {
        name,
        surname,
        email
    };

    let options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(URL, options)
        .then(data => {
            data.json();
            getUsers();
            // location.reload();
        });
}