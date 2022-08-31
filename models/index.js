// Home models
function renderProductHome(arrProduct) {
  var html = "";
  for (var i = 0; i < arrProduct.length; i++) {
    var prod = arrProduct[i];
    html += `
      <div class="col">
      <div class="card h-100">
        <img src=${prod.image} alt=${prod.alias} />
        <div class="card-body">
          <h5 class="card-title fw-bold">${prod.name}</h5>
          <p class="card-text">${prod.shortDescription}</p>
        </div>
        <div class="card-body2">
           <a href="./views/layouts/detail.html?productid=${prod.id}" class="btn">Buy now</a>
           <span class="price">${prod.price}$</span>
         </div>
        </div>
    </div>
            `;
  }
  document.querySelector("#renderProdApi").innerHTML = html;
}

// Detail models
function renderProductDetail(arrProduct) {
  var prod = arrProduct;
  var html = `
    <div class="col-5">
    <img src=${prod.image} alt=${prod.alias}} />
  </div>
  <div class="col-7">
    <h2>${prod.name}</h2>
    <p class="product-desc">
     ${prod.description}
    </p>
    <p class="size-text">Available Size</p>
    <div class="size">
    ${Array(7)
      .join(0)
      .split(0)
      .map(
        (item, i) => `
    <a href="#">${prod.size[i]}</a>
  `
      )
      .join("")}
    </div>
    <p class="price">${prod.price}$</p>
    <p class="number">
      <button>+</button>
      <span>1</span>
      <button>-</button>
    </p>
    <div class="addToCart">
      <button>Add to cart</button>
    </div>
  </div>
            `;
  document.querySelector("#renderProdDetail").innerHTML = html;
}
