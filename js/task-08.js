const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", form);

function form() {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const obj = { email: email.value, password: password.value };
    console.log(obj);
    formEl.reset();
  }
}
