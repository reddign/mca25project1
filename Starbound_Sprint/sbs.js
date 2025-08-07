/*************************************************************************************************************************
    Programmer: Ryan L
    Git: SF-rj
************************************************************************************************************************/
//Gets the HTML object canvas from webpage (document)
let canvas = document.querySelector("canvas");
//Gets the graphics
const graphics = canvas.getContext("2d");
let x = 750
let y = 800
let interval = ""
let enemyPosition = 
[
[100,100],//Enemy 1
[100,100],//Enemy 2
[-1000,-1000],//Enemy 3
[-1000,-1000],//Enemy 4
[-1000,-1000],//Enemy 5
[-1000,-1000],//Enemy 6
[-1000,-1000],//Enemy 7
[-1000,-1000],//Enemy 8
[-1000,-1000],//Enemy 9
[-1000,-1000],//Enemy 10
]




clear();
function animation()
{
    clear();
    player();
    movement();
}

function enemy(r){
graphics.fillStyle = "#d16262ff";
graphics.fillRect(enemyPosition[r][0],[r][1],60,60);
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
function player(){
graphics.fillStyle = "#f6ffb4ff";
graphics.fillRect(x,y,60,60);
}
function movement(){
    document.addEventListener('keyup', function(event) {

        if (event.key == 'a')
        {x += -5;}
        else if(event.key == 'd')
        {x += 5}
        else if(event.key == 'w')
        {y -= 5}
        else if(event.key == "s")
        {y += 5}
})}
    


window.setInterval(animation,300);