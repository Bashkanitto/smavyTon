const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
})

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
})


localStorage


/* const checkbox = document.getElementById("checkbox");
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
}); */

document.getElementById("loginForm").addEventListener("submit", function(event) {
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Вы не ввели достаточно информации");
        event.preventDefault(); // Предотвращаем отправку формы
    }
}); 