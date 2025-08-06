let canvas = document.querySelector("canvas");
const graphics = canvas.getContext("2d");

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed: 5,
  velocityY: 0, // Represents vertical velocity (for jumping/falling)
  isJumping: false, // Flag to track if the player is currently jumping
};
const gravity = 0.5; // Controls the strength of gravity, adjust as needed
const jumpForce = -20; // The initial upward force when jumping
const groundLevel = 700 - 20; // The Y-position where the player lands

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
    // GazeeboIdle();
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
  graphics.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  graphics.fillStyle = "blue"; // Set player color
  graphics.fillRect(player.x, player.y, 20, 20); // Draw the player as a rectangle
}

// animations
const mImage1 = new Image();
mImage1.src = "prites/Gazeebo.png"
const mImage2 = new Image();
mImage2.src = "prites/Gazeebo1.png"
const mImage3 = new Image();
mImage3.src = "prites/Gazeebo2.png"
const mImage4 = new Image();
mImage4.src = "prites/Gazeebo3.png"

function GazeeboIdle(x,y){
if(frame == 1)
{graphics.drawImage(mImage1,x,y,60,80);}
else if(frame == 16)
{graphics.drawImage(mImage2,x,y,60,80);}
else if(frame == 31)
{graphics.drawImage(mImage3,x,y,60,80);}
else if(frame == 46)
{graphics.drawImage(mImage4,x,y,60,80);}
frame++;
if(frame > 61 ){
    frame = 1 ;
}
}

gameLoop();