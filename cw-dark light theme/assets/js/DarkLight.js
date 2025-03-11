// localStorage.getItem("theme")

let themeBox = document.querySelector(".themeBox");
let htmlElem = document.querySelector("html");

if (localStorage.getItem("theme") == "dark") {
  htmlElem.setAttribute("data-bs-theme", "dark");
} else {
  htmlElem.setAttribute("data-bs-theme", "light");
}

themeBox.addEventListener("click", () => {
  if (localStorage.getItem("theme") == "dark") {
    themeBox.classList.add("bi-brightness-high");
    themeBox.classList.remove("bi-moon");
    localStorage.setItem("theme", "light");
    htmlElem.setAttribute("data-bs-theme", "light");
  } else {
    themeBox.classList.add("bi-moon");
    themeBox.classList.remove("bi-brightness-high");
    localStorage.setItem("theme", "dark");
    htmlElem.setAttribute("data-bs-theme", "dark");
  }
});
