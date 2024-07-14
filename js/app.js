// variables
const productNameInput = document.getElementById("productName");
const productCategoryInput = document.getElementById("productCategory");
const productPriceInput = document.getElementById("productPrice");
const productDescriptionInput = document.getElementById("productDescription");
const productImgInput = document.getElementById("productImg");
let productsContainer = []

// localstorage
if(localStorage.getItem("allProducts") != null){
    productsContainer= JSON.parse(localStorage.getItem("allProducts"))
    displayProducts()
}

// function add
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

// function display
function displayProducts() {
    let cartona = ""
    for(let i=0;i<productsContainer.length;i++){
        cartona +=`
        <div class="col-md-3">
                <div class="product-img">
                    <img src="images/1.png" alt="">
                </div>
                <div class="content">
                    <h5>${productsContainer[i].category}</h5>
                    <h6>${productsContainer[i].name}</h6>
                    <span>Price: ${productsContainer[i].price} EGP</span>
                    <p>${productsContainer[i].descriotion}</p>
                </div>
                <button onClick="deleteProduct(${i})" class="btn btn-outline-danger w-100 my-2">Delete</button>
                <button onClick="setValues(${i})"  class="btn btn-outline-success w-100 my-2">Update</button>
        </div>
        `
    }
    document.querySelector(".row").innerHTML = cartona
}


// function clear
function clearProduct(){
    productNameInput.value = ""
    productCategoryInput.value=""
    productPriceInput.value=""
    productDescriptionInput.value=""
}

// function delete

function deleteProduct(index){
    productsContainer.splice(index ,1)
    localStorage.setItem("allProducts" , JSON.stringify(productsContainer) )
    displayProducts()
}

let supperIndex ;

function setValues(index){
    supperIndex = index
    document.getElementById("updateButton").style.display = "block"
    document.getElementById("addBtn").style.display = "none"
    productNameInput.value = productsContainer[index].name
    productCategoryInput.value = productsContainer[index].category
    productPriceInput.value = productsContainer[index].price
    productDescriptionInput.value = productsContainer[index].descriotion
}

// function updateing
function updateProducrt(){
    document.getElementById("updateButton").style.display = "none"
    document.getElementById("addBtn").style.display = "block"
    productsContainer[supperIndex].name =  productNameInput.value 
    productsContainer[supperIndex].category = productCategoryInput.value
    productsContainer[supperIndex].price = productPriceInput.value
    productsContainer[supperIndex].descriotion = productDescriptionInput.value
    localStorage.setItem("allProducts" , JSON.stringify(productsContainer) )
    displayProducts()
    clearProduct()
}

// functin search
function search(inputValue) {
    let cartona =""
    for(let i= 0 ; i < productsContainer.length ; i++){
        if(productsContainer[i].name.toLowerCase().includes(inputValue.toLowerCase())){
            cartona +=`
            <div class="col-md-3">
                <div class="product-img">
                    <img src="images/1.png" alt="">
                </div>
                <div class="content">
                    <h5>${productsContainer[i].category}</h5>
                    <h6>${productsContainer[i].name.replace(inputValue , `<span>${inputValue}</span>`)}</h6>
                    <span>Price: ${productsContainer[i].price} EGP</span>
                    <p>${productsContainer[i].descriotion}</p>
                </div>
                <button onClick="deleteProduct(${i})" class="btn btn-outline-danger w-100 my-2">Delete</button>
                <button onClick="setValues(${i})"  class="btn btn-outline-success w-100 my-2">Update</button>
             </div>
            `
        }
    }
    document.querySelector(".row").innerHTML = cartona
}