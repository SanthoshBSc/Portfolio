// Example JS for form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    form.reset();
  });
});
