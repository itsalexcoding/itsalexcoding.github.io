document.addEventListener("DOMContentLoaded", () => {
    let currentPath = window.location.pathname;

    // Ensure we're always fetching from `/portfolio/headers/header.html`
    let prefix = currentPath.includes("/java/") ? "../" : "./";

    console.log("Fetching header from:", prefix + "headers/header.html"); // Debugging

    fetch(prefix + "headers/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Header successfully loaded"); // Debugging
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading header:", error);
        });
});