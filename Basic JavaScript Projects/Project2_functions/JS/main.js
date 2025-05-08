// This function changes the text of an HTML element with id "Button_Text" to a string and shows an alert with the same string.
function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
    alert(str);
}

// This function changes the text of an HTML element with id "Button_Text" to a string and shows an alert with the same string.
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}