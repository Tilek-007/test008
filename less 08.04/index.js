// let count = 0;

// function showMessage(){
//     count++;
//     console.log('Hello, world');
//     if(count === 5){
//     clearInterval(timerId);
//     console.log('Done');
//     }
// }

// let timerId = setInterval(showMessage, 1000);

// ******* Операторы REST ********

// function showSum(first, second,...array){

//     console.log(first);
//     console.log(second);

//     let sum = 0;
//     for(let arg of array){
//         sum += arg; // sum = sum + arg;
//     }
//     return sum;
//     //console.log(array);
// }

// let result = showSum(1, 2, 3, 4, 5, 6);

// console.log(result);

// function showTitles(firstName, lastName, ...titles){
//     let result = firstName + ' ' + lastName;
//     return titles[0] + ' ' + titles[1];
// }

// let result = showTitles('Tilek', 'Daniel', 'Hello', 'Javascript');
// console.log(result);

function num (txt, txt2, ...nums){
    console.log(txt);
    console.log(txt2);
    for(let i = 0; i < nums.length, i++) {
        let result += nums[i];
    }
    console.log(result);
}

num('abs', '5',1, 2, 3, 4, 5, 45);