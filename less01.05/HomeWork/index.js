let saveBtn = document.getElementById('save');
let clearBtn = document.getElementById('clear');
let num = 0;

saveBtn.onclick = function () {
    let plans = document.getElementById('plan').value;
    localStorage.setItem('plan', JSON.stringify(plans));

    let divRoot = document.getElementById('root');
    let result = localStorage.getItem('plan');
    let li = document.createElement('li');
    ++num;
    li.prepend(divRoot);
    li.textContent = `${num}. ${result}`;
    
    //divRoot.prepend(`${num}. ${result} `);

}

clearBtn.onclick = function () {
    localStorage.clear();
}