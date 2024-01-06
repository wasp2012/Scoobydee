const icons = ["fa-star", "fa-heart", "fa-bolt", "fa-bomb", "fa-bolt"];
const colors = [
  "89b4fa",
  "74c7ec",
  "89dceb",
  "94e2d5",
  "a6e3a1",
  "f9e2af",
  "fab387",
  "eba0ac",
  "f38ba8",
];
let delay = 0;
document.onmousemove = (e) => {
  delay += 1;
  if (delay < 3) return;
  delay = 0;
  const dots = document.getElementsByClassName("dot");
  const dot = dots[0].cloneNode(false);
  dot.classList.add(
    "fa-solid",
    icons[Math.floor(Math.random() * icons.length)]
  );
  dot.style.color = "#" + colors[Math.floor(Math.random() * colors.length)];
  const x = dot.offsetLeft + dot.clientWidth / 2;
  const y = dot.offsetTop + dot.clientHeight / 2;
  //   rotation
  for (const d of dots) {
    const angle = Math.atan2(e.clientY - y, e.clientX - x);
    d.style.transform = `rotate(${angle}rad)`;
  }
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  document.body.appendChild(dot);
  setTimeout(() => {
    document.body.removeChild(dot);
  }, 1000);
};
