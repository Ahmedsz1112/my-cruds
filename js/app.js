const productNameInput = document.getElementById("productName");
const productCategoryInput = document.getElementById("productCategory");
const productPriceInput = document.getElementById("productPrice");
const productDescriptionInput = document.getElementById("productDescription");
const productImgInput = document.getElementById("productImg");

let productsContainer = []


if(localStorage.getItem("allProducts") != null){
    productsContainer= JSON.parse(localStorage.getItem("allProducts"))
    displayProducts()
}


function addProduct(){
    let product = {
        name: productNameInput.value,
        category: productCategoryInput.value,
        price: productPriceInput.value,
        descriotion: productDescriptionInput.value,
        img: "images/0.png"
    }
    productsContainer.push(product)
    localStorage.setItem("allProducts" , JSON.stringify(productsContainer) )
    displayProducts()
    clearProduct()
}


function displayProducts() {
    let cartona = ""
    for(let i=0;i<productsContainer.length;i++){
        cartona +=`
        <div class="col-md-3">
                <div class="product-img">
                    <img src="images/1.png" alt="">
                </div>
                <div class="content">
                    <h6>${productsContainer[i].name}</h6>
                    <h5>${productsContainer[i].category}</h5>
                    <span>Price: ${productsContainer[i].price} EGP</span>
                    <p>${productsContainer[i].descriotion}</p>
                </div>
            </div>
        `
    }
    document.querySelector(".row").innerHTML = cartona
}

function clearProduct(){
     productNameInput.value = ""
    productCategoryInput.value=""
    productPriceInput.value=""
    productDescriptionInput.value=""
}