
// Include common header
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Include common footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
  function renderData( element, maxProductId) {
    // Iterate through your data and create HTML elements to display it
    fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => {      
            // Clear previous content
            element.innerHTML = "";
            console.log(data)
            data
                .filter((products) => products.id <= maxProductId)
                .forEach((product) => {

                
                    // Create a new list item for each product
                    element.innerHTML += `
                    <div class = "col-4 p-2"
                        <div class="card card__container card__container--small">
                            <div class="card__container__img">
                                <img class="card-img" src="${product.imgSrc}" alt="" />
                            </div>
                            <div class="card__container__body">
                                <div class="row d-flex flex-column justify-content-center">
                                    <div class="card__container__name">${product.title}</div>
                                    <div class="horizontal-Product-rate"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>
                                    <div class="card__container__price  d-flex flex-row">
                                        <div class="card__container__price--sale text-danger">${product.prevPrice} đ </div>
                                        <div class="card__container__price--real">${product.curPrice} đ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    `;
                });
        })
        .catch((error) => {
            console.error("Error loading data:", error);
        });

    // Append the listContainer to your element
    // element.appendChild(listContainer);
}
const productBestList = document.getElementById("product__list")
renderData(productBestList,6)
const productSaleList = document.getElementById("product__list--sale")
renderData(productSaleList,9)

