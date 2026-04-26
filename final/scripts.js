// Only activate click behavior on smaller screens
function isMobile() {
  return window.innerWidth <= 768;
}

document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (isMobile()) {
      e.preventDefault();

      const dropdown = this.nextElementSibling;

      // Close others
      document.querySelectorAll('.dropdown-content').forEach(d => {
        if (d !== dropdown) d.classList.remove('show');
      });

      dropdown.classList.toggle('show');
    }
  });
});

// Close if clicking outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(d => {
      d.classList.remove('show');
    });
  }
});

// Clock display
function updateClock() {
  const now = new Date();
  document.getElementById(".clock").innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

function upLate() {
  var today = new Date();
  if (today.toLocaleTimeString(hour) > 16) {
  document.getElementById(".upLate").innerHTML = "Working late huh?";
  } else {
    document.getElementById(".upLate").innerHTML = "Good Morning!"
  }
}

upLate();

const selected = document.querySelector('input[name="experienceLevel"]:checked');

if (selected) {
  console.log(selected.value);
  document.getElementById(".joinOutput").innerHTML = "You can join!"
}