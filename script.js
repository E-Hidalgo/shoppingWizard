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

// ----- SWITCH IMAGES BY CLICKING DIFFERENT MODEL ------
let currentModel = 1;

let model1 = document.querySelector("#model1");

model1.addEventListener("click", () => {
  currentModel = 1;
  mainImg.src = "/img/gradiant_amare/product1-side.png";
  img1.src = "/img/gradiant_amare/product1-side.png";
  img2.src = "/img/gradiant_amare/product1-front.png";
  img3.src = "/img/gradiant_amare/product1-right.png";
});

let model2 = document.querySelector("#model2");

model2.addEventListener("click", () => {
  currentModel = 2;
  mainImg.src = "/img/gradiant_calhoun/product2-side.png";
  img1.src = "/img/gradiant_calhoun/product2-side.png";
  img2.src = "/img/gradiant_calhoun/product2-front.png";
  img3.src = "/img/gradiant_calhoun/product2-right.png";
});

let model3 = document.querySelector("#model3");

model3.addEventListener("click", () => {
  currentModel = 3;
  mainImg.src = "/img/gradiant_crystal/product3-side.png";
  img1.src = "/img/gradiant_crystal/product3-side.png";
  img2.src = "/img/gradiant_crystal/product3-front.png";
  img3.src = "/img/gradiant_crystal/product3-right.png";
});

let model4 = document.querySelector("#model4");
let model5 = document.querySelector("#model5");
let model6 = document.querySelector("#model6");
let model7 = document.querySelector("#model7");

//  -------- CHANGE THEE VIEW IN EACH MODEL ------

img1.addEventListener("click", showImg);

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

img2.addEventListener("click", () => {
  if (currentModel == 1) {
    mainImage.src = "/img/gradiant_amare/product1-front.png";
  } else if (currentModel == 2) {
    mainImage.src = "/img/gradiant_calhoun/product2-front.png";
  } else if (currentModel == 3) {
    mainImage.src = "img/gradiant_crystal/product3-front.png";
  }
});

img3.addEventListener("click", () => {
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
  //  birthday: /^[0-9]{2}$+\+[0-9]{2}$+\+[0-9]{4}$/,
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
      validateField(expressions.username, e.target, "username");

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

    //case "birthday":
    //validateDate();
    //console.log(birthday(date));
    //break;

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

let product = document.getElementById("product");
let profile = document.getElementById("profile");
let address = document.getElementById("address");
let shipping = document.getElementById("shipping");
let finish = document.getElementById("finish");
let thankYou = document.getElementById("thank-you");

let topNav = document.getElementById("lineNav");

let actualPage = "product";

function moveForward() {
  console.log("hola");
  if (actualPage == "product") {
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
  console.log("hola");
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
    profile.style.display = "none";
    product.style.display = "block";
    topNav.style.display = "none";
    actualPage = "product";
  }
}

// ------------ REFRESH AT 5 MIN ------------

setInterval(() => {
  window.location.reload();
}, 300000);
