
 let template = document.querySelector("body > div:nth-child(2)");
 console.log(template);



 
//   function getProducts() {
//     const url = 'http://localhost:3333/products';

//     fetch(url)
//     .then(response => response.json())
//     .then(data => showProducts(data))
//   }
//  getProducts();
//   function showProducts(data) {

//     let template = document.querySelector('#product-card').innerHTML;
//     let compiledTemplate = Handlebars.compile(template);
//     let finishTemplate = compiledTemplate(data);

//     document.querySelector('#root').innerHTML = finishTemplate;

//     let addBtns = document.querySelectorAll('.add-cart');
//     console.log(addBtns);

//     addBtns.forEach(item => {
//       item.onclick = addCart;
//     })

//   }

//   function addCart() {
//     let id = event.target.dataset.id;
//     console.log(id);
//   }