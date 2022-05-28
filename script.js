let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
function checkBoxes() {
  let trigger = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    let topBox = box.getBoundingClientRect().top;
    if (topBox < trigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
