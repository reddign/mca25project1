const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed: 5,
  velocityY: 0, // Represents vertical velocity (for jumping/falling)
  isJumping: false, // Flag to track if the player is currently jumping
};
const gravity = 0.5; // Controls the strength of gravity, adjust as needed
const jumpForce = -10; // The initial upward force when jumping
const groundLevel = canvas.height - 20; // The Y-position where the player lands

const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

document.addEventListener("keydown", (e) => {
  if (e.key === "w" && player.y >= groundLevel) { // Only jump if on the ground
    player.isJumping = true;
    player.velocityY = jumpForce; // Apply upward jump force
  }
  if (e.key === "a") keys.a = true;
  if (e.key === "s") keys.s = true;
  if (e.key === "d") keys.d = true;
});


document.addEventListener("keyup", (e) => {
  if (e.key === "w") keys.w = false;
  if (e.key === "a") keys.a = false;
  if (e.key === "s") keys.s = false;
  if (e.key === "d") keys.d = false;
});

function gameLoop() {
  update(); // Update game state
  draw(); // Render game elements
  requestAnimationFrame(gameLoop); // Schedule next frame
}

function update() {
  if (keys.a) player.x -= player.speed;
  if (keys.d) player.x += player.speed;

  // Apply gravity
  player.velocityY += gravity;
  player.y += player.velocityY;

  // Prevent the player from falling through the ground
  if (player.y >= groundLevel) {
    player.y = groundLevel;
    player.velocityY = 0; // Stop vertical movement
    player.isJumping = false; // Reset jump state
  }

  // Boundary checks (ensure these are after gravity and grounding)
  player.x = Math.max(0, Math.min(canvas.width - 20, player.x));
  player.y = Math.max(0, Math.min(canvas.height - 20, player.y));
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.fillStyle = "blue"; // Set player color
  ctx.fillRect(player.x, player.y, 20, 20); // Draw the player as a rectangle
}

gameLoop();