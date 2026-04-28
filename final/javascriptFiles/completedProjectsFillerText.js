const dateText1 = [
`March 12, 2024`
`April 5, 2024`
`May 20, 2024`
];

const fillerText1 = [
`Campus Event Mobile App Prototype`
`Student Resource Website`
`Club Discord Bot Development`
`Recycled PC Refurbishment Project`
];

const dateText2 = [
`June 18, 2024`
`July 9, 2024`
`August 2, 2024`
];

const fillerText2 = [
`Cybersecurity Awareness Campaign`
`Open Source Contribution Sprint`
`Arduino Smart Garden System`
`Local Nonprofit Website Redesign`
];

const dateText3 = [
`September 14, 2024`
`October 7, 2024`
`November 22, 2024`
];

const fillerText3 = [
`Resume Builder Web Tool`
`Campus Wi-Fi Heatmap Survey`
`Intro to Coding Workshop Series`
`Simple Game Development Showcase`
];

document.addEventListener("DOMContentLoaded", () => {
  const fillerDate = document.querySelector("fillerDate1");

  const random = Math.floor(Math.random() * dateText1.length);

  fillerDate.innerHTML = `${dateText1[random]}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const fillerDate2 = document.querySelector("fillerDate2");

  const random = Math.floor(Math.random() * dateText2.length);

  fillerDate2.innerHTML = `${dateText2[random]}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const fillerDate3 = document.querySelector("fillerDate3");

  const random = Math.floor(Math.random() * dateText3.length);

  fillerDate3.innerHTML = `${dateText3[random]}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const fillerText = document.querySelector("fillerText");

  const random = Math.floor(Math.random() * fillerText.length);

  fillerText.innerHTML = `${fillerText[random]}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const fillerText2 = document.querySelector("fillerText2");

  const random = Math.floor(Math.random() * fillerText2.length);

  fillerText2.innerHTML = `${fillerText3[random]}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const fillerText3 = document.querySelector("fillerText3");

  const random = Math.floor(Math.random() * fillerText3.length);

  fillerText3.innerHTML = `${fillerText3[random]}`;
});