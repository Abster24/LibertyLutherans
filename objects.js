//Driver object class
function Driver (first, capacity, phone) {
    this.fname = first;
    this.vehicleCapacity = capacity;
    this.phone = phone;

    //Displays a message
    this.newDriver = function() {
        if (this.fname=="") {
            alert("Name must be filled out");
        }
        else {
            document.getElementById("displayName").innerHTML = "Welcome, " + this.fname + "! Thank you for helping out!";
        }
    }
}
//Rider object class
function Rider (first, phone, choice) {
    this.fname = first;
    this.phone = phone; 
    this.choice = choice;

    // displays a message
    this.reserveSpot = function() {
        if (document.getElementById("need").checked) {
            if (this.fname=="") {
                alert("Name must be filled out");
            } 
        switch (this.choice) {
            case "Greta":
                document.getElementById("displayName").innerHTML = "Welcome, " + this.fname + "! You have reserved a spot with Greta.";
                break;
            case "Mathew":
                document.getElementById("displayName").innerHTML = "Welcome, " + this.fname + "! You have reserved a spot with Mathew.";
                break;
            case "Grant":
                document.getElementById("displayName").innerHTML = "Welcome, " + this.fname + "! You have reserved a spot with Grant.";
        }
        }
    }
}