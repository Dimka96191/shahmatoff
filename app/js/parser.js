window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  function recurcy(element) {
    element.childNodes.forEach((node) => {
      console.log(node);
      if (element.childNodes.lenght > 1) {
        recurcy(node);
      }
    });
  }
  recurcy(body);
});
