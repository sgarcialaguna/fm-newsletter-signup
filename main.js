import "virtual:uno.css";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  document.getElementById("email-confirmation").innerText =
    event.target.elements.email.value;
  document.querySelector("dialog").showModal();
});

document
  .getElementById("closeDialog")
  .addEventListener("click", () => document.querySelector("dialog").close());
