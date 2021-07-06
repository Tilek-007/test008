/************* Методы **************/

//push - добавляет элемент в конец массива
/*let numbers = [1, 2, 3, 4];
numbers.push('hello', 'world',);
console.log(numbers);*/

//pop - удалет элемент из конца массива и его возвращает

/*let numbers = [1, 2, 3, 4];
let result = numbers.pop();

console.log(numbers); //1,2,3
console.log(result);*/ //4

// shift - улаляет элемент в начале массива и его возвращает

/*let numbers = [1, 2, 3, 4];
let result = numbers.shift();

console.log(numbers); //2,3,4
console.log(result);*/  //1

// unshift - добавляет в начало массива элементы

/*let numbers = [1, 2, 3, 4];
numbers.unshift(44,33,22);

 console.log(numbers);*/


/* ************ Циклы ************ */

/*let i;

for (i = 0; i < 3; i++) {
	console.log(i);
}

//начало цикла - выполняется один раз
i = 0;

//1
if(i < 3) { //i=0
	console.log(i);
	i++;
}

//2
if(i < 3) { //1
	console.log(i); //1
	i++;
}

//3
if(i < 3) { //2
	console.log(i); //2
	i++;
}

//4
if(i < 3) { //3
	console.log(i); //3
	i++;
}*/

/*let numbers = ['Kyrgyzstan', 'Kazahstan', 'russa'];

let i;

for(i = 0; i < numbers.length; i++){
	console.log(numbers[i]);
}

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);*/



// for in

let usersSalaries = {
	John:500,
	Adil:800,
	Daniel:1000
}

for(let index in usersSalaries){
	console.log(usersSalaries[index]);
}

index = 'John';
index = 'Adil';
index = 'Daniel';