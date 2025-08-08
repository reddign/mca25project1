/*************************************************************************************************************************
    Programmer: Luca J. M. Suliveras with assistance from Teddy Bayzar
    Git: TStarfall-Luca
************************************************************************************************************************/


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

const shipparts = [
  {x:30, y:30, width:50, height:50},
];

const winboxes = [
  { x: 0, y: 0, width: 110, height: 100},
]


const groundLevel = canvas.height - 10;
const gravity = 0.5; // Controls the strength of gravity, adjust as needed
const jumpForce = -15; // The initial upward force when jumping
let i = 0

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
  graphics.fillStyle = "#1d4910ff";
  graphics.fillRect(0,0,canvas.width,canvas.height);
  graphics.strokeRect(0,0,canvas.width,canvas.height);
  graphics.fillStyle = "#60f50bff";
  graphics.strokeStyle = "#f4f0f3ff";
  graphics.font = "bold 50px '', monospace"
  graphics.fillText("You did it! You got the landing leg!", 210,250);
  graphics.fillText("But wait, don't you need the ship core too?",210,300);
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

//attempt 1
// function collect(){
//   // if (player.x > shipparts.x && player.y > shipparts.y && player.width > shipparts.width && player.height > shipparts.height) {

//   for(const winbox of winboxes){
//     if(player.width > shipparts.width && player.height <= shipparts.height){
//       winscreen(winbox);
//       console.log("why isn't this working?")
//     }else{
//       console.log("crap.")
//     }
//   }
// }

//attempt 2
// function collect(){
//   for(let i = 0; i < 0; i ++){
//     if(i==1){
//       winscreen(winbox);
//     }else if(i==0){
//       console.log("why isn't this working?")
//     }
//   }
//   if(player.x < shipparts.x && player.y < shipparts.y && player.width < shipparts.width && player.height < shipparts.height){
//     i+=1
//   }
// }

//attempt 3 (god freaking dammit dude this better work)
//im getting closer but it's still not quite there
function wincollision(){
  const playerL = player.x;
  const playerR = player.x + player.width;
  const playerT = player.y;
  const playerB = player.y + player.height;

  const winboxL = winboxes.x;
  const winboxR = winboxes.x + winboxes.width;
  const winboxT = winboxes.y;
  const winboxB = winboxes.y + winboxes.height

  if(playerR >= winboxL && playerL <= winboxR && playerB >= winboxT && playerT <= winboxB){
    winscreen();
  }
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

function gameLoop(){
  update(); // Update game state
  draw(); // Render game elements
  teacher();
  requestAnimationFrame(gameLoop); // Schedule next frame
  GazeeboIdle();
  // winscreen();
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
  if(wincollision(winboxes)) {
    winscreen();
  }else{
    console.log ("ughhhhh")
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

    graphics.fillStyle = "#ff0000ff";
    for (const winbox of winboxes) {
      graphics.fillRect(winbox.x, winbox.y, winbox.width, winbox.height);
    }

    ship_part();
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
let mImage5 = new Image();
mImage5.src = "prites/ship_parts/shippart1.png";

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

function ship_part(){
  for (const shippart of shipparts) {
    graphics.drawImage(mImage5, shippart.x, shippart.y, shippart.width, shippart.height);
  }
}

gameLoop();
window.setInterval(500/9);
