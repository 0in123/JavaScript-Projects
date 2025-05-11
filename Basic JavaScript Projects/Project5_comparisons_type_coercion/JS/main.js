function myFunction1() {
  document.getElementById("Test1").innerHTML = 0/0; // displaying NaN
}

function myFunction2() {
  document.getElementById("Test2").innerHTML = isNaN('This is a string'); // displaying true
}

function myFunction3() {
  document.getElementById("Test3").innerHTML = isNaN('007'); //displaying false
}

function not_Function() { 
  document.getElementById("Not").innerHTML = !(20 > 10); // not function
}

function dbl_not_Function() { 
  document.getElementById("Double_Not").innerHTML = !(5 > 10); // double not function
}