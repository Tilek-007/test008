const URL = 'http://localhost:3333/users';

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

let  saveBtn = document.querySelector('#save-btn');

saveBtn.onclick = function() {
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
        "method" : "DELETE"
    }

    fetch(`${URL}/${id}`, options)
    .then(response => response.json)
    .then(data => {
        console.log(data);
        getUsers();
    })
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
                    <button class="btn btn-info edit-btn">Редактировать</button>
                </td>
            </tr>`
    })

    bodyTable.innerHTML = tr;

    let deleteBtns = document.querySelectorAll('.delete-btn');

    deleteBtns.forEach((item) => {
        item.onclick = deleteUser;
    })

    // let editBtns = document.querySelectorAll('.edit-btn');

    // editBtns.forEach((item) => {
    //     item.onclick = editUser;
    // })

}

getUsers();