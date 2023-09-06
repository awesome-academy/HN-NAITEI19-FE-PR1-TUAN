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
                    <div class = "col-4 p-2 product-container">
                        <div class="card card__container card__container--small">
                            <div class="card__container__img">
                                <img class="card-img" src="${product.imgSrc}" alt="" />
                            </div>
                            <div class="card-body card__container__body">
                                <div class="row d-flex flex-column justify-content-center">
                                    <div class="card__container__name">${product.title}</div>
                                    <div class="horizontal-Product-rate"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>
                                    <div class="card__container__price  d-flex flex-row justify-content-around pt-4">
                                        <div class="card__container__price--sale text-danger">${product.prevPrice} đ </div>
                                        <div class="card__container__price--real">${product.curPrice} đ</div>
                                    </div>
                                    <div class="product-buttons">
                                    <a href="#" class="buy-button">Buy</a>
                                    <a href="#" class="review-button">Review</a>
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
};
function getIdProduct(){
// Add an event listener to the product list container
const productListContainer = document.querySelector(".product-container");
console.log(productListContainer)
productListContainer.addEventListener("click", function (event) {
    // Check if the clicked element has the class "buy-button" or "review-button"
    if (event.target.classList.contains("buy-button") || event.target.classList.contains("review-button")) {
        // Get the product ID from the data-product-id attribute
        const productId = event.target.getAttribute("data-product-id");
        
        // Now you have the productId, you can use it as needed
        console.log("Clicked product ID:", productId);
    }
});

}

function filterProduct(){

}
function paginationProduct(){

}
function sortProduct(){

}

const productList = document.querySelector('.list')
const searchInput = document.querySelector('.search__input')
const listViewButton = document.querySelector('.list-view-button');
const productContainer = document.querySelector('.product-container')
const gridViewButton = document.querySelector('.grid-view-button');
function searchProduct(val){
    const productList = document.querySelector('.list')
    if(val){

        fetch("http://localhost:3000/products?title="+val)
        .then((response) => response.json())
        .then((data) => {
        productList.innerHTML = "";
        // Handle the filtered data here
        console.log("Filtered data:", data);
        
        data
        .forEach((product) => { 
            // Create a new list item for each product
            productList.innerHTML += `
            <div class = "col-4 p-2 product-container">
            <div class="card card__container card__container--small">
            <div class="card__container__img">
            <img class="card-img" src="${product.imgSrc}" alt="" />
            </div>
            <div class="card-body card__container__body">
            <div class="row d-flex flex-column justify-content-center">
                          <div class="card__container__name">${product.title}</div>
                          <div class="horizontal-Product-rate"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>
                          <div class="card__container__price  d-flex flex-row justify-content-around pt-4">
                              <div class="card__container__price--sale text-danger">${product.prevPrice} đ </div>
                              <div class="card__container__price--real">${product.curPrice} đ</div>
                          </div>
                          <div class="product-buttons">
                          <a href="#" class="buy-button">Buy</a>
                          <a href="#" class="review-button">Review</a>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
          `;
      }
      )
    })
    .catch((error) => {
        console.error("Error searching data:", error);
        product.innerHTML = "";
        productList.innerHTML += `
        <div class = "col-4 p-2 product-container">
        <h1>No data</h1>
        </div>
        `
    });
} else {
    renderData(productList,12)

}
    

}
function star(){
    this.renderData(productList,12);
    getIdProduct()
}
star();

listViewButton.onclick = function () {
  productList.classList.remove('grid-view-filter');
  productList.classList.add('list-view-filter');
  
}

gridViewButton.onclick = function () {
  productList.classList.remove('list-view-filter');
  productList.classList.add('grid-view-filter');
}