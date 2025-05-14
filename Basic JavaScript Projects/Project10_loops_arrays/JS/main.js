function count_To_Ten() {
    var Digit="";
    var X=1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Piano", "Drums", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function arrayFunction() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "meowing";
    Cat_Picture[4] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constantFunction() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = 800;
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was $" + Musical_Instrument.price;
}


let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    description: function() {
        return "The car is a " + this.color + " " + this.make + " " + this.model + " from " + this.year;
    }
};
document.getElementById("CarObject").innerHTML = car.description();