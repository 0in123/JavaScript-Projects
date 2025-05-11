function Ride_Function() { //Ternary Operator Function - checks if the height is less than 52 inches
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function count_Function() { //Nested Count Function - starts at 9 and adds 1
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }
}