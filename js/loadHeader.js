document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  // Count how many slashes are in the path (minus the very first slash)
  // Then 'repeat' "../" that many times.
  const slashCount = (currentPath.match(/\//g) || []).length - 1;
  
  // If slashCount = 0 (root page), prefix = "" (just fetch "header.html").
  // If slashCount = 1 (one folder deep), prefix = "../" etc.
  const prefix = "../".repeat(slashCount);

  console.log("Fetching header from:", prefix + "header.html"); // Debugging

  fetch(prefix + "header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      console.log("Header successfully loaded");
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading header:", error);
    });
});