const URL = 'http://localhost:3333/users';
let editId;

let editName = document.querySelector('#edit-name');
let editSurname = document.querySelector('#edit-surname');
let editEmail = document.querySelector('#edit-email');

// let btn = document.getElementById('addBtn');

// btn.onclick = function () {
//     let name = document.getElementById('name').value;
//     let surname = document.getElementById('surName').value;
//     let email = document.getElementById('email').value;

//     let data = {
//         name,
//         surname,
//         email
//     };

//     let options = {
//         method: "POST",
//         headers: {
//             "Content-Type": 'application/json'
//         },
//         body: JSON.stringify(data)
//     };

//     fetch(URL, options)
//         .then(data => {
//             data.json();
//             getUsers();
//             // location.reload();
//         });
// }

let saveBtn = document.querySelector('#save-btn');

saveBtn.onclick = function () {
    let formElements = document.querySelectorAll('#add-form input');
    let data = {};

    formElements.forEach((item) => {
        data[item.id] = item.value;
    })

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    }

    fetch(URL, options)
        .then(response => response.json())
        .then(data => getUsers())

}

let getUsers = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => showUsers(data))
}

let deleteUser = () => {
    let id = event.target.dataset.id;

    let options = {
        "method": "DELETE"
    }

    fetch(`${URL}/${id}`, options)
        .then(response => response.json)
        .then(data => {
            console.log(data);
            getUsers();
        })
}

let getUserById = (id) => {
    const url = `http://localhost:3333/users/${id}`;
    let userData;

    fetch(url)
        .then(response => response.json())
        .then(data => userData = data)

    return userData;
}

let getUserValue = () => {
    editId = event.target.dataset.id;

    const url = `http://localhost:3333/users/${editId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            editName.value = data.name;
            editSurname.value = data.surname;
            editEmail.value = data.email;
        })


}

let editUser = () => {
    let data = {};
    data[editName.name] = editName.value;
    data[editSurname.name] = editSurname.value;
    data[editEmail.name] = editEmail.value;

    let options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    }
    const url = `http://localhost:3333/users/${editId}`;

    fetch(url, options)
        .then(response => response.json())
        .then(data => showUsers(data));
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
                <td>
                    <button data-id="${item.id}" class="btn btn-danger delete-btn">Удалить</button>
                    <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#edit-modal" data-id=${item.id}>Open modal for @mdo</button>
                </td>
            </tr>`
    })

    bodyTable.innerHTML = tr;

    let deleteBtns = document.querySelectorAll('.delete-btn');
    let editBtns = document.querySelectorAll('.edit-btn');

    let newSave = document.getElementById('edit-btn');

    newSave.onclick = editUser;

    deleteBtns.forEach((item) => {
        item.onclick = deleteUser;
    })

    editBtns.forEach((item) => {
        item.onclick = getUserValue;
    });

}

getUsers();