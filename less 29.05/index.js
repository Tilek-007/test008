let btn = document.querySelector('#form-btn');

btn.onclick = function() {
    const url = 'https://reqres.in/api/users';

    // let email = document.querySelector('#exampleInputEmail1').value;
    // let password = document.querySelector('#exampleInputPassword1').value; 
    // let data = { email, password }; 

    // console.log(data);

    // let options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }

    fetch(url)
    .then(response => {
        
        if(!response.ok) {
            alert('Запрос не выполнен');
        } else{ 
            return response.json();
        }
    })
    .then(data => {
       console.log(data.data);
        for(let i of data.data){
            let img = document.createElement('img');
            let div = document.createElement('div');
            btn.after(div);
            div.classList.add('d-flex','flex-column')
            
            img.setAttribute('src', i.avatar);
            
            div.after(img);
            img.after(`${i.first_name} ${i.last_name} ${i.email}`);
        };
    })
}