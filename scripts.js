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

function displayForm() {
    document.getElementById("capacity").style.display = "block";
}
function removeForm() {
    document.getElementById("capacity").style.display = "none";
    document.getElementById("current").innerHTML = "Current Capacity: " + cap;
}
function resetForm() {
    document.getElementById("myForm").reset();
}