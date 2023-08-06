import "virtual:uno.css";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  document.getElementById("email-confirmation").innerText =
    event.target.elements.email.value;
  event.target.elements.email.value = "";
  delete document.querySelector("form").dataset.dirty;
  document.querySelector("dialog").showModal();
});

document.querySelector("input").addEventListener("blur", () => {
  document.querySelector("form").dataset.dirty = true;
});
