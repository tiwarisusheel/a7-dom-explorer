const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", () => {
  console.log("Grandparent Clicked");
  console.log("--------------------------------------------------------")
});

parent.addEventListener("click", () => {
  console.log("Parent Clicked");
});

child.addEventListener("click", () => {
  console.log("Button Clicked");
});

const grandparent2 = document.getElementById("grandparent2");
const parent2 = document.getElementById("parent2");
const child2 = document.getElementById("child2");


grandparent2.addEventListener("click", () => {
  console.log("Grandparent - Capturing");
}, true);

parent2.addEventListener("click", () => {
  console.log("Parent - Capturing");
}, true);

// Target Phase
child2.addEventListener("click", () => {
  console.log("Button - Target");
});

// Bubbling Phase
parent2.addEventListener("click", () => {
  console.log("Parent - Bubbling");
});

grandparent2.addEventListener("click", () => {
  console.log("Grandparent - Bubbling");
});