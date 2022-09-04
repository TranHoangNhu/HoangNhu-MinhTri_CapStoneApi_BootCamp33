window.onload = function () {
    async function getDataProductApi(result) {
      try {
        let result = await axios({
          url: "https://shop.cyberlearn.vn/api/Product",
          method: "GET",
          //   responseType: 'json'
        });
        renderProductHome(result.data.content);
        console.log(result.data.content);
      } catch (error) {
        console.log("error: ", error);
      }
    }
    getDataProductApi();
  }; 
  
  function renderProductHome(arrProduct) {
    let html = "";
    for (let prod of arrProduct) {
      html += `
        <div class="col">
        <div class="card h-100 card2">
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