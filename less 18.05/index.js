sub.onclick = function () {
    let country = document.querySelectorAll('input[type=checkbox]:checked');
    let gender = document.querySelector('input[type=radio]:checked').value;
    let m_status = document.querySelector('#f');

    let r = m_status.options.selectedIndex;
    console.log(m_status.options[r].value);

    for (let i = 0; i < country.length; i++) {
        console.log(country[i].value);
    }
    console.log(gender);
}

