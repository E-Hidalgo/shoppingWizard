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
let finishButton = document.getElementById("finish-button")
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
  package:"Nope, are you sure? Go back and get it!"
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
    price.innerHTML = `${priceWithPackage}€`
    selectedProduct.packagePrice = 9
    selectedProduct.package = "Yes! &#x1F609;"
  } else {
    price.innerHTML = `${productPrice}€`
    selectedProduct.packagePrice = 0
    selectedProduct.package = "Nope, are you sure? Go back and get it!"
  }
}

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

function showBagItem() {
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
  currentPage > 0 ? clearBtn.classList.remove("hidden") : clearBtn.classList.add("hidden") // Show clear button
  currentPage === 0 || currentPage >= pages.length-2 ? nextBtn.classList.add("hidden") : nextBtn.classList.remove("hidden") // Show next button until Summary page
  currentPage === pages.length-1 ? backBtn.classList.add("hidden") : backBtn.classList.remove("hidden")
  currentPage === pages.length-1 ? clearBtn.classList.add("hidden") : clearBtn.classList.remove("hidden")
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
}

/* ------------ IS IT A GIFT ------------ */

function showGiftOptions() {
  giftOptions.classList.toggle("display-none")
}

/* ------------ REFRESH PRODUCT INFO IN SUMMARY ------------ */

function refreshSelectedProduct() {
  summaryName.innerHTML = selectedProduct.name
  summaryPackage.innerHTML = `<span class="bold">Premium package</span>: ${selectedProduct.package}`
  summaryDelivery.innerHTML = `<span class="bold">Estimate delivery date</span>: between ${selectedProduct.deliveryDateMin} and ${selectedProduct.deliveryDateMax}`
  summaryPrice.innerHTML = `${selectedProduct.price+selectedProduct.packagePrice}€`
  summaryPriceBreakdown.innerHTML = `Glasses: ${selectedProduct.price}€ | Package: ${selectedProduct.packagePrice}€`
}





/* ------------ SELF NOTES ------------ */

// LOCATE INPUTS IN CURRENT PAGE
let prueba3 = pages[1].querySelectorAll("input")
// console.log(prueba3)

function prueba5() {
  prueba3.forEach((elemento) => {
    elemento.setAttribute("prueba", "prueba")
  })
}


/* PENDIENTE:
- Ver cómo guardar campos formulario para luego acceder a ellos para el resumen (Domestika)
- Ver si es posible localizar coordenadas de un elemento en el DOM (para animación bola punto index, no necesario para este proyeto)
- Al hacer click en finish hacer un push de los datos del formulario a un objeto que después leo para imprimir en pantalla
- Valorar animar los bloques para que desaparezcan de forma animada
- Para thumbnails del main ver ejemplo Amazon: todas llevan de base un borde, y luego una sombra con mousein, que además cambia la imagen
- Pensar si ocultar barra inferior botones en la pantalla de compra
- Pensar si añadir un banner o algo de contenido
- Ver wrap para elementos flex superpuestos al contraer pantalla
- Valorar añadir un 1 a la bolsa del header si currentPage != 0
- Valorar cambiar let por const en las búsquedas de elementos del DOM (+ uppercase)
- Cambiar las imágenes del aside por página
- Valorar quitar el select de country, poner solo unos pocos, y buscar una forma de que, si la opción elegida es "Mi país no está en esta lista"
  aparezca un mensaje de que estamos trabajando para enviar a más países. Esto debería invalidar el campo y no dejar continuar.
*/




/* -- NOTES TO SELF (Carlos) -- */
/* 
* --- 1 a todos los div separadores añadirles un data-page ---
* --- 2 todos los divs están ocultos de forma predeterminada (display none) excepto el primero
    que tiene además clase active (en CSS por debajo del display none) que lo muestra con un display block ---
* --- 3 hay una variable currentPage que suma 1 con el botón Next y resta 1 con el Back ---
* --- 4 metemos en una variable, y luego a un array todos los elementos div por el data-page ---
* --- 5 los botones lanzan una función para mostrar la página actual: ---
    --- A) añade o resta +/-1 a la variable currentPage ---
    --- B) con un for (a ser posible foreach con función flecha) recorre el array y elimina la clase active de todos los elementos ---
    --- C) añade la clase active para el elemento [currentPage] del array de data-page ---
* --- (La variable currentPage empieza en 1)? ---
* --- El botón next dejaría de mostrarse si currentPage === array de data-page ---
* --- O lo que es lo mismo, se mostraría siempre que currentPage sea 《 array de data-page.length ---
* --- El botón de ir hacia atrás se mostraría solo si currentPage 》 1 ---
* --- Para el clear -> función que busque elementos data-type-form y establezca su value a vacío ---
* Valorar que el botón Next sea un submit con prevent default para guardar los campos (¿value?),
    y mostrarlos en la página de resumen -> problema sobre qué hacer en ese caso con el back
* ¿Problema? -> puedes navegar por las secciones pero no se eliminan los datos. Si haces Next hará un submit
    y en teoría sobreescribe el valor previo del input
* --- Solo el clear vacía los campos ---
* --- Creamos un atributo data-type-index para el índice. ---
* --- Cada vez que damos a Next, una variable currentIndex ---
    --- (que empieza en 0, ya que aquí hay una página sin bloque de índice, la de producto) suma 1 (o resta si retrocedemos) ---
* --- Cuando nos movemos, le decimos que elimine la clase active para todos los elementos mayores que currentIndex. ---
    --- De esa forma todos los índices desde el primero hasta el actual tendrán un estilo destacado para que sepamos en qué paso estamos. ---
    --- Podemos añadir una clase especial evenMoreActive para el data-type-index = valor de currentIndex que lo destaque más. ---
* --- Para mostrar la foto del producto usar setAttribute para src del img con template string como `src="img/product${selectedProduct}` ---
* --- Para mostrarla en el proceso de compra ---
* --- Hacer una función específica, con un if que mire el valor de currentPage y, si es === 1 (primera página) corre y
    establece el atributo en base a lo seleccionado ---
*/