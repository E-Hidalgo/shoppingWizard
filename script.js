// --------- VARIABLES --------

let clear = document.getElementById("clear");
let form = document.getElementById("miForm");
let inputs = document.querySelectorAll("#miForm input");

// --------- EVENTS --------

clear.addEventListener("click", clear1);

// --------- CLEAR --------

function clear1() {
  document.getElementById("miForm").reset();
}

//------- EXPRESSIONS --------
let expressions = {
  username: /^[a-zA-Z0-9\_\-]{4,10}$/, //Username should be between 4-10 characters including letters, numbers, dash and underscore
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
  password: /^[a-zA-Z0-9\W\-_]{6,}$/,
  password2: /^[a-zA-Z0-9\W\-_]{6,}$/,
  firstName: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
  lastName: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
  // birthday: /^[0-9]{2}$+\+[0-9]{2}$+\+[0-9]{4}$/,
  // address1: /^[a-zA-Z0-9\/\,]+/,
  // address2: /^[a-zA-Z0-9\/\,]+/,
  // postalCode: /^[0-9]/,
  // country: /^[a-zA-Z0-9]/,
  // phone: /^\?+[0-9]\?[-/s]{2,4}[0-9]\?[-/s]{3}+[0-9]\?[-/s]{3}+[0-9]{3}/,
};

// ------------ VALIDATING FUNCTION----------

let validateForm = (e) => {
  switch (e.target.name) {  // EVENTO TARGETEA AL NOMBRE
    case "username":
      // console.log("Yeka Muñeca!");

      if (expressions.username.test(e.target.value)) {
        document.getElementById("username").classList.remove("incorrect");
        document.getElementById("username").classList.add("correct");
      } else {
        document.getElementById("username").classList.add("incorrect");
      }

      break;
  }
  // console.log(e.target.name);
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

// const form = document.getElementById('form');

// switch () {
//   case username:

//     break;
//   case email:

//     break;
//   case password:

//     break;
//   case password2:

//     break;
//   case firstName:

//     break;
//   case lastName:

//     break;
//   case birthday:

//     break;
//   case address1:

//     break;
//   case address2:

//     break;
//   case postalCode:

//     break;
//   case country:

//     break;
//   case phone:

//     break;
//   case shipping:

//     break;
//   case textGift:

//     break;

//   default:
//     alert('hola');
// }
