
let cart = {}; 
function getProducts(){ 
  const url = "http://localhost:3333/products" 
 
  fetch(url) 
  .then(response => response.json()) 
  .then(data => showProducts(data)) 
} 
getProducts(); 
 
function showProducts(data){ 
 
  let template = document.querySelector('#product-card').innerHTML; 
  let compiledTemplate = Handlebars.compile(template); 
  let finishTemplate = compiledTemplate(data); 
  document.querySelector('#root').innerHTML = finishTemplate; 
  let addBtns = document.querySelectorAll('.add-cart'); 
   
  addBtns.forEach(item => { 
    item.onclick = addCart; 
  }) 
} 
 
function addCart(e){ 
  let id = e.target.dataset.id; 
  let name = e.target.dataset.name; 
  let price = e.target.dataset.price; 
//   cart[id] = {name, price, count:++c} 

if(cart[id]) {
    cart[id].count++;
} else {
    cart[id] = {name, price, count:1}
}

    setStorage();
}

function setStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}