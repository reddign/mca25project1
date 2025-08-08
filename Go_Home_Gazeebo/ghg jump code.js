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
  { x: 920, y: 500, width: 200, height: 700 },
  { x: 760, y: 650, width: 150, height: 400 },
  { x: 600, y: 800, width: 150, height: 100 },
  { x: 1130, y: 750, width: 250, height: 400 },

  //floating platforms for ship part 1 (first to last)
  { x: 490, y: 500, width: 250, height: 50 },
  { x: 10, y: 400, width: 250, height: 50 },

  //area to last shippart (first to last)
  { x: 1300, y: 500, width: 595, height: 50 },
  { x: 1500, y: 300, width: 395, height: 50 },
  { x: 1100, y: 100, width: 200, height: 50 },

  //end plats for last shippart
  { x: 800, y: 100, width: 200, height: 50},
  { x: 10, y: 100, width: 730, height: 50},
];

const platforms_bg = [
  //background walls
  { x: 0, y: 90, width: 750, height: 1050},
  { x: 1290, y: 500, width: 600, height: 5000 },
  { x: 1490, y: 300, width: 600, height: 5000 },
  { x: 1090, y: 100, width: 220, height: 5000 },
  { x: 790, y: 100, width: 220, height: 5000},

];

// const shipparts = [
//   {x:50, y:40, width:50, height:50, collected: false},
//   {x:1830, y:830, width:50, height:50, collected: false},
//   {x:25, y:330, width:50, height:50, collected: false}
// ];

const shippart1 = { x: 50, y: 40, width: 50, height: 50, collected: false };
const shippart2 = { x: 1830, y: 830, width: 50, height: 50, collected: false };
const shippart3 = { x: 25, y: 330, width: 50, height: 50, collected: false };

const groundLevel = canvas.height - 10;
const gravity = 0.5; // Controls the strength of gravity, adjust as needed
const jumpForce = -15; // The initial upward force when jumping
let parts_collect = 0;
let i = 0;
let shippartCollected = false;

const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

let frame = 1;

function teacher(){
  graphics.strokeStyle = "#f4f0f3ff";
  graphics.font = "bold 25px '', monospace";
  //left side of map
  graphics.fillText("Press W to jump, and A and D", 60,700);
  graphics.fillText("to move left and right respectively!", 10, 730);

  //right side of map
  graphics.fillText("Your goal is to retrieve", 1460,700);
  graphics.fillText("the missing ship leg at the", 1440, 730);
  graphics.fillText("top of the hill. Good Luck!", 1450, 760);
}

function winscreen(){
  graphics.strokeStyle = "#f4f0f3ff";
  graphics.fillStyle = "#010001ff";
  graphics.fillRect(0,0,canvas.width,canvas.height);
  graphics.strokeRect(0,0,canvas.width,canvas.height);
  graphics.fillStyle = "#60f50bff";
  graphics.strokeStyle = "#f4f0f3ff";
  graphics.font = "bold 25px '', monospace"
  graphics.fillText("You did it! You got the ship leg!", 210,250);
  graphics.fillText("But wait, don't you need the ship core too?",210,300);
}

function isColliding(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function collect() {
  // Check for each part individually
  if (!shippart1.collected && isColliding(player, shippart1)) {
    shippart1.collected = true;
    parts_collect++;
  }

  if (!shippart2.collected && isColliding(player, shippart2)) {
    shippart2.collected = true;
    parts_collect++;
  }

  if (!shippart3.collected && isColliding(player, shippart3)) {
    shippart3.collected = true;
    parts_collect++;
  }

  // Check for win
  if (parts_collect >= 3) {
    winscreen();
    return;
  }

  // Draw each uncollected part individually
  if (!shippart1.collected) {
    graphics.drawImage(mImage6, shippart1.x, shippart1.y, shippart1.width, shippart1.height);
  }
  if (!shippart2.collected) {
    graphics.drawImage(mImage7, shippart2.x, shippart2.y, shippart2.width, shippart2.height);
  }
  if (!shippart3.collected) {
    graphics.drawImage(mImage8, shippart3.x, shippart3.y, shippart3.width, shippart3.height);
  }
}

function checkPlatformCollision(platform) {
  const playerL = player.x;
  const playerR = player.x + player.width;
  const playerT = player.y;
  const playerB = player.y + player.height;

  const platformL = platform.x;
  const platformR = platform.x + platform.width;
  const platformT = platform.y;
  // const platformB = platform.y*-1;

  if (
    playerR > platformL &&
    playerL < platformR &&
    playerB >= platformT &&
    playerT <= platformT &&
    // player.height <= platformB &&
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
  teacher();
  requestAnimationFrame(gameLoop); // Schedule next frame
  GazeeboIdle();
  collect();
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
    //bg
    graphics.fillStyle = "#133751";
    for (const platform of platforms_bg) {
      graphics.fillRect(platform.x, platform.y, platform.width, platform.height);
    }
    //border
    graphics.fillStyle = "#117e39ff";
    for (const platform of platforms) {
      graphics.fillRect(platform.x-10, platform.y-10, platform.width+20, platform.height+20);
    }
    //fill
    graphics.fillStyle = "#00c15d";
    for (const platform of platforms) {
      graphics.fillRect(platform.x, platform.y, platform.width, platform.height);
    }

    // Draw the ground
    graphics.fillStyle = "#117e39ff"; // Brown color for the ground
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
const mImage6 = new Image();
mImage6.src = "prites/ship_parts/shippart1.png";
const mImage7 = new Image();
mImage7.src = "prites/ship_parts/shippart2.png";
const mImage8 = new Image();
mImage8.src = "prites/ship_parts/shippart3.png";


function GazeeboIdle() {
  if (frame > 0 && frame < 11) {
    graphics.drawImage(mImage1, player.x-10, player.y - 20, 60, 80);
  } else if(frame > 10 && frame < 21){
    graphics.drawImage(mImage2, player.x-10, player.y - 20, 60, 80);
  } else if(frame > 20 && frame < 31){
    graphics.drawImage(mImage3, player.x-10, player.y - 20, 60, 80);
  } else if(frame> 30 && frame < 41){
    graphics.drawImage(mImage4, player.x-10, player.y - 20, 60, 80);
  }
  frame++;
  if (frame > 40) {
    frame = 1;
  }
}

gameLoop();
window.setInterval(animation, 500 / 9);
