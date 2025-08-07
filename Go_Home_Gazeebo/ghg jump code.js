let canvas = document.querySelector("canvas");
const graphics = canvas.getContext("2d");

canvas.width = 1905;
canvas.height = 900;

const player = {
  x: canvas.width / 40,
  y: canvas.height / 1.1,
  width: 40,  // Define player's width
  height: 60, // Define player's height
  speed: 5,
  velocityY: 0, // Represents vertical velocity (for jumping/falling)
  isJumping: false, // Flag to track if the player is currently jumping
};

const platforms = [
  //first platform
  { x: 200, y: 800, width: 100, height: 100 },

  //platform heirarchy (last to first)
  { x: 800, y: 400, width: 150, height: 100 },
  { x: 760, y: 650, width: 100, height: 400 },
  { x: 600, y: 800, width: 150, height: 100 },
];

const groundLevel = canvas.height - 10;
const gravity = 0.5; // Controls the strength of gravity, adjust as needed
const jumpForce = -20; // The initial upward force when jumping

const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

let frame = 1;

function checkPlatformCollision(platform) {
  const playerL = player.x;
  const playerR = player.x + player.width;
  const playerT = player.y;
  const playerB = player.y + player.height;

  const platformL = platform.x;
  const platformR = platform.x + platform.width;
  const platformT = platform.y;

  if (
    playerR > platformL &&
    playerL < platformR &&
    playerB >= platformT &&
    playerT <= platformT &&
    player.velocityY >= 0
  ) {
    return true;
  }
  return false;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "w" && !player.isJumping) {
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
  GazeeboIdle();
}

function update() {
  if (keys.a) player.x -= player.speed;
  if (keys.d) player.x += player.speed;

  // Apply gravity
  player.velocityY += gravity;
  player.y += player.velocityY;

  // Check for collision with the ground
  if (player.y >= groundLevel - player.height) {
    player.y = groundLevel - player.height;
    player.velocityY = 0;
    player.isJumping = false;
  }

  // Loop through all platforms to check for collisions
  for (const platform of platforms) {
    if (checkPlatformCollision(platform)) {
      player.y = platform.y - player.height; // Snap the player to the top of the platform
      player.velocityY = 0; // Stop vertical movement
      player.isJumping = false; // Reset jump state
    }
  }

  // Boundary checks
  player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
}

function draw() {
  graphics.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas once at the beginning


    // Draw the platforms
    graphics.fillStyle = "#008b1eff";
    for (const platform of platforms) {
      graphics.fillRect(platform.x-10, platform.y-10, platform.width+20, platform.height+20);
    }
    graphics.fillStyle = "#00ad26ff";
    for (const platform of platforms) {
      graphics.fillRect(platform.x, platform.y, platform.width, platform.height);
    }

    // Draw the ground
    graphics.fillStyle = "#196801ff"; // Brown color for the ground
    graphics.fillRect(0, groundLevel, canvas.width, canvas.height - groundLevel);

    // // Draw the player as a blue rectangle
    // graphics.fillStyle = "blue";
    // graphics.fillRect(player.x, player.y, player.width, player.height);
}

// Animations for the player (GazeeboIdle)
const mImage1 = new Image();
mImage1.src = "prites/Gazeebo.png";
const mImage2 = new Image();
mImage2.src = "prites/Gazeebo1.png";
const mImage3 = new Image();
mImage3.src = "prites/Gazeebo2.png";
const mImage4 = new Image();
mImage4.src = "prites/Gazeebo3.png";

function GazeeboIdle() {
  if (frame > 0 && frame < 11) {
    graphics.drawImage(mImage1, player.x-10, player.y - 20, 60, 80);
  } else if(frame > 10 && frame < 21){
    graphics.drawImage(mImage2, player.x-10, player.y - 20, 60, 80);
  } else if(frame > 20 && frame < 31){
    graphics.drawImage(mImage3, player.x-10, player.y - 20, 60, 80);
  } else if(frame> 30 && frame < 41){
    graphics.drawImage(mImage3, player.x-10, player.y - 20, 60, 80);
  }
  frame++;
  if (frame > 40) {
    frame = 1;
  }
}

gameLoop();
window.setInterval(animation, 500 / 9);
