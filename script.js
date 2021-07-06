//screen 0 = id product
//screen 1 = id profile
//screen 2 = id address
//screen 3 = id shipping
//screen 4 = id finish

// --------- VARIABLES --------

let next = document.getElementById("next");
//let back = document.getElementById("back");
let num = 0;
let clear = document.getElementById("clear");

// --------- EVENTS --------

clear.addEventListener("click", clear1);
next.addEventListener("click", change1);
back.addEventListener("click", change2);

// --------- CLEAR --------

function clear1() {
  document.getElementById("miForm").reset();
}

//var numAdd = (num += 1);

function change1() {
  return num += 1;
}


//var numQuit = (num -= 1);

function change2() {
  return num -= 1;
}

console.log(num);

function recharge(num) {
  switch (num) {
    case 0:
      document.getElementById("product").style.display = "contents";
      document.getElementById("profile").style.display = "none";
      break;
    case 1:
      document.getElementById("product").style.display = "none";
      document.getElementById("profile").style.display = "contents";
      document.getElementById("address").style.display = "none";
      break;
    case 2:
      document.getElementById("profile").style.display = "none";
      document.getElementById("address").style.display = "contents";
      document.getElementById("shipping").style.display = "none";
      break;
    case 3:
      document.getElementById("address").style.display = "none";
      document.getElementById("shipping").style.display = "contents";
      document.getElementById("finish").style.display = "none";
      break;
    case 4:
      document.getElementById("shipping").style.display = "none";
      document.getElementById("finish").style.display = "contents";
      break;
    default:
      alert('hola');
  }
}
