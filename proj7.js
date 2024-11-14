// Case Project 7
//Part 2 of this project have been sastisfied in lines 94-119 of this file

const array1 = [];

// display user's .txt input to the screen after reading and converting to string
document.getElementById("user_bio").onchange = function() {
    let reader = new FileReader();
    let userFile = this.files[0];
    reader.readAsText(userFile);

    let display = document.getElementById("text_display");
    reader.onload = function() {
        display.innerHTML = reader.result;
    }
}

function arrayFunction(id) {

    if (array1.includes(id)) {
        array1.splice(array1.indexOf(id),1);
    } else {
        array1.push(id);
    }
    document.getElementById("array_display").innerHTML = array1.toString();
}

