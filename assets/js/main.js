(function main() {
  // Code
  const previewEl = document.getElementById("preview");
  const textEl = document.getElementById("text");

  textEl.addEventListener("input", (event) => {
    const innerHTML = event.target.value
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");
    previewEl.innerHTML = innerHTML;
  });

  document.querySelectorAll('input[name="font"]').forEach((input) => {
    input.addEventListener("change", (event) => {
      previewEl.dataset.font = event.target.value;
    });
  });
})();
