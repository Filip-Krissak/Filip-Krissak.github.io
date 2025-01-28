// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Find the button by its ID
    const button = document.getElementById("alertButton");
    // Add a click event listener
    button.addEventListener("click", () => {
        alert("Hello! Thanks for clicking the button!");
    });
});
