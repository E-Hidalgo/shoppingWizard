/* ------------ SELECT DOM ELEMENTS ------------ */

let bagItem = document.getElementById("item-container-shopping-bag")
let pages = document.querySelectorAll("[data-page]")
let indexBlock = document.getElementById("shopping-index")
let indexElements = document.querySelectorAll("[data-index]")
let mainProduct = document.getElementById("main-product")
let firstThumbnail = document.getElementById("first-thumbnail")
let secondThumbnail = document.getElementById("second-thumbnail")
let thirdThumbnail = document.getElementById("third-thumbnail")
let buyBlock = document.getElementById("buy-block")
let productMainThumbnail = document.querySelectorAll("[data-main-thumbnail]")
let productNameBlock = document.getElementById("product-name")
let price = document.getElementById("product-price")
let packageCheckbox = document.getElementById("premium-package")
let packageImage = document.getElementById("package-image")
let productsAside = document.querySelectorAll("[data-product]")
let buyBtn = document.getElementById("buy-button")
let imageAside = document.getElementById("image-aside")
let form = document.getElementById("userForm")
let freeShipping = document.getElementById("free-shipping")
let extraShipping = document.getElementById("extra-shipping")
let premiumShipping = document.getElementById("premium-shipping")
let shippingInfo = document.getElementById("shipping-info")
let deliveryDateText = document.getElementById("delivery-date-text")
let isItAGift = document.getElementById("gift-checkbox")
let giftOptions = document.getElementById("gift-options")
let summaryImage = document.getElementById("summary-image")
let summaryName = document.getElementById("summary-product-name")
let summaryPackage = document.getElementById("summary-package")
let summaryDelivery = document.getElementById("summary-delivery")
let summaryPrice = document.getElementById("summary-price")
let summaryPriceBreakdown = document.getElementById("price-breakdown")
let finishImage = document.getElementById("finish-image")
let finishButton = document.getElementById("finish-button")
let finishTimeText = document.getElementById("finish-time-text")
let backBtn = document.getElementById("back")
let clearBtn = document.getElementById("clear")
let nextBtn = document.getElementById("next")

/* ------------ EVENT LISTENERS ------------ */

productsAside.forEach((product) => {
  product.addEventListener("click", selectProduct)
})
productMainThumbnail.forEach((product) => {
  product.addEventListener("mouseenter", changeMainPicture)
})
packageCheckbox.addEventListener("click", packagePremiumSelected)
buyBtn.addEventListener("click", nextPage)
freeShipping.addEventListener("change", showShippingInfo)
extraShipping.addEventListener("change", showShippingInfo)
premiumShipping.addEventListener("change", showShippingInfo)
isItAGift.addEventListener("click", showGiftOptions)
finishButton.addEventListener("click", nextPage)
backBtn.addEventListener("click", previousPage)
clearBtn.addEventListener("click", clearForm)
nextBtn.addEventListener("click", nextPage)

/* ------------ GLOBAL VARIABLES ------------ */

let timeStart = new Date()
let timeFinish = new Date()
let currentPage = 0
let currentIndex = -1 // Variable starting in -1 to avoid first page, that being product, out of index.
let currentProduct = 1 // Variable starting in 1 because the default view includes the product 1
let productPrice = 21 // General base price for all products
let premiumPackagePrice = 9
let selectedProduct = {
  id:1,
  name:"Gradiant Amare",
  price:21,
  packagePrice: 0,
  package:"Nope, are you sure? Go back and get it!",
  deliveryPrice: 0
}

/* ------------ FUNCTIONS SECTION ------------ */

/* ------------ RECHARGE PAGE AFTER 5 MIN ------------ */

setInterval(function() {
    window.location.reload();
}, 300000); // 300000 miliseconds = 300 seconds = 5 minutes

/* ------------ CHANGE MAIN PICTURE ------------ */

function changeMainPicture() {
  let value = this.dataset.value
  mainProduct.setAttribute("src", `img/products/product${currentProduct}/product${currentProduct}-${value}.png`)
}

/* ------------ SELECT PRODUCT AND CHANGE PICTURES ------------ */

function selectProduct() {
  currentProduct = this.dataset.value
  changePictures()
  productNameBlock.innerHTML = this.dataset.name
  summaryImage.setAttribute("src", `img/products/product${currentProduct}.png`)
  finishImage.setAttribute("src", `img/products/product${currentProduct}.png`)
  selectedProduct.name = this.dataset.name
  selectedProduct.id = parseInt(this.dataset.value)
}

function changePictures() {
  mainProduct.setAttribute("src", `img/products/product${currentProduct}.png`)
  firstThumbnail.setAttribute("src", `img/products/product${currentProduct}/product${currentProduct}-1.png`)
  secondThumbnail.setAttribute("src", `img/products/product${currentProduct}/product${currentProduct}-2.png`)
  thirdThumbnail.setAttribute("src", `img/products/product${currentProduct}/product${currentProduct}-3.png`)
}

/* ------------ PRICE ------------ */

function packagePremiumSelected() {
  packageImage.classList.toggle("package-image-active")
  changePrice()
}

function changePrice() {
  if (packageCheckbox.checked === true) {
    let priceWithPackage = productPrice + premiumPackagePrice
    price.innerHTML = `${priceWithPackage}€ <span class="line-trough red-text product-price-currency">${productPrice*2}€</span>`
    selectedProduct.packagePrice = 9
    selectedProduct.package = "Yes! &#x1F609;"
  } else {
    price.innerHTML = `${productPrice}€`
    selectedProduct.packagePrice = 0
    selectedProduct.package = "Nope, are you sure? Go back and get it!"
  }
}

/* ------------ VALIDATE INPUTS ------------ */
// ? WORK IN PROGRESS

// pages[currentPage].querySelectorAll("input")

// LOCATE INPUTS IN CURRENT PAGE
// let prueba3 = pages[1].querySelectorAll("input")
// console.log(prueba3)

// function prueba5() {
//   prueba3.forEach((element) => {
//     element.setAttribute("prueba", "prueba")
//   })
// }


/* ------------ NAVIGATION ------------ */

function nextPage() {
  currentPage += 1
  currentIndex += 1
  movePage()
  navigation()
}

function previousPage() {
  currentPage -= 1
  currentIndex -= 1
  movePage()
  navigation()
}

function movePage() {
  refreshSelectedProduct()
  hidPages()
  pages[currentPage].classList.remove("display-none")
}

function hidPages() {
  pages.forEach((page) => {
    page.classList.add("display-none")
  })
}

function showBuyBlock() {
  currentPage > 0 ? buyBlock.classList.add("display-none") : buyBlock.classList.remove("display-none")
}

function showImageAside() {
  currentPage > 0 ? imageAside.classList.remove("display-none") : imageAside.classList.add("display-none")
}

function changeImageAside() { // Just for some styling
  currentPage > 2 ? imageAside.setAttribute("src", "img/resources/resource08.jpg") : imageAside.setAttribute("src", "img/resources/resource09.jpg")
}

function showBagItem() { // We display a fixed 1 in product bag in the header
  if (currentPage > 0) {
    bagItem.classList.remove("display-none")
  } else {
    bagItem.classList.add("display-none")
  }
}

function navigation() { // We use this function to navigate the site, displaying the elements or hiding them
  showIndex()
  showIndexStatus()
  showNavBtns()
  showBuyBlock()
  showImageAside()
  changeImageAside()
  showBagItem()
}

/* ------------ INDEX ------------ */

function showIndex() {
  currentPage > 0 ? indexBlock.classList.remove("hidden") : indexBlock.classList.add("hidden")
}

function showIndexStatus() {
  for (let i = 0; i < indexElements.length; i++) {
    i <= currentIndex ? indexElements[i].classList.add("activeDot") : "";
  }
  
  for (let i = 0; i < indexElements.length; i++) {
    i > currentIndex ? indexElements[i].classList.remove("activeDot") : "";
  }
}

/* ------------ NAVIGATION BUTTONS ------------ */

function showNavBtns() {
  currentPage > 0 ? backBtn.classList.remove("hidden") : backBtn.classList.add("hidden") // Show back button
  currentPage === pages.length-1 ? backBtn.classList.add("hidden") : backBtn.classList.remove("hidden")
  currentPage > 0 ? clearBtn.classList.remove("hidden") : clearBtn.classList.add("hidden") // Show clear button
  currentPage === pages.length-1 ? clearBtn.classList.add("hidden") : clearBtn.classList.remove("hidden")
  currentPage === 0 || currentPage >= pages.length-2 ? nextBtn.classList.add("hidden") : nextBtn.classList.remove("hidden") // Show next button until Summary page
}

/* ------------ CLEAR FORM BUTTON ------------ */

function clearForm() {
  form.reset()
  currentPage = 0
  currentIndex = -1
  navigation()
  movePage()
}

/* ------------ DELIVERY DATE ------------ */

function showShippingInfo() {
  let deliveryDateMin = new Date().toLocaleDateString()
  let deliveryDateMax = new Date()
  let shippingTime = parseInt(this.dataset.time)
  deliveryDateMax.setDate(deliveryDateMax.getDate() + shippingTime)
  deliveryDateMax = deliveryDateMax.toLocaleDateString()
  deliveryDateText.innerHTML = `Between <span class="bold">${deliveryDateMin}</span> and <span class="bold">${deliveryDateMax}</span>`
  shippingInfo.classList.remove("display-none")
  selectedProduct.deliveryDateMin = deliveryDateMin
  selectedProduct.deliveryDateMax = deliveryDateMax
  selectedProduct.deliveryPrice = parseFloat(this.dataset.price)
}

/* ------------ IS IT A GIFT ------------ */

function showGiftOptions() {
  giftOptions.classList.toggle("display-none")
}

/* ------------ FINISH TIME ------------ */

function finishTime() {
  timeFinish = new Date()
  finishTimeText.innerHTML = `It took you ${Math.round((((timeFinish-timeStart) % 86400000) % 3600000) / 60000)} minutes to finish your purchase`
}

/* ------------ REFRESH PRODUCT INFO IN SUMMARY ------------ */

function refreshSelectedProduct() {
  summaryName.innerHTML = selectedProduct.name
  summaryPackage.innerHTML = `<span class="bold">Premium package</span>: ${selectedProduct.package}`
  summaryDelivery.innerHTML = `<span class="bold">Estimate delivery date</span>: between ${selectedProduct.deliveryDateMin} and ${selectedProduct.deliveryDateMax}`
  summaryPrice.innerHTML = `${(selectedProduct.price+selectedProduct.packagePrice+selectedProduct.deliveryPrice).toFixed(2)}€`
  summaryPriceBreakdown.innerHTML = `Glasses: ${selectedProduct.price}€ | Package: ${selectedProduct.packagePrice}€ | Shipping: ${selectedProduct.deliveryPrice}€`
  finishTime()
}


/* ------------ SELF NOTES ------------ */

/* PENDIENTE:
- Cambiar las imágenes del aside por página
- Valorar que la validación busque inputs con clase "correct"
*/