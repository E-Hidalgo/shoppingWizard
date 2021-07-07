/* ------------ SELECT DOM ELEMENTS ------------ */

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
let price = document.getElementById("productPrice")
let productsAside = document.querySelectorAll("[data-product]")
let buyBtn = document.getElementById("buy-button")
let imageAside = document.getElementById("image-aside")
let form = document.getElementById("userForm")
let backBtn = document.getElementById("back")
let clearBtn = document.getElementById("clear")
let nextBtn = document.getElementById("next")

/* ------------ EVENT LISTENERS ------------ */

for (let i = 0; i < productsAside.length; i++) {
  productsAside[i].addEventListener("click", selectProduct)
}
for (let i = 0; i < productMainThumbnail.length; i++) {
  productMainThumbnail[i].addEventListener("click", changeMainPicture)
}
buyBtn.addEventListener("click", nextPage)
backBtn.addEventListener("click", previousPage)
clearBtn.addEventListener("click", clearForm)
nextBtn.addEventListener("click", nextPage)

/* ------------ GLOBAL VARIABLES ------------ */

let currentPage = 0
let currentIndex = -1 // Variable starting in -1 to avoid first page being product, out of index.
let currentProduct = 1 // Variable starting in 1 because the default view includes the product 1
let thisElement
let currentPrice
let currentTime = new Date()

/* ------------ FUNCTIONS ------------ */

/* ------------ CHANGE MAIN PICTURE ------------ */

function changeMainPicture() {
  let value = this.getAttribute("value")
  mainProduct.setAttribute("src", `img/products/product${currentProduct}/product${currentProduct}-${value}.png`)
}

/* ------------ SELECT PRODUCT AND CHANGE PICTURES ------------ */

function selectProduct() {
  let value = this.getAttribute("value")
  thisElement = this
  currentProduct = value
  changePictures()
  changeProductName()
}

function changePictures() {
  mainProduct.setAttribute("src", `img/products/product${currentProduct}.png`)
  firstThumbnail.setAttribute("src", `img/products/product${currentProduct}/product${currentProduct}-1.png`)
  secondThumbnail.setAttribute("src", `img/products/product${currentProduct}/product${currentProduct}-2.png`)
  thirdThumbnail.setAttribute("src", `img/products/product${currentProduct}/product${currentProduct}-3.png`)
}

/* ------------ PRODUCT NAME ------------ */

function changeProductName() {
  productNameBlock.innerHTML = thisElement.dataset.name
}

/* ------------ PRICE ------------ */



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
  hidPages()
  pages[currentPage].classList.remove("display-none")
}

function hidPages() {
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.add("display-none")
  }
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
  currentPage === 0 || currentPage === pages.length-1 ? nextBtn.classList.add("hidden") : nextBtn.classList.remove("hidden") // Show next button
}

/* ------------ CLEAR FORM BUTTON ------------ */

function clearForm() {
  form.reset()
  currentPage = 0
  currentIndex = -1
  navigation()
  movePage()
}

// ! ORDENAR ESTAS FUNCIONES

function showBuyBlock() {
  currentPage > 0 ? buyBlock.classList.add("display-none") : buyBlock.classList.remove("display-none")
}

function showImageAside() {
  currentPage > 0 ? imageAside.classList.remove("display-none") : imageAside.classList.add("display-none")
}

function changeImageAside() { // Just for some styling
  currentPage > 2 ? imageAside.setAttribute("src", "img/resources/resource05.png") : imageAside.setAttribute("src", "img/resources/resource06.png")
}

function navigation() { // We use this function to navigate the site, displaying the elements or hiding them
  showIndex()
  showIndexStatus()
  showNavBtns()
  showBuyBlock()
  showImageAside()
  changeImageAside()
}













/* PENDIENTE:
- Cambiar el for por foreach en hidPages, con =>
- Ver cómo guardar campos formulario para luego acceder a ellos para el resumen (Domestika)
- Ver si es posible localizar coordenadas de un elemento en el DOM
- Al hacer click en finish hacer un push de los datos del formulario a un objeto que después leo para imprimir en pantalla
- Valorar animar los bloques para que desaparezcan de forma animada
- Para thumbnails del main ver ejemplo Amazon: todas llevan de base un borde, y luego una sombra con mousein, que además cambia la imagen
!- OPTIMIZAR IMÁGENES
- Pensar si ocultar barra inferior botones en la pantalla de compra
- Ver wrap para elementos flex superpuestos al contraer pantalla
- Refactorizar los value como atributo suelto a data-value
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
* --- Cada vez que damos a Next, una variable currentIndex
    (que empieza en 0, ya que aquí hay una página sin bloque de índice, la de producto) suma 1 (o resta si retrocedemos) ---
* --- Cuando nos movemos, le decimos que elimine la clase active para todos los elementos mayores que currentIndex.
    De esa forma todos los índices desde el primero hasta el actual tendrán un estilo destacado para que sepamos en qué paso estamos.
    Podemos añadir una clase especial evenMoreActive para el data-type-index = valor de currentIndex que lo destaque más. ---
* Para mostrar la foto del producto usar setAttribute para src del img con template string como `src="img/product${selectedProduct}`
* Para mostrarla en el proceso de compra
* Hacer una función específica, con un if que mire el valor de currentPage y, si es === 1 (primera página) corre y
    establece el atributo en base a lo seleccionado
*/