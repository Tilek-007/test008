const url = 'https://app.megacom.kg:9090/test-app/api/v1/product/all';

let options = {
    mode: 'no-cors'
}

fetch(url, options)
.then(response => response.json())
.then(data => console.log(data));