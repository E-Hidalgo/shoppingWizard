//screen 0 = id product
//screen 1 = id profile
//screen 2 = id address
//screen 3 = id shipping
//screen 4 = id finish

// --------- VARIABLES --------

let next = document.getElementById("next");
let back = document.getElementById("back");
let clear = document.getElementById("clear");
let num = 0;

next.addEventListener("click", change1);

back.addEventListener("click", change2);

// ------ CLEAR FUNCTION -------

clear.addEventListener("click", cleaner);

function cleaner() {
  num = 1;
}

function change1() {
  num = num + 1;
  return num;
}
console.log(num);

function change2() {
  num = num - 1;
  return num;
}

console.log(num);

function change(num) {
  switch (num) {
    case 0:
      let temp = document.getElementsByTagName("template")[0];
      let clon = temp.content.cloneNode(true);
      document.body.appendChild(clon);
      break;
    case 1:
      let temp1 = document.getElementsByTagName("template")[1];
      let clon1 = temp1.content.cloneNode(true);
      document.body.appendChild(clon1);
      break;
    case 2:
      let temp2 = document.getElementsByTagName("template")[2];
      let clon2 = temp2.content.cloneNode(true);
      document.body.appendChild(clon2);
      break;
    case 3:
      let temp3 = document.getElementsByTagName("template")[3];
      let clon3 = temp3.content.cloneNode(true);
      document.body.appendChild(clon3);
      break;
    case 4:
      let temp4 = document.getElementsByTagName("template")[4];
      let clon4 = temp4.content.cloneNode(true);
      document.body.appendChild(clon4);
      break;
    default:
  }
}
console.log(num);

//document.getElementById('h').style.display = 'none'"
