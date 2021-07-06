// const data = { a: 1, b: 2, c: 3 };

// function without(obj, ...args) {
//     const newObj = {...obj};

//     args.forEach(function (elem) {
//         delete newObj[elem];
//     });

//     return newObj;
// }

// console.log(without(data, 'b', 'c'));

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(function(response) {
    return response.json();
})

.then(function(data) {
    console.log(data)
})