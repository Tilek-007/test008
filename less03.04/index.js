/*function setArray(arr){
	let result;
	let newArray = [];
	for(let i = 0; i < arr.length; i++){
		result = arr[i] * 2;
		newArray.push(result);
	}
	return newArray;
}

let result = setArray([1,2,3]);
console.log(result);*/


/*1) function declaration
2) function expression
3) arrow function*/

/* ********** Стрелочные функции *********** */

/*let sum = (x, y) => {
	let result = x + y;
	return result;
}
sum(5, 5);*/

let arr = (x, y) => {
	let result = (x < y) ? x : y;
	return result;
}

function showValue(txt){
	alert(txt);
}

showValue(arr(99, 5));