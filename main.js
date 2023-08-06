import "virtual:uno.css";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  document.getElementById("email-confirmation").innerText =
    event.target.elements.email.value;
  document.querySelector("dialog").showModal();
});
