/*Luca

LAYOUT FOR GO HOME GAZEEBO (POINT N CLICK):
    Farm (Part 1)
    City
    Mesa Canyon (Part 2)
    Beach
    Underwater City (Part 3)
    Forest
    Jungle (Part 4)
    Snowy Plains
    Mountain (Part 5)
    End Scene (From Mountain Top)

LAYOUT FOR GO HOME GAZEEBO (Platformer where each level ends with a ship part being collected):
    Farm
    Canyon
    Jungle
    Icy Forest
    Mountain

*/

    
//Gets the HTML object canvas from webpage (document)
let canvas = document.querySelector("canvas");
//Gets the graphics
const graphics = canvas.getContext("2d");
//Declare Variables
let x = 700;
let y = 432;
let FPS = 60;
let speed = 2;

//animation()



function animation(){
    clear();
    jump();
    if (y < 432) {
        y+= 5;
    }
    walkleft();
    player();
}



//Gazeebo
function player(){
graphics.fillStyle = "#00C15D";
graphics.fillRect(x,y,60,80);
}

//Clear
function clear(){
    graphics.fillStyle = "#FFEEDD";
    graphics.fillRect(0,0,canvas.width,canvas.height);
}

//Moving
function jump(){
    document.addEventListener('keypress', function(event) {

        if (y == 432) {
        if (event.key == 'w') {
            for (let i=0; i<20; i++) {
                y += -10;
                console.log(y);
            }
}
 } }) }

function walkleft(){
    document.addEventListener('keypress', function(event) {

        if (event.key == 'a') {
            for (let i=0; i<20; i++) {
                x += -10;
                console.log(x);
            }
    }})}  



function movingstuff(){
    x = x + speed*directionX;
    y = y + speed*directionY;
}



window.setInterval(animation,1000/FPS);