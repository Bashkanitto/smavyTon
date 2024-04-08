const checkbox = document.getElementById("checkbox");
const body = document.body;

let theme = localStorage.getItem("theme") || "light";

if (theme === "dark") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

checkbox.addEventListener("click", function () {
  if (theme == "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }

  localStorage.setItem("theme", theme);

  body.classList.toggle("dark");
});
