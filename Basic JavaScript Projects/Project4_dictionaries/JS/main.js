function my_Dictionary() { // Create a dictionary object
    var Car = {
        Brand: "Ford",
        Model: "Fiesta",
        Year: "2015",
        Engine: "1.0 EcoBoost",
        Color: "Red"
    };
    delete Car.Model; // Delete the Model property from the dictionary
    document.getElementById("Dictionary").innerHTML = Car.Model; // Display the Model property of the dictionary in the HTML element with id "Dictionary"
}