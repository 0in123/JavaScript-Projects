var Y = 10;
function Add_numbers_1 (){ // This function has a global variable Y
    document.write(20 + Y + "<br>");
}
function Add_numbers_2 (){
    document.write(Y + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_3 (){ // This function has a local variable X
    var X = 10;
    document.write(20 + X + "<br>");
    console.log(15 + X); // This will work because X is defined in this scope
}
function Add_numbers_4 (){
    document.write(X + 100);
    console.log(X + 100); // This will throw an error because X is not defined in this scope
}
Add_numbers_3();
Add_numbers_4();

"<br>"
function get_Date(){ // This function gets the current date and time
    if (new Date().getHours() < 20) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

"<br>"
function MyDateFunction(){ // This function checks if the current time is before 20:00
    if (new Date().getHours() < 20) {
        document.getElementById("Time").innerHTML = "Yes, it is before 20:00!";
    }
}

"<br>"
"<br>"
function Band_Function(){ // This function checks the user's answer to the band question
    Band= document.getElementById("Band").value;
    if (Band == "Gang of Youths") {
        Band_Answer = "You are correct!! Well done!";
    }
    else {
        Band_Answer = "You are wrong. It is Gang of Youths.";
    }
    document.getElementById("Band_Answer").innerHTML = Band_Answer;
}

"<br>"
"<br>"


function Time_function(){ // This function determines the time of day
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}