// Small bit of interactivity so the page has something to "change"
// when you practice making commits.

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

console.log("Link-in-bio page loaded. Try editing this file, then commit the change!");
