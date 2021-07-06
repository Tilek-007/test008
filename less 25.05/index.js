// function without (data, ...elems) {
//     let newArr = data.filter(function(item) {
//         if(item !== elems[0] && item !== elems[1]) {
//             return item;
//         }
//     });
//     return newArr;
// }

// const data = [1, 2, 3, 1, 2,];

// let result = without(data, 1, 2); // [3];

// console.log(result);

// function without (data, ...elems) {
//     let newArr = data.filter(function(item) {
//         for(let i = 0; i < data.length; i++) {
//             if (item > elems[0], item > elems[1]) {
//                 return item;
//             }
//         }
//     });
//     console.log(newArr);
// }

// without(data, 1, 2);

// function without (data, ...arr) {

// }


const without = ((...rest) => {
    let newObj = {};

    delete rest[0].b;
    delete rest[0].c;


    newObj = {
        ...rest[0]
    };


    return newObj;

});
const data = {
    a: 1,
    b: 2,
    c: 3,
};
console.log(without(data, 'b', 'c'));


// 1

// let data = [1, 2, 564, 1, 2];

// function without (data, ...arr) {
//     return data.filter(x => !arr.includes(x))
// }
// console.log(without(data, 1, 2));