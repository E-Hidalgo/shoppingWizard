// --------- VARIABLES --------

let clearBtn = document.getElementById("clear-button");
let form = document.getElementById("miForm");
let inputs = document.querySelectorAll("#miForm input");
let mainImg = document.querySelector("#mainImage");
let img1 = document.querySelector("#image1");
let img2 = document.querySelector("#image2");
let img3 = document.querySelector("#image3");
let currentProduct;

// --------- RESET FORM AND GO BACK TO FIRST PAGE EVENT --------

clearBtn.addEventListener("click", () => {
  form.reset();
  product.style.display = "flex";
  profile.style.display = "none";
  address.style.display = "none";
  shipping.style.display = "none";
  finish.style.display = "none";
  thankYou.style.display = "none";
  topNav.style.display = "none";
  actualPage = "product";
});

// ----- SWITCH IMAGES AND NAME BY CLICKING DIFFERENT MODEL ------

let productName = document.getElementById("firstModelName");
let currentModel = 1;

let model1 = document.querySelector("#model1");
model1.addEventListener("click", () => {
  currentModel = 1;
  productName.innerHTML = "Gradiant Amare";
  mainImg.src = "/img/gradiant_amare/product1-side.png";
  img1.src = "/img/gradiant_amare/product1-side.png";
  img2.src = "/img/gradiant_amare/product1-front.png";
  img3.src = "/img/gradiant_amare/product1-right.png";
});

let model2 = document.querySelector("#model2");
model2.addEventListener("click", () => {
  currentModel = 2;
  productName.innerHTML = "Gradiant Calhoun";
  mainImg.src = "/img/gradiant_calhoun/product2-side.png";
  img1.src = "/img/gradiant_calhoun/product2-side.png";
  img2.src = "/img/gradiant_calhoun/product2-front.png";
  img3.src = "/img/gradiant_calhoun/product2-right.png";
});

let model3 = document.querySelector("#model3");
model3.addEventListener("click", () => {
  currentModel = 3;
  productName.innerHTML = "Gradiant Crystal";
  mainImg.src = "/img/gradiant_crystal/product3-side.png";
  img1.src = "/img/gradiant_crystal/product3-side.png";
  img2.src = "/img/gradiant_crystal/product3-front.png";
  img3.src = "/img/gradiant_crystal/product3-right.png";
});

// PENDIENTE CAMBIAR LA REFERENCIA Y EL NOMBRE DEL MODELO
let model4 = document.querySelector("#model4");
model4.addEventListener("click", () => {
  currentModel = 4;
  productName.innerHTML = "Gradiant Curren";
  mainImg.src = "/img/gradiant_curren/product4-side.png";
  img1.src = "/img/gradiant_curren/product4-side.png";
  img2.src = "/img/gradiant_curren/product4-front.png";
  img3.src = "/img/gradiant_curren/product4-right.png";
});

let model5 = document.querySelector("#model5");
model5.addEventListener("click", () => {
  currentModel = 5;
  productName.innerHTML = "Gradiant Pogo";
  mainImg.src = "/img/gradiant_pogo/product5-side.png";
  img1.src = "/img/gradiant_pogo/product5-side.png";
  img2.src = "/img/gradiant_pogo/product5-front.png";
  img3.src = "/img/gradiant_pogo/product5-right.png";
});

let model6 = document.querySelector("#model6");
model6.addEventListener("click", () => {
  currentModel = 6;
  productName.innerHTML = "Gradiant Salina";
  mainImg.src = "/img/gradiant_salina/product6-side.png";
  img1.src = "/img/gradiant_salina/product6-side.png";
  img2.src = "/img/gradiant_salina/product6-front.png";
  img3.src = "/img/gradiant_salina/product6-right.png";
});

let model7 = document.querySelector("#model7");
model7.addEventListener("click", () => {
  currentModel = 7;
  productName.innerHTML = "Gradiant Vulcano";
  mainImg.src = "/img/gradiant_vulcano/product7-side.png";
  img1.src = "/img/gradiant_vulcano/product7-side.png";
  img2.src = "/img/gradiant_vulcano/product7-front.png";
  img3.src = "/img/gradiant_vulcano/product7-right.png";
});


//  -------- CHANGE THEE VIEW IN EACH MODEL ------

img1.addEventListener("mouseenter", showImg);

// function showImg() {
//   switch (currentModel) {
//     case 1:
//       mainImage.src = "/img/gradiant_amare/product1-side.png";
//       break;
//     case 2:
//       mainImage.src = "/img/gradiant_calhoun/product2-side.png";
//       break;
//     case 3:
//       mainImage.src = "/img/gradiant_crystal/product3-side.png";
//       break;
//     default:
//       break;
//   }

function showImg() {
  if (currentModel == 1) {
    mainImage.src = "/img/gradiant_amare/product1-side.png";
  } else if (currentModel == 2) {
    mainImage.src = "/img/gradiant_calhoun/product2-side.png";
  } else if (currentModel == 3) {
    mainImage.src = "/img/gradiant_crystal/product3-side.png";
  }
}

img2.addEventListener("mouseenter", () => {
  if (currentModel == 1) {
    mainImage.src = "/img/gradiant_amare/product1-front.png";
  } else if (currentModel == 2) {
    mainImage.src = "/img/gradiant_calhoun/product2-front.png";
  } else if (currentModel == 3) {
    mainImage.src = "img/gradiant_crystal/product3-front.png";
  }
});

img3.addEventListener("mouseenter", () => {
  if (currentModel == 1) {
    mainImage.src = "/img/gradiant_amare/product1-right.png";
  } else if (currentModel == 2) {
    mainImage.src = "/img/gradiant_calhoun/product2-right.png";
  } else if (currentModel == 3) {
    mainImage.src = "/img/gradiant_crystal/product3-right.png";
  }
});

//------- EXPRESSIONS --------
let expressions = {
  username: /^[a-zA-Z0-9\_\-]{4,10}$/, //Username should be between 4-10 characters including letters, numbers, dash and underscore
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
  password: /^[a-zA-Z0-9\W\-_]{6,}$/,
  password2: /^[a-zA-Z0-9\W\-_]{6,}$/,
  firstName: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
  lastName: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
  birthday: /^[true]$/,
  address: /^[a-zA-Z0-9\/\,]+/,
  postalCode: /^[0-9]{5,5}$/,
  //country: /^[a-zA-Z0-9]/,
  phone: /^\+\d{2,3}\s\d{9}$/,
};

// ------------ VALIDATING FUNCTION----------

let validateForm = (event) => {
  switch (
    event.target.name // EVENTO TARGETEA AL NOMBRE
  ) {
    case "username":
      validateField(expressions.username, event.target, "username");

      // function validateField() {
      //   if (expression.test(input.value))

      break;

    case "email":
      validateField(expressions.email, event.target, "email");
      break;

    case "password":
      validateField(expressions.password, event.target, "password");
      validateConfirmPassword("password");
      break;

    case "confirmPassword":
      validateConfirmPassword("confirmPassword");
      break;

    case "firstName":
      validateField(expressions.firstName, event.target, "firstName");
      break;

    case "lastName":
      validateField(expressions.lastName, event.target, "lastName");
      break;

    // case "birthday":
    //   if ("birthday" === true) {
    //     birthday.classList.add("correct");
    //   } else if ("birthday" === false) {
    //     birthday.classList.remove("correct");
    //     birthday.classList.add("incorrect");
    //   }
    //   break;

    case "address1":
      validateField(expressions.address, event.target, "address1");
      break;

    case "address2":
      validateField(expressions.address, event.target, "address2");
      break;

    case "postalCode":
      validateField(expressions.postalCode, event.target, "postalCode");
      break;

    case "phone":
      validateField(expressions.phone, event.target, "phone");
      break;
  }
};

let validateConfirmPassword = (field) => {
  let inputPassword = document.getElementById("password");
  let inputConfirmPassword = document.getElementById("confirmPassword");

  if (inputPassword.value !== inputConfirmPassword.value) {
    document.getElementById(`${field}`).classList.remove("incorrect");
    document.getElementById(`${field}`).classList.add("correct");
    document
      .getElementById(`${field}IncorrectText`)
      .classList.add("displayNone");
  } else {
    document.getElementById(`${field}`).classList.add("incorrect");
    document
      .getElementById(`${field}IncorrectText`)
      .classList.remove("displayNone");
  }
};

let validateField = (expression, input, field) => {
  if (expression.test(input.value)) {
    document.getElementById(`${field}`).classList.remove("incorrect");
    document.getElementById(`${field}`).classList.add("correct");
    document
      .getElementById(`${field}IncorrectText`)
      .classList.add("displayNone");
  } else {
    document.getElementById(`${field}`).classList.add("incorrect");
    document
      .getElementById(`${field}IncorrectText`)
      .classList.remove("displayNone");
  }
};

//-------- EVENT LISTENER TO EXECUTING VALIDATING

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm); // WHEN KEY UP
  input.addEventListener("blur", validateForm); // WHEN CLICK OUTSIDE
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// -------- Validation form

let next = document.getElementById("next");
next.addEventListener("click", moveForward);

let back = document.getElementById("back");
back.addEventListener("click", moveBackward);

let buy = document.getElementById("buy-button");
buy.addEventListener("click", moveForward)

let product = document.getElementById("product");
let profile = document.getElementById("profile");
let address = document.getElementById("address");
let shipping = document.getElementById("shipping");
let finish = document.getElementById("finish");
let thankYou = document.getElementById("thank-you");

let topNav = document.getElementById("lineNav");

//  --------- NAVIGATION FUNCTIONALITY ----------

let actualPage = "product";
back.style.visibility = "hidden";

function moveForward() {
  if (actualPage == "product") {
    back.style.visibility = "visible";
    product.style.display = "none";
    profile.style.display = "flex";
    document.getElementById("profileBall").classList.add("ballBlack");
    topNav.style.display = "flex";
    actualPage = "profile";
  } else if (actualPage == "profile") {
    profile.style.display = "none";
    address.style.display = "flex";
    document.getElementById("addressBall").classList.add("ballBlack");
    actualPage = "address";
  } else if (actualPage == "address") {
    address.style.display = "none";
    shipping.style.display = "flex";
    document.getElementById("shippingBall").classList.add("ballBlack");
    actualPage = "shipping";
  } else if (actualPage == "shipping") {
    shipping.style.display = "none";
    finish.style.display = "flex";
    document.getElementById("finishBall").classList.add("ballBlack");
    actualPage = "finish";
  } else if (actualPage == "finish") {
    finish.style.display = "none";
    thankYou.style.display = "flex";
    actualPage = "thankYou";
  }
}

function moveBackward() {
  if (actualPage == "thankYou") {
    thankYou.style.display = "none";
    finish.style.display = "flex";
    document.getElementById("finishBall").classList.remove("ballBlack");
    actualPage = "finish";
  } else if (actualPage == "finish") {
    finish.style.display = "none";
    shipping.style.display = "flex";
    document.getElementById("shippingBall").classList.remove("ballBlack");
    actualPage = "shipping";
  } else if (actualPage == "shipping") {
    shipping.style.display = "none";
    address.style.display = "flex";
    document.getElementById("addressBall").classList.remove("ballBlack");
    actualPage = "address";
  } else if (actualPage == "address") {
    address.style.display = "none";
    profile.style.display = "flex";
    document.getElementById("profileBall").classList.remove("ballBlack");
    actualPage = "profile";
  } else if (actualPage == "profile") {
    back.style.visibility = "hidden";
    profile.style.display = "none";
    product.style.display = "block";
    topNav.style.display = "none";
    actualPage = "product";
  }
}

// ------------ REFRESH AT 5 MIN ------------

setInterval(() => {
  document.location.reload();
}, 300000);
