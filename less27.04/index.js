let btn = document.getElementById('createBtn');

btn.onclick = function() {
    let p = document.createElement('p');
    let h1 = document.createElement('h1');

    h1.textContent = 'Hello';
    h1.className = 'bg-primary';
    p.textContent = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta minima quae quas alias molestias rerum aliquid amet id odio expedita, assumenda, libero quia dolor ea impedit consequatur molestiae sunt.';
    document.getElementById('root').append(h1, p);
}