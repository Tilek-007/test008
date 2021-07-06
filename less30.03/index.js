// don't yourself - не повторяйся

/*

Виды функции

1.function decloration
2.function expression
3.arrow function

*/

// 1.function decloration
/*function showMessage(){
	document.write('Функция в JavaScript');
}

showMessage();*/

// 2.function expression

/*let showMessage = function() {
	document.write('Функция в Javascript')
}

showMessage();*/



// Параметры функции

/*function display(x, y){
	let result = x * x;
	let result2 = y * y;
	console.log(result);
	console.log(result2);
}

display(5, 6);*/

/*function display(x, y){
	if(x === undefined) {
		x = 5;
	}

	if(y === undefined) {
		y = 10;
	}

	let result = y * x;

	console.log(result);
}

display();*/

/*function display(x = 5, y = 10) {
	let z = x * y;
	console.log(z);
}

display();
display(6);
display(6, 4);*/

// Arguments

/*function display(){
	let z = 1;

	console.log(arguments)

	for(let i = 0; i < arguments.length; i++){
		console.log(arguments[i]);
	}
}

let result = display(1, 2, 3, 4, 'hello');

console.log(result);*/

// Результат функции
/*function calcD(){
	return 5;
}

let result = calcD();

console.log(result);*/

// 1

