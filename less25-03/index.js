/* for of */

/* let users = ['admin', 'manager', 'director'];

 for(let value of users){
 	console.log(value);
 }

for(let key in users){
	console.log(key);
}*/

//1
 //value = 'admin';

 //2
 //value = 'manager';

 //3
 //value = 'director';

/* while */

/*let obl = ['Osh', 'Bishkek', 'Naryn', 'Batken'];
let index = 0;

while(index < obl.length){
	console.log(obl[index]);
	index++;
}*/

/* break */

/*let numbers = [1,2,3,4,5,12,15,17,6,7];

for(let i = 0; i < numbers.length; i++){
	if(numbers[i] > 10){
		break;
	}

	console.log(numbers[i]);
}*/

/* continue */

/*let numbers = [1,2,3,4,5,12,15,17,6,7];

for(let i = 0; i < numbers.length; i++){
	if(numbers[i] > 10){
		continue;
	}

	console.log(numbers[i]);
}*/
//let i;

/*for(let i = 0; i < 5; i++){
	console.log(i);
}

alert(i);*/

/*for(let i = 1; i <= 9; i++){
	console.log(i + ' * 5 = ' + i * 5);
}*/

let i;
let b;
let sum;

for (i=2; i<=10; i++){
	console.log(`Число ${i}`)
	for (b=1; b<=10; b++){
		sum=i*b;
		console.log(`${i}*${b}=${sum}`);
	}
}