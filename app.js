// DOM selectors
const inputFirstCls = document.querySelector("#input-first");
const btnPlus_FirstCls = document.querySelector("#btnPlusFirstCls");
const btnMinus_Firstcls = document.querySelector("#btnMinusFirstcls");
const inputEconomy = document.querySelector("#input-economy");
const btnPlus_economy = document.querySelector("#btnPlusEconomy");
const btnMinus_economy = document.querySelector("#btnMinusEconomy ");
const subtotal = document.querySelector("#subtotal");
const vat = document.querySelector("#vat");
const total = document.querySelector("#total");

//Summary Section;
//DOM selectors:
const departFrom = document.querySelector("#depart_flfrom");
const departTo = document.querySelector("#depart_flTo");
const returnFrom = document.querySelector("#return_flfrom");
const returntTo = document.querySelector("#return_flTo");
const departDate = document.querySelector("#departDateSummary");
const returnDate = document.querySelector("#returnDateSammary");
const fClsQtty = document.querySelector("#fClsNum");
const eClsQtty = document.querySelector("#eClsNum");
const fClsPrice = document.querySelector("#fClsPrice");
const eClsPrice = document.querySelector("#eClsPrice");
const summarySub = document.querySelector("#summarySub");
const summaryVat = document.querySelector("#summaryVat");
const summaryTotal = document.querySelector("#summaryTotal");
const flyFrom = document.querySelector("#fly-from");
const flyTo = document.querySelector("#fly-to");

// initial setup
function init() {
  inputFirstCls.value = 0;
  inputEconomy.value = 0;
  subtotal.innerText = 0;
  vat.innerText = 0;
  total.innerText = 0;

  flyTo.value = "";
  flyFrom.value = "";
  document.getElementById("depart-date").value = "";
  document.getElementById("return-date").value = "";

  document.querySelector(".booking-toggle").style.display = "block";
  document.querySelector(".grid-container").style.display = "none";
}
init();
//Price calculator
function update() {
  //   ticket Price
  subtotal.innerText =
    parseFloat(inputFirstCls.value) * 150 +
    parseFloat(inputEconomy.value) * 100;

  //vat
  newSubtotal = parseFloat(subtotal.innerText);
  vat.innerText = newSubtotal * 0.1; // vat 10%

  //Grand Total
  total.innerText = parseFloat(subtotal.innerText) + parseFloat(vat.innerText);
}

function updateSummary() {
  //update placeholders;
  if (flyTo.value == "") {
    departTo.innerText = flyTo.placeholder;
    returnFrom.innerText = flyTo.placeholder;
  } else {
    departTo.innerText = flyTo.value;
    returnFrom.innerText = flyTo.value;
  }
  if (flyFrom.value == "") {
    departFrom.innerText = flyFrom.placeholder;
    returntTo.innerText = flyFrom.placeholder;
  } else {
    departFrom.innerText = flyFrom.value;
    returntTo.innerText = flyFrom.value;
  }

  // departDate.innerText = document.getElementById("depart-date").value;
  if (document.getElementById("depart-date").value == "") {
    departDate.innerText = "Tomorrow";
  } else {
    departDate.innerText = document.getElementById("depart-date").value;
  }
  if (document.getElementById("return-date").value == "") {
    returnDate.innerText = "Flaxible date";
  } else {
    returnDate.innerText = document.getElementById("return-date").value;
  }
  //update price
  fClsQtty.innerText = inputFirstCls.value;
  fClsPrice.innerText = parseFloat(inputFirstCls.value) * 150;
  eClsQtty.innerText = inputEconomy.value;
  eClsPrice.innerText = parseFloat(inputEconomy.value) * 100;
  summarySub.innerText = subtotal.innerText;
  summaryVat.innerText = vat.innerText;
  summaryTotal.innerText = total.innerText;

  //toggle
  document.querySelector(".booking-toggle").style.display = "none";
  document.querySelector(".grid-container").style.display = "block";
}

//First Class event handler
btnPlus_FirstCls.addEventListener("click", function () {
  inputFirstCls.value++;
  update();
});
btnMinus_Firstcls.addEventListener("click", function () {
  if (inputFirstCls.value > 0) {
    inputFirstCls.value--;
    update();
  }
});
inputFirstCls.addEventListener("input", function () {
  if (inputFirstCls.value > 0) {
    update();
  }
});

inputFirstCls.addEventListener("change", update);

//Economy class event handler
btnPlus_economy.addEventListener("click", function () {
  inputEconomy.value++;
  update();
});
btnMinus_economy.addEventListener("click", function () {
  if (inputEconomy.value > 0) {
    inputEconomy.value--;
    update();
  }
});

// inputEconomy.addEventListener("input", update);
inputEconomy.addEventListener("input", function () {
  if (inputEconomy.value > 0) {
    update();
  }
});

inputEconomy.addEventListener("change", update);

//Book now btn handler
document.querySelector("#btnBook").addEventListener("click", updateSummary);

//Confirm btn handler
document.querySelector("#btnConfirm").addEventListener("click", function () {
  alert(`Thank you for booking! Please check your email for payment options.
Click Ok to go back home page.`);
  init();
});
