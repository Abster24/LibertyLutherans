let cap = 0;
document.getElementById("current").innerHTML = "Current Capacity: " + cap;


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
function displayName() {
    let fname = document.getElementById("fname").value;
    if (fname=="") {
        alert("Name must be filled out");
    }
    else {
    document.getElementById("displayName").innerHTML = "Welcome, " + fname;
    }
}

function displayDriverForm() {
    document.getElementById("capacity").style.display = "block";
}

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

function removeForm() {
    document.getElementById("capacity").style.display = "none";
    document.getElementById("select").style.display = "none";
    document.getElementById("displayName").innterHTML = "";
    document.getElementById("current").innerHTML = "Current Capacity: " + cap;
}
function resetForm() {
    document.getElementById("myForm").reset();
}