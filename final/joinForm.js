const joinMessage = [

]

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener("submit", function(e) {
    console.log("script is running");

    e.preventDefault();

    const selected = document.querySelector('input[name="experienceLevel"]:checked');
    const form = document.querySelector("form");

    if (selected.value === "Dean") {
      form.innerHTML = `
        <p>Hello, Dean, have you seen this yet?</p>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/watch?v=b0IWVeqvQGk"
          title="FFXIV Evercold Teaser Trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      `;
    } else {
      form.innerHTML = "<p>You can join!</p>";
    }
  })
});