// 1
/*let arr = [];
for(let i = 0; i<10;i++){
	arr[i]='x';
	console.log(arr[i]);
}
*/

// 2

/*let arr = [1,2,3,4,5,13,43,23,6,7,8];
for(i=0;i<arr.length;i++){
	if(arr[i]>0 && arr[i]<10){
		console.log(arr[i]);
	}
}*/

// 3

/*let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];

for(i=0;i<arr.length;i++){
	if(arr[i]%2 === 0){
		result.push(arr[i]);
	}
}

console.log(result);*/

// 4

/*let arr = [1, 2, 4, 6, 5, 3, 8, 7, 10, 9];
let	sum = 0;

for(let number of arr){
	sum += number * number;
}

console.log(sum);*/

// 5

let arr= [2, 3, 4, 5, 6, 7];
let sum = 1;
let object = {};

for(let i=0;i<arr.length;i++){
	object.result = sum*=arr[i];
	
}

console.log(object);