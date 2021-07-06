/*let userSalaries = {
	Jhon:40000,
	Mike:35000,
	Daniel:100000
}

let nameUser = prompt('Имя сотрудника', 'Jhon');

let result = `Сотрудник ${nameUser} получает ${userSalaries[nameUser]} сомов.`;

alert(result);*/


let name = prompt('Имя сотрудника', 'Jhon');
let result1 = `${userSalaries + name}`;


let userSalaries = {
	Jhon:40000,
	Mike:35000,
	Daniel:100000
}

let nameUser = prompt('Имя сотрудника', 'Jhon');

let result = `Сотрудник ${nameUser} получает ${userSalaries[nameUser]} сомов.`;

if(nameUser === null || nameUser === ''){
	alert('такого сотрудника не существует');
} else{
	alert(result);
}