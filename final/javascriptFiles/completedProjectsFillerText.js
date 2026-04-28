const dateText1 = [
  "March 12, 2024",
  "April 5, 2024",
  "May 20, 2024"
];

const projectText1 = [
  "Campus Event Mobile App Prototype",
  "Student Resource Website",
  "Club Discord Bot Development"
];

const dateText2 = [
  "June 18, 2024",
  "July 9, 2024",
  "August 2, 2024"
];

const projectText2 = [
  "Cybersecurity Awareness Campaign",
  "Open Source Contribution Sprint",
  "Arduino Smart Garden System"
];

const dateText3 = [
  "September 14, 2024",
  "October 7, 2024",
  "November 22, 2024"
];

const projectText3 = [
  "Resume Builder Web Tool",
  "Campus Wi-Fi Heatmap Survey",
  "Intro to Coding Workshop Series"
];

document.addEventListener("DOMContentLoaded", () => {
  const rand1 = Math.floor(Math.random() * dateText1.length);
  const rand2 = Math.floor(Math.random() * dateText2.length);
  const rand3 = Math.floor(Math.random() * dateText3.length);

  document.querySelector("#fillerDate").textContent = dateText1[rand1];
  document.querySelector("#fillerText").textContent = projectText1[rand1];

  document.querySelector("#fillerDate2").textContent = dateText2[rand2];
  document.querySelector("#fillerText2").textContent = projectText2[rand2];

  document.querySelector("#fillerDate3").textContent = dateText3[rand3];
  document.querySelector("#fillerText3").textContent = projectText3[rand3];
});