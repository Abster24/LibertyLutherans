const rideform = document.querySelector('#myForm');
//const colorForm = document.getElementById('colorForm');

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