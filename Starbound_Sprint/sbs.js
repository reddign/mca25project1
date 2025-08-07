/*************************************************************************************************************************
    Programmer: Ryan L
    Git: SF-rj
************************************************************************************************************************/
//Gets the HTML object canvas from webpage (document)
let canvas = document.querySelector("canvas");
//Gets the graphics
const graphics = canvas.getContext("2d");
let x = 500
let y = 435
let interval = ""
let enemyX =     [-10,-10,1030,-4,-4,1030,1080,-4,-4,-4]
let enemyY =     [400,335,270,190,130,60,60,20]
let enemySpeed = [20,22,23,25,18,30,20,30]
let enemyDirection =[1,1,-1,1,1,-1,-1,1]
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};





function screen()
{
        graphics.strokeStyle ="#f4f0f3ff"
        graphics.fillStyle = "#010001ff";
        graphics.fillRect(0,0,canvas.width,canvas.height);
        graphics.strokeRect(0,0,canvas.width,canvas.height);
        graphics.fillStyle = "#f4f0f3ff";
        graphics.strokeStyle = "#f4f0f3ff";
        graphics.font = "bold 25px '', monospace"
        graphics.fillText("You crashed the ship! Try again? click the mouse.",180,250);
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

        if((enemyX[i] >= x - 30 && enemyX[i] <= x + 30))
        {
            if(y >= enemyY[i] - 35 && y <= enemyY[i] + 45){
             screen();
             window.clearInterval(interval);
            }
         }
         
    }
}
function enemyMovement(r){
enemyX[r] += (enemySpeed[r] * enemyDirection[r]);
}
function enemy(r){
graphics.fillStyle = "#d16262ff";
graphics.fillRect(enemyX[r],enemyY[r],50,50);
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
graphics.fillStyle = "#f6ffb4ff";
graphics.fillRect(x,y,40,40);
}
function checkKeys()
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
        if (keys.a && x > 18)
            {x -= 18;}
        else if(keys.d && x < canvas.width- 58)
            {x += 18;}
        else if(keys.s && y < canvas.height - 58)
            {y += 18;}
        else if(keys.w)
            {y -= 18;}
}


interval =  window.setInterval(animation,200);