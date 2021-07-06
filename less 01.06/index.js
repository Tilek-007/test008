const url = 'http://localhost:3333/users';

fetch(url)
.then(response => response.json())
.then(data => console.log(data))