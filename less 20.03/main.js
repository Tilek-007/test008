/*let userSalaries = {
	Jhon:40000,
	Mike:35000,
	Daniel:100000
}

let nameUser = prompt('Имя сотрудника');

if(nameUser in userSalaries){

	let result = `Сотрудник ${nameUser} получает ${userSalaries[nameUser]} сомов`;
	alert(result);
} else{
	let newUserName = prompt('Добавить данного сотрудника', nameUser);
	let newUserSalary = +prompt(`Заработная плата ${newUserName}`);

	userSalaries[newUserName] = newUserSalary;

	console.log(userSalaries);
	console.log(userSalaries['Daniel'] + userSalaries[newUserName]);
}*/

/*********** Массивы ************/

/*let countries = ['Kyrgyzstan', 'Russia', 'Japon', 'Spain', 'Brazil'];

console.log(countries[2]);*/

//length - длину массива (Ключ последнего элемента +1)

/*console.log(countries.length);

let users = [
	true, 
	{
	Jhon:40000,
	Mike:35000,
	Daniel:100000
}, 'hello'
];

console.log(users[1].Mike);*/

//Многомерные массивы

/*let arr = [[1,2,3], [4,5,6], [7,8,9]];

console.log(arr[1][2]);

let asd = [4,5,6];
console.log(asd[2]);*/

// Методы для работы с массивами

//push - добавляет в конец массива элемент

let countries = ['Kyrgyzstan', 'Russia', 'Japon', 'Spain', 'Brazil'];

countries[countries.length] = 'USA';

console.log(countries);