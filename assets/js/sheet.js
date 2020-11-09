(function main() {
  // Code
  const outputEl = document.getElementById("output");
  const usp = new URLSearchParams(location.search);
  const text = usp.get("text");
  const font = usp.get("font");

  outputEl.innerHTML = text.replace(/\n/g, "<br>");
  output.dataset.font = font;
})();
