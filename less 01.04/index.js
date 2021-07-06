//1 

/*function setMean(x, y){

	return (x < y) ? x : y;*/
	/*if(x < y){
		return x;
	} else {
		return y;
	}*/
/*}

function showValue(txt){
	alert(txt);
}*/

/*let result = setMean(5, 10);
showValue(result);*/

/*showValue(setMean(234, 1));*/


/* ****** Область видимости переменных: Глобальные и локальные ****** */

/*function showNum(x){
   return x*x*x;
}
let result = showNum(2);
document.write(result);

//2

function getName(name){
    if(name === undefined){
        return 'Привет, гость';     
    }
    return `Привет, ${name}`;

}
let name1 = getName();

function showName(){
    document.write(name1);
}
showName();*/

//3

/*function mul(n,m){
	return n*m;
}
 let Num = mul(2, 4);
 document.write(Num);
*/
//4

let arr1 = [1, 2, 3];
let arr2 = [4, 1, 1, 1, 4];
let arr3 = [2, 2, 2, 2, 2, 2];
let arr4 = [];

function showNum(){
	for(i of arr1){
		let result = arr1[i] * 2;
		arr4.push(result);
	}

	return arr4;
	console.log(arr4);
}

//(`example#1 [${arr1}] >= [${arr4}]`);
showNum(arr1);