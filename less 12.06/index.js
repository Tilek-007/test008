const URL = "http://localhost:3333/users";
let saveBtn = document.querySelector('#save-btn');
let editBtn = document.querySelector('#edit-btn');
let searchBtn = document.querySelector('#search-btn');
let id;

searchBtn.onclick = function() {
	let name = document.querySelector('#s_name');
	let surname = document.querySelector('#s_surname');
	let params;

	if(!name.value && !surname.value) {
		alert('Хотя бы одно поле должно быть заполнено');
		return;
	}


	// name.value - если не пустая
	// surname.value - елси пустая
	if(name.value && !surname.value) {
		params = `?name=${name.value}`
	}
	else if(!name.value && surname.value) {
		params = `?surname=${surname.value}`
	}
	else {
		params = `?surname=${surname.value}&name=${name.value}`
	};

	const url = `${URL}${params}`;

	fetch(url)
	.then(response => response .json())
	.then(data => showUsers(data))
}

saveBtn.onclick = function(){
	let formElements = document.querySelectorAll('#add-form input');
	let data = {};

	formElements.forEach((item) => {
		data[item.id] = item.value;


	})

	let options = {
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		}, 
		body:JSON.stringify(data)
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
editBtn.onclick = function(){
	let editUrl = `${URL}/${id}`;
	let elements = document.querySelectorAll('#edit-form input');
	let data = {};

	elements.forEach((elem) => {
		data[elem.name] = elem.value;
	})

	let options = {
		method:"PATCH",
		headers:{
			"Content-Type":"application/json"
		}, 
		body:JSON.stringify(data)
	}

	fetch(editUrl, options)
	.then(response => response.json())
	.then(data => getUsers())

	// {name:Ulan 2, surname: Jumabaev, email: admin@gmail.com}
}

let deleteUser = () => {
	let id = event.currentTarget.dataset.id;
 

	let options = {
		method:"DELETE"
	}

	fetch(`${URL}/${id}`, options)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		getUsers();
	})

}

let getUserById = (id) => {
		const url = `http://localhost:3333/users/${id}`;
		let userData 

		fetch(url)
		.then(response => response.json())
		.then(data => userData = data)

		return   userData;
}


let editUser = () => {
		id = event.currentTarget.dataset.identificator;

		const url = `http://localhost:3333/users/${id}`;

		fetch(url)
		.then(response => response.json())
		.then(data => {
			document.querySelector('#edit-name').value = data.name;
			document.querySelector('#edit-surname').value = data.surname;
			document.querySelector('#edit-email').value = data.email;
		})
}




let showUsers = (data) => {
	let bodyTable = document.querySelector('#body-table');
	let tr = ''; 

	data.forEach((item) =>{
		tr+= `
		<tr>
			<td>${item.id}</td>
			<td>${item.name}</td>
			<td>${item.surname}</td>
			<td>${item.email}</td>
			<td>
			<button data-id="${item.id}" class="btn btn-danger delete-btn">delete</button>
			<button class="btn btn-info edit-btn" data-identificator="${item.id}" data-bs-toggle="modal" data-bs-target="#edit-modal">Редактировать</button>
			</td>
		</tr>
		`
	})

	bodyTable.innerHTML = tr;

	let deleteBtns = document.querySelectorAll('.delete-btn');
	let editModalBtns = document.querySelectorAll('.edit-btn');

	deleteBtns.forEach((item) => {
		item.onclick = deleteUser;
	})

	editModalBtns.forEach((item) => {
		item.onclick = editUser;
	})


}

getUsers();




// function myFunction() {

//   input = document.getElementById("search");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("block");
//   li = ul.getElementsByTagName("li");

//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }