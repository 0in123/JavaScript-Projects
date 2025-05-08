function addition_Function() // Addition function
{
    var addition = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 = " + addition;
}

function subtraction_Function() // Subtraction function
{
    var subtraction = 5 - 2;
    document.getElementById("Subtract").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() // Multiplication function
{
    var multiplication = 5 * 2;
    document.getElementById("Multiply").innerHTML = "5 * 2 = " + multiplication;
}

function division() // Division function
{
    var division = 6 / 2;
    document.getElementById("Division").innerHTML = "6 / 2 = " + division;
}

function more_Math() // Maths functions
{
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Lots_Math").innerHTML = "1 plus 2, times 10, divided by 2, minus 5 equals: " + simple_Math;
}

function modulus_Operator() // Modulus (reminder) function
{
    var Remainder = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + Remainder;
}

function negation_Operator() // Negation function
{
    var x = 10;
    document.getElementById("Negation").innerHTML = -x
}

var y = 10; // Variable y (+1)
y++;

var z = 10; // Variable z (-1)
z--;

window.alert(Math.random() * 100); // Random number between 0 and 100 in a window alert