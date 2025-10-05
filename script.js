const btn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const confettiContainer = document.getElementById("confetti-container");

btn.addEventListener("click", () => {
  message.classList.remove("hidden");

  // Create 100 confetti dots
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random position and color
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = getRandomColor();
    confettiContainer.appendChild(confetti);

    // Remove after animation
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }

  // Disable button after click
  btn.disabled = true;
  btn.innerText = "🎉 Surprise Revealed!";
});

function getRandomColor() {
  const colors = ["#ff6f61", "#ffcc00", "#66ccff", "#cc66ff", "#00cc99"];
  return colors[Math.floor(Math.random() * colors.length)];
}
