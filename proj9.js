const rideform = document.querySelector('#myForm');
//const colorForm = document.getElementById('colorForm');

document.addEventListener('DOMContentLoaded', () => {
    let cookies = readCookies();
    console.log(cookies);

    if (cookies.bannercolor) {
        document.querySelectorAll(".welcome").forEach(element => {
            element.style.background = cookies.bannercolor; 
        });

    if (cookies.submitted === "yes") {
        document.getElementById("myForm").style.display = "none";
        document.getElementById("displayName").innerHTML = "You have already reserved a spot for this week. If you need to change something, please contact us!";
    }

    }
});

// Event listener to create cookie when form is submitted.
rideform.addEventListener('submit', (event) => {
    event.preventDefault();

    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    let expires = expirationDate.toUTCString();

    document.cookie = "submitted=yes; expires=" + expires + "; path=/";
});

// Currently in progress to change header background color.
function colorForm() {

    let expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);
    let expires = expirationDate.toUTCString();
    let color = document.getElementById('bannercolor').value;

    document.cookie = "bannercolor=" + color + "; expires=" + expires + "; path=/";
}

// Function to read cookies and place them in array
function readCookies() {
    let cookies = {};

    if (document.cookie) {
        let cookieList = document.cookie.split("; ");
        for (let items of cookieList) {
            let cookie = items.split("=");
            let cookieName = cookie[0];
            let cookieValue = decodeURIComponent(cookie[1]);
            cookies[cookieName] = cookieValue;
        }
        return cookies;
    }
}

/*
Individual Case Project 9: Security

Security is crucial to having a good website that users are confident in. Many websites take in names,
address, credit card information, and passwords that should not be available to anyone. When developing a 
website, especially one that uses cookies or Web Storage, this type of information should not be kept locally, 
at least for a little time as possible. In addition, when a form is submitting to a server, information should be passed
through a secure connection. 

The best ways to accomplish these things is to utilize expirations dates on cookies, and never store information such as
passwords or credit cards numbers in cookies or web storage. Adding the 'secure' keyword to cookies also ensures that
information can only be passed through HTTPS connections, instead of HTTP or other insecure protocols.
*/