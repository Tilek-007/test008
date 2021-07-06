let myBtn = document.querySelector('#my-btn');

myBtn.onclick = function () {
    let input = document.querySelector('#exampleFormControlInput1');
    let textArea = document.querySelector('#exampleFormControlTextarea1');
    let select = document.querySelector('#my-select');

    let newOption = new Option('Кара-балта', 'kb', true, true);
    select.append(newOption);

    console.log(select.selectedIndex);
}