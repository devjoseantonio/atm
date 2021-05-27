var bucks = {
  fifty: {
    number: 50,
    quantity: 10,
  },
  twenty: {
    number: 20,
    quantity: 10,
  },
  ten: {
    number: 10,
    quantity: 10,
  },
};
var total = 0;

function printInf() {
  for (key in bucks) {
    total += bucks[key].number * bucks[key].quantity;
    document.getElementById(key).innerHTML =
      bucks[key].number + ": " + bucks[key].quantity;
  }

  document.getElementById("total").innerHTML = "Total in ATM: " + total;
}

function withdraw() {
  var bArray = [];
  var value = parseInt(document.getElementById("withdraw").value);
  var i = value;
  do {
    
  } while(i < 0);
}

function inputMask() {
  if (isNaN(parseInt(document.getElementById("withdraw").value))) {
    document.getElementById("withdraw").value = 0;
  }
  if (isNaN(parseInt(document.getElementById("fifty-bucks").value))) {
    document.getElementById("fifty-bucks").value = 0;
  }
  if (isNaN(parseInt(document.getElementById("twenty-bucks").value))) {
    document.getElementById("twenty-bucks").value = 0;
  }
  if (isNaN(parseInt(document.getElementById("ten-bucks").value))) {
    document.getElementById("ten-bucks").value = 0;
  }
}
inputMask();
printInf();
