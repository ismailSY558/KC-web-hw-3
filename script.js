let watches = [
  {
    img: "./images/watch1.jpeg",
    name: "code:watch",
    price: "30 k.d",
  },
  {
    img: "./images/watch2.jpeg",
    name: "code:watch",
    price: "40 k.d",
  },
  {
    img: "./images/watch3.jpeg",
    name: "code:watch",
    price: "50 k.d",
  },
];

let div = document.getElementById("Products");

watches.forEach((watch) => {
  div.innerHTML += `<div class="product-card">
    <img src="${watch.img}" id="img"/>
    <h3 class="center">${watch.name}</h3>
    <h4 class="center">${watch.price}</h4> 
    

    </div>`;
});
