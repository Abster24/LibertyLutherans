// Script for Rides page and form therein
let cap = 0;
document.getElementById("current").innerHTML = "Current Capacity: " + cap;

// Adds the the current total capacity
function addCapacity() {
    let more = parseFloat(document.getElementById("amount").value);
    if (isNaN(more)) {
        document.getElementById("current").innerHTML = "Current Capacity: " + cap;
        more = 0;
    }
    else {
    cap = cap + more;
    document.getElementById("current").innerHTML = "! Current Capacity: " + cap;
    }
}

// displays a welcome message
function displayName() {
    let fname = document.getElementById("fname").value;
    if (fname=="") {
        alert("Name must be filled out");
    }
    else {
    document.getElementById("displayName").innerHTML = "Welcome, " + fname + "!";
    }
}

// if the user selects that they can give rides, display a hidden part of the form
function displayDriverForm() {
    document.getElementById("capacity").style.display = "block";
}

// if the user selects that they need a ride, display a hidden part of the form
function displayRiderForm() {
    const drivers = ['Greta', 'Mathew', 'Grant']
    document.getElementById("select").style.display = "block";
    let select = document.getElementById("drivers");
    let listLength = document.getElementById("drivers");
    if (listLength.options.length > 0) {
        return;
    } else {
        for (let i = 0; i < drivers.length; i++) {
            let optn = drivers[i];
            let el = document.createElement("option");
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
        }
    }
}

// after hitting the submit button, "reserve" a spot
function reserveSpot() {
    let choice = document.getElementById("drivers").value;
    let fname = document.getElementById("fname").value;
    if (document.getElementById("need").checked) {
        if (fname=="") {
            alert("Name must be filled out");
        }
    switch (choice) {
        case "Greta":
            document.getElementById("displayName").innerHTML = "Welcome, " + fname + "! You have reserved a spot with Greta.";
            break;
        case "Mathew":
            document.getElementById("displayName").innerHTML = "Welcome, " + fname + "! You have reserved a spot with Mathew.";
            break;
        case "Grant":
            document.getElementById("displayName").innerHTML = "Welcome, " + fname + "! You have reserved a spot with Grant.";
    }
} else {
    displayName();
}
}
// once the form is completed, reset the non-input parts of the form
function removeForm() {
    document.getElementById("capacity").style.display = "none";
    document.getElementById("select").style.display = "none";
    document.getElementById("displayName").innterHTML = "";
    document.getElementById("current").innerHTML = "Current Capacity: " + cap;
}
function resetForm() {
    document.getElementById("myForm").reset();
}

function updateDisplay(val) {
    document.getElementById('display').value=val; 
}

//Script for Contact page and form therein
function validateForm() {

    // validate First Name field to ensure that only alphabet characters,
    // spaces, and dashes are allowed.
    if (!/^[a-zA-Z\s-]+$/.test(document.contact_form.fname.value)) {
        document.contact_form.fname.focus();
        document.getElementById("errors").innerHTML = "First name is Invalid";
        return false;
    }
    // validate Last Name field to ensure that only alphabet characters,
    // spaces, and dashes are allowed.
    else if (!/^[a-zA-Z\s-]+$/.test(document.contact_form.lname.value)) {
        document.contact_form.lname.focus();
        document.getElementById("errors").innerHTML = "Last name is Invalid";
        return false;
    }

    let selectedDate = new Date(document.contact_form.graddate.value);
    const currentDate = new Date();

    // validate graddate field to ensure that the date is in the future
    if (selectedDate < currentDate) {
        document.getElementById("errors").innerHTML = "Graduation date must be in the future";
        return false;
    }
}

//removes the currently displayed contact field
function removeContactForm() {
    contact_form.email_field.style.display = "none";
    contact_form.phone_field.style.display = "none";
}

function displayEmail() {
    contact_form.email_field.style.display = "block";
}
function displayPhone() {
    contact_form.phone_field.style.display = "block";
}


//Overlay Functions for Events page
function complineOverlayOn() {
    document.getElementById("compline_overlay").style.display = "block";
}
  
  function complineOverlayOff() {
    document.getElementById("compline_overlay").style.display = "none";
}

function bibleOverlayOn() {
    document.getElementById("bible_overlay").style.display = "block";
}

function bibleOverlayOff() {
    document.getElementById("bible_overlay").style.display = "none";
}