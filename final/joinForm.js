document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener("submit", function(e) {
    console.log("script is running");
    
    e.preventDefault();

    const selected = document.querySelector('input[name="experienceLevel"]:checked');
    const form = document.querySelector("form");

    if (selected) {
      form.innerHTML = "<p>You can Join!</p><br>"
    } else {
      form.innerHTML = "<p>Select an option!</p><br>"
    }
  })
});