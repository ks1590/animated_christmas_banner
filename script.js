function bubbles() {
  let count = 200;
  let section = document.querySelector("section");
  let i = 0;
  while (i < count) {
    let bubble = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    let size = Math.random() * 10;
    bubble.style.left = x + "px";
    bubble.style.top = y + "px";
    bubble.style.width = 1 + size + "px";
    bubble.style.height = 1 + size + "px";

    bubble.style.animationDuration = size + "s";
    bubble.style.animationDelay = -size + 's';

    section.appendChild(bubble);
    i++
  }
}
bubbles();
