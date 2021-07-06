let f = document.querySelector('input[type=text]');

f.onchange = function() {
    console.log('change: ', this.value);
}

// f.oninput = function () {
//     console.log(this.value);
// }

// f.onfocus = function () {
//     this.style.border = '1px solid red';
// }

// f.onblur = function() {
//     console.log('blur: ', this.value);
// }

f.onselect = function () {
    alert('Вы выделили текст');
}