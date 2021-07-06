var data = [
    {
      "title": "Daniel",
      "desk": "Iphone",
      "status": "Active",
      "id": 2
    },
    {
      "title": "Tilek",
      "desk": "Iphone",
      "status": "Active",
      "id": 3
    },
    {
      "title": "mmm",
      "desk": "Iphone",
      "status": "Active",
      "id": 4
    }
  ]

 let template = document.querySelector('#template').innerHTML;

let compiledTemplate = Handlebars.compile(template);

let finishTemplate = compiledTemplate(data);

document.querySelector('#root').innerHTML = finishTemplate;