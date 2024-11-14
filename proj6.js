// Script for Rides page and form therein
let cap = 0;

document.getElementById("current").innerHTML = "Current Capacity: " + cap;

// Adds the the current total capacity
function addCapacity() {
    let more = parseFloat(document.getElementById("amount").value);
    cap = cap + more;
    document.getElementById("current").innerHTML = "Current Capacity: " + cap;
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

// once the form is completed, reset the non-input parts of the form
function removeForm() {
    document.getElementById("capacity").style.display = "none";
    document.getElementById("select").style.display = "none";
    document.getElementById("displayName").innerHTML = "";
    document.getElementById("current").innerHTML = "Current Capacity: " + cap;
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