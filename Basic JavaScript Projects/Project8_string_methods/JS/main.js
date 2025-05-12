function full_Sentence(){
    var part_1 = "I have";
    var part_2 = " made this";
    var part_3 = " into a complete";
    var part_4 = " sentence.";
    var whole_Sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_Sentence;
    // This function concatenates four parts of a sentence and displays it in the HTML element with id "Concatenate"
}

function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
    // This function slices a part of a sentence and displays it in the HTML element with id "Slice"
}

function string_Method(){
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
    // This function converts a number to a string and displays it in the HTML element with id "Numbers_to_string"
}


function precision_Method(){
    var X = 12938.30129873747594;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
    // This function formats a number to a specified precision and displays it in the HTML element with id "Precision"
}