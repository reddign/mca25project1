let canvas = document.querySelector("canvas");
const graphics = canvas.getContext("2d");

const player = {
  x: canvas.width/40,
  y: canvas.height/1.1,
  speed: 5,
  velocityY: 0, // Represents vertical velocity (for jumping/falling)
  isJumping: false, // Flag to track if the player is currently jumping
};
const gravity = 0.5; // Controls the strength of gravity, adjust as needed
const jumpForce = -20; // The initial upward force when jumping
const groundLevel = 800; // The Y-position where the player lands
const platform_1 = 500 - 20;
let plat_x = player.x;

const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

let frame = 1

function platform(x,y){
    graphics.fillStyle = "black";
    graphics.fillRect(x,y,800,100);
    if(x == plat_x){
      player.isJumping = true; // Reset jump state
}}



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

platform();

function gameLoop() {
    update(); // Update game state
    draw(); // Render game elements
    platform(100,500);
    platform(200, 700);
    requestAnimationFrame(gameLoop); // Schedule next frame
    GazeeboIdle();
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
  player.y = Math.max(0, Math.min(canvas.height - 40, player.y));
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
if(frame == 1 || frame == 7.5)
{graphics.drawImage(mImage2,player.x - 20, player.y - 60,60,80);}
// else if(frame == 15)
// {graphics.drawImage(mImage2,player.x,player.y,60,80);}
// else if(frame == 22.5)
// {graphics.drawImage(mImage3,player.x,player.y,60,80);}
// else if(frame == 30)
// {graphics.drawImage(mImage4,player.x,player.y,60,80);}
else {
graphics.drawImage(mImage2,player.x - 20, player.y - 60, 60, 80);
}
frame++;
if(frame > 61 )
    {frame = 1 ;
}
}

gameLoop();

window.setInterval(animation,1000/30);