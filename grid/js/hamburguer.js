const button = document.querySelector("#hamburguerContainer");
const nav = document.querySelector("nav");

button.addEventListener("click", (e) => {
  button.classList.toggle("open");
  if (button.className === "open") {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
