// The sample portfolio exports a message locally for the class demo.
const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
const draft = document.querySelector("#draft");

form.addEventListener("input", (event) => {
  event.target.setCustomValidity("");
  status.textContent = "";
  draft.hidden = true;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const sender = form.elements.name;
  const message = form.elements.message;
  for (const field of [sender, message]) {
    if (field.value.trim() === "") {
      field.setCustomValidity("Please enter text in this field.");
      field.reportValidity();
      return;
    }
  }

  const lines = [
    "To: Mira Rao <mira.rao@example.com>",
    `From: ${sender.value.trim()} <${form.elements.email.value.trim()}>`,
    "",
    message.value.trim()
  ];
  const text = lines.join("\r\n");
  document.querySelector("#draft-text").textContent = text;
  const link = document.querySelector("#save-draft");
  link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
  draft.hidden = false;
  status.textContent = "Your draft is ready.";
});
