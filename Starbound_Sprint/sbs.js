/*************************************************************************************************************************
    Programmer: Ryan L
    Git: SF-rj
************************************************************************************************************************/
//Gets the HTML object canvas from webpage (document)
let canvas = document.querySelector("canvas");
//Gets the graphics
const graphics = canvas.getContext("2d");
let x = 500
let y = 430
let interval = ""
let enemyX = [-10,-10,1030,4,-4,-4,-4,-4,-4,-4]
let enemyY = [400,345,290,20,360,250,100,20]
let enemySpeed = [20,22,23,20,25,18,20,30]
let enemyDirection =[1,1,-1,-1,1,1,-1,1]
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};





clear();
function animation()
{
    clear();
    player();
    enemy(0);
    enemy(1);
    enemy(2);
    checkKeys();
    for(let i = 0; i < enemyX.length; i++)
    {
      
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


window.setInterval(animation,200);