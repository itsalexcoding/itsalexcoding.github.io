document.addEventListener("DOMContentLoaded", () => {
    // Ensure that we are inside a Java subpage before loading the subheader
    if (!document.getElementById("subheader-placeholder")) {
        console.warn("Subheader placeholder not found. Skipping subheader load.");
        return;
    }

    console.log("Fetching subheader from: ../headers/subheaderJava.html"); // Debugging

    fetch("../headers/subheaderJava.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Subheader successfully loaded"); // Debugging
            document.getElementById("subheader-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading subheader:", error);
        });
});