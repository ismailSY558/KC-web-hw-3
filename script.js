let basket = JSON.parse(localStorage.getItem("data")) || [];

let shop = document.getElementById("shop");

watches.forEach((watch) => {
  let search = basket.find((x) => x.id === watch.id) || [];
  shop.innerHTML += `<div id=product-id-${watch.id}  class="product-card">
    <img src="${watch.img}" id="img"/>
    <div class="information">
    <h3 class="center">${watch.name}</h3>
    <h4 class="center">${watch.price} K.D </h4> 
    </div>
    <div class="buttons">
      <i onclick="decrement(${watch.id})" class="bi bi-dash-lg"></i>
      <div id=${watch.id} class="quantity">
      ${search.item === undefined ? 0 : search.item}
      </div>
      <i onclick="increment(${watch.id})" class="bi bi-plus-lg"></i>
    </div>
    

  </div>`;
});

let increment = (watch, id) => {
  let selectedItem = watch.id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (watch, id) => {
  let selectedItem = watch.id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  // console.log(basket);
  update(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
