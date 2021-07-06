// let myArray = [5, 6, 7, 8, 9, 10];

// for(let i of myArray) {
//     console.log(i);
// }

// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// //map

// myArray.map(function(item, index, arr){
//     console.log('item :', item);
//     console.log('index :',index);
//     console.log('arr :', arr);
// });

// reduce

// let myArray = [5, 6, 7, 8, 9, 10];

// let result = myArray = myArray.reduce(function(prev, next, index, arr) {
//     return prev + next;
// }, 0);

// console.log(result);

// 1. prev = 0; next = 5; index = 0; arr = [5, 6, 7, 8, 9, 10];
// 2. prev = 5; next = 6;  index = 1; arr = [5, 6, 7, 8, 9, 10];
// 3. prev = 11; next = 7; index = 2; arr = [5, 6, 7, 8, 9, 10];
// 4. prev = 18; next = 8; index = 3; arr = [5, 6, 7, 8, 9, 10];
// 5. prev = 26; next = 9; index = 4; arr = [5, 6, 7, 8, 9, 10];
// 6. prev = 35; next = 10; index = 5; arr = [5, 6, 7, 8, 9, 10];

// let myArray = [-1, 2, 3, -5, -6, 8];

// let result = myArray.reduce(function(prev, item){
//     if(item > 0) {
//         return prev + item;
//     } else {
//         return prev;
//     }
// }, 0);

// console.log(result);

//forEach

let myArray = [5, 6, 7, 8, 9, 10];
let sum = 0;

myArray.forEach(function(item, index, arr){
    sum += item;
});

console.log(sum);