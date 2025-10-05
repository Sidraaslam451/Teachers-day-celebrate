let confettiCanvas = document.getElementById("confetti-canvas");
let ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiPieces = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: random(0, confettiCanvas.width),
      y: random(0, confettiCanvas.height),
      size: random(5, 10),
      speed: random(1, 3),
      angle: random(0, 2 * Math.PI),
      color: `hsl(${random(0, 360)}, 100%, 50%)`
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confettiPieces.forEach(p => {
    p.y += p.speed;
    p.x += Math.sin(p.angle) * 2;

    if (p.y > confettiCanvas.height) {
      p.y = 0;
      p.x = random(0, confettiCanvas.width);
    }
  });
}

function startConfetti() {
  createConfetti();
  drawConfetti();
}
