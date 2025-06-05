
import "../css/style.css";
import "../bootstrap-5.3.2-dist/css/bootstrap.css";
import logo from "../image/icon.svg";

document.getElementById("myImage").src = logo;
//hjkjjjn
function getUserInput() {
  let Nums = document.getElementsByClassName("Num");
  let op = document.getElementById("op");
  return [parseInt(Nums[0].value), parseInt(Nums[1].value), op.value];
}

function validInput(num) {
  return !isNaN(num);
}

function deoperation(num1, num2, op) {
  switch (op) {
    case "add":
      return num1 + num2;
    case "min":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "division":
      return num1 / num2;
    default:
      return 0;
  }
}

let errorvalue = false;
function handleerror(error, msg) {
  let err = document.getElementById("error");
  if (error || errorvalue) {
    if (error) {
      err.innerText += msg;
    }
    err.style.display = "block";
  } else {
    err.innerText = "";
    err.style.display = "none";
  }
  errorvalue = error;
}

function setuserOutput(res) {
  let result = document.getElementById("result");
  result.innerText = "Result: " + res;
}

document.getElementById("cal").addEventListener("click", calculate);

function calculate() {
  handleerror(false, "");
  let inputs = getUserInput();
  if (validInput(inputs[0]) && validInput(inputs[1])) {
    let res = deoperation(inputs[0], inputs[1], inputs[2]);
    setuserOutput(res);
  } else {
    for (let i = 0; i < inputs.length - 1; i++) {
      let error = !validInput(inputs[i]);
      handleerror(error, "Invalid Num :" + (i + 1));
    }
  }
}
