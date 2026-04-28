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
  document.getElementById("clock").innerHTML = now.toLocaleTimeString();
}

function upLate() {
  var today = new Date();
  var hour = today.getHours();

  if (hour > 16) {
  document.getElementById("upLate").innerHTML = `Working late huh?`;
  } else if (hour > 12 && hour < 16) {
    document.getElementById("upLate").innerHTML = `Good Afternoon!`;
  } else {
    document.getElementById("upLate").innerHTML = `Good Morning!`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateClock, 1000);
  updateClock();
  upLate();
});

