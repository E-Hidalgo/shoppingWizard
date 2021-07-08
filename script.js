// --------- VARIABLES --------

let clearBtn = document.getElementById("clear-button");
let form = document.getElementById("miForm");
let inputs = document.querySelectorAll("#miForm input");

// --------- EVENTS --------

clearBtn.addEventListener("click", clear);

// --------- CLEAR --------Button

function clear() {
  document.getElementById("clear-button").reset();
}

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


// let validateField = (expression, input, field) => {
//   if (expression.test(input.value)) {
//     document.getElementById(`${field}`).classList.remove("incorrect");
//     document.getElementById(`${field}`).classList.add("correct");
//     document
//       .getElementById(`${field}IncorrectText`)
//       .classList.add("displayNone");
//   } else {
//     document.getElementById(`${field}`).classList.add("incorrect");
//     document
//       .getElementById(`${field}IncorrectText`)
//       .classList.remove("displayNone");
//   }
// };


let validateForm = (e) => {
  switch (
    e.target.name // EVENTO TARGETEA AL NOMBRE
  ) {
    case "username":
      validateField(expressions.username, e.target, "username");

      // function validateField() {
      //   if (expression.test(input.value))


      
      break;

    case "email":
      validateField(expressions.email, e.target, "email");
      break;

    case "password":
      validateField(expressions.password, e.target, "password");
      validateConfirmPassword("password");
      break;

    case "confirmPassword":
      validateConfirmPassword("confirmPassword");
      break;

    case "firstName":
      validateField(expressions.firstName, e.target, "firstName");
      break;

    case "lastName":
      validateField(expressions.lastName, e.target, "lastName");
      break;

    //case "birthday":
      //validateDate();
      //console.log(birthday(date));
      //break;

    case "address1":
      validateField(expressions.address, e.target, "address1");
      break;

    case "address2":
      validateField(expressions.address, e.target, "address2");
      break;

    case "postalCode":
      validateField(expressions.postalCode, e.target, "postalCode");
      break;

    case "phone":
      validateField(expressions.phone, e.target, "phone");
      break;
  }
};

//let validateDate = () => {}

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
    topNav.style.display = "flex";
    actualPage = "profile";
  } else if (actualPage == "profile") {
    profile.style.display = "none";
    address.style.display = "flex";
    actualPage = "address";
  } else if (actualPage == "address") {
    address.style.display = "none";
    shipping.style.display = "flex";
    actualPage = "shipping";
  } else if (actualPage == "shipping") {
    shipping.style.display = "none";
    finish.style.display = "flex";
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
    actualPage = "finish";
  } else if (actualPage == "finish") {
    finish.style.display = "none";
    shipping.style.display = "flex";
    actualPage = "shipping";
  } else if (actualPage == "shipping") {
    shipping.style.display = "none";
    address.style.display = "flex";
    actualPage = "address";
  } else if (actualPage == "address") {
    address.style.display = "none";
    profile.style.display = "flex";
    actualPage = "profile";
  } else if (actualPage == "profile") {
    profile.style.display = "none";
    product.style.display = "block";
    topNav.style.display = "none";
    actualPage = "product";
  }
}
