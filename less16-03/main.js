/***** Удаление *****/

/*let user = {
	name: `Anton`,
	age: 45
}

console.log(user);

delete user.age;

console.log(user);*/

// Именование свойств

/*let obj = {
	return:5
}

console.log(obj);*/

// Квадратные скопки

/*let result = prompt('Что надо?')

let myCar = {
	type: 'Mersedes',
	model: 'w140',
	color: 'black',
	'color salon': 'white'
}

alert(myCar[result]);

let key = 'color'

console.log(`${myCar} + ${key}`);

console.log(myCar[key]);*/

// Проверка свойств

//1 способ
/*let user = {born: undefined};

console.log(user.born);
console.log(user.born === undefined); //true

let user1 = { 
	name: 'Ulan',
	age: 77
}
alert('name' in user1);	  //true
alert('surname' in user1);*/ //false

/***** Вложенные объекты *****/

let users = {
	Anton:{
		age:55,
		salary:5000,
		adress:'Bishkek'
	},

	Ivan:{
		age:45,
		salary:3000,
		adress:'NewYork'
	}
}

console.log(users.Anton.age, users.Ivan.age);
console.log(users.Ivan.adress);

let user = {
	Salaries:35000
}

let result = prompt('Имя сотрудника?');

if(result == 'Алексей'){
	alert(`Сотрудник Алексей получает ${user.Salaries} сомов.`)
}