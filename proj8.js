let rider = null;
let driver = null;

//Function to determine whether the user is a driver or not
function determineType() {
    if (document.getElementById("give").checked) {
        addDriver();
    } else if (document.getElementById("need").checked) {
        addRider();
    }
    else {
        alert("Please select whether you need a ride or not.");
    }
}
//function to create rider object
function addRider() {
    let fname = document.getElementById("fname").value;
    let phone = document.getElementById("phone").value;
    let choice = document.getElementById("drivers").value;

    // Create a new Rider object and call reserveSpot
    rider = new Rider(fname, phone, choice);
    rider.reserveSpot();

}
//funciton to create driver object
function addDriver() {
    let fname = document.getElementById("fname").value;
    let phone = document.getElementById("phone").value;
    let cap = document.getElementById("amount").value;

    //Create new driver object
    driver = new Driver(fname,phone,cap);
    driver.newDriver();

}