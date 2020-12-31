/* ---- particles.js config ---- */

function removeStart() {
  const start = document.getElementById("start");
  start.style.display = "none";

  setInterval(() => {
    const message = document.getElementById("message");
    message.style.transform = "scale(1)";
    message.style.opacity = "1";
  }, 200);
}
