/*************************************************************************************************************************
    Programmer: Ryan L
    Git: SF-rj
************************************************************************************************************************/
//Gets the HTML object canvas from webpage (document)
let canvas = document.querySelector("canvas");
//Gets the graphics
const graphics = canvas.getContext("2d");
let x = 500;
let y = 435;
let interval = ""
let enemyX =     [-10,-10,1030,-4,-4,1030,1060];
let enemyY =     [400,335,270,190,130,60,60,20];
let enemySpeed = [40,20,40,25,20,30,40,30];
let enemyDirection =[1,1,-1,1,1,-1,-1,1];
let gameover = false;
let dead = false;
let gameStarted = false;
let cleared = false;
let ship = new Image();
ship.src = "space_ship.png";
let rock = new Image();
rock.src = "meteor.png";
let moon = new Image();
moon.src = "moon.png";
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};
screen();




function screen()
{       
        if(gameStarted == false ){
        graphics.strokeStyle ="#583B53"
        graphics.fillStyle = "#2E273F";
        graphics.fillRect(0,0,canvas.width,canvas.height);
        graphics.strokeRect(0,0,canvas.width,canvas.height);
        graphics.fillStyle = "#00C15D";
        graphics.strokeStyle = "#00C15D";
        graphics.font = "bold 25px '', monospace"
        graphics.fillText("Help Gazeebo get home by flying to the top of the screen",110,200);
        graphics.fillText("click the mouse to start the game", 270,250);
        graphics.fillText("Use WASD to move",370,300)
        }else{
        graphics.strokeStyle ="#f4f0f3ff"
        graphics.fillStyle = "#010001ff";
        graphics.fillRect(0,0,canvas.width,canvas.height);
        graphics.strokeRect(0,0,canvas.width,canvas.height);
        graphics.fillStyle = "#f4f0f3ff";
        graphics.strokeStyle = "#f4f0f3ff";
        graphics.font = "bold 25px '', monospace"
        graphics.fillText("You crashed the ship! Try again? click the mouse.",180,250);
        }
}
function startGame(event)
{
    if(gameStarted == false && dead == false)
    {
        interval = window.setInterval(animation,200);
        gameStarted = true;
    }else if(gameStarted == true && dead == true){
        interval = window.setInterval(animation,200);
        enemyX = [-10,-10,1030,-4,-4,1030,1060];
        enemyY =     [400,335,270,190,130,60,60,20];
        enemySpeed = [40,20,40,25,20,30,40,30];
        enemyDirection =[1,1,-1,1,1,-1,-1,1];
        x = 500;
        y = 435;
        dead = false;
    }
       
}
function animation()
{
    clear();
    player();
    enemy(0);
    enemy(1);
    enemy(2);
    enemy(3);
    enemy(4);
    enemy(5);
    enemy(6);
    checkKeys();
    for(let i = 0; i < enemyX.length; i++)
    {

        if((enemyX[i] >= x - 10 && enemyX[i] <= x + 10))
        {
            if(y >= enemyY[i] - 20 && y <= enemyY[i] + 35){
             dead = true;
             screen();
             window.clearInterval(interval);
            }
         }
         
    }
    if(y <= 0)
    {
    gameover = true;
    for(let m = 0; m < enemyX.length;m++){
        if((enemyX[m] < -20|| enemyX[m] > 1040))
        {
        cleared = true;
        }else{
        cleared = false;
        break;
        }
    }
    if(cleared == true)
    {
    window.clearInterval(interval);
    x = 500;
    y = 510;
    interval =  window.setInterval(cutScene,200);
    }
    }
  
    
}

function cutScene(){
clear();
player();
y -= 30;
if(y < 0){
window.clearInterval
graphics.drawImage(moon,0,0,1000,500)
}
}
function enemyMovement(r){
enemyX[r] += (enemySpeed[r] * enemyDirection[r]);
}
function enemy(r){
graphics.fillStyle = "#d16262ff";
graphics.drawImage(rock,enemyX[r],enemyY[r],50,50);
if((enemyX[r] < -10 || enemyX[r] > 1060) && gameover == false)
{
enemyDirection[r] *= -1;
}
enemyMovement(r);
}
//function to clear the screen
function clear()
{
    graphics.fillStyle = "black";
    graphics.strokeStyle = "#13A448";
    graphics.fillRect(0,0,canvas.width,canvas.height);
    graphics.strokeRect(0,0,canvas.width,canvas.height);
    let randomx;
    let randomy;
    graphics.fillStyle = "white";
    for(let i = 0; i < 40; i++){
    randomx = Math.floor(Math.random() * (canvas.width - 10) + 10);
    randomy = Math.floor(Math.random() * (canvas.height - 10) + 10);
    graphics.beginPath();
    graphics.arc(randomx,randomy,1,0,Math.PI*2);
    graphics.stroke();
    graphics.fill();
    graphics.closePath();
    }
}

//Ship
function player()
{
graphics.drawImage(ship,x,y,40,40)
}
function checkKeys(event)
{
    document.addEventListener("keydown", (event) => {
        if (event.key === "w") keys.w = true;
        if (event.key === "a") keys.a = true;
        if (event.key === "s") keys.s = true;
        if (event.key === "d") keys.d = true;
        });
    document.addEventListener('keyup', function(event) {
        if (event.key === "w") keys.w = false;
        if (event.key === "a") keys.a = false;
        if (event.key === "s") keys.s = false;
        if (event.key === "d") keys.d = false;
    })
movement();
}
function movement(){
        if(y > -20)
        {
        if (keys.a && x > 18)
            {x -= 18;}
        else if(keys.d && x < canvas.width- 58)
            {x += 18;}
        else if(keys.s && y < canvas.height - 58)
            {y += 18;}
        else if(keys.w)
            {y -= 18;}
        }
}


