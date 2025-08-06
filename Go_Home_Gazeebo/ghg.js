/*Luca

WITH A LOT OF HELP FROM TEDDY (THANK YOU SO MUCH)

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
let velocityY = 0;
let gravity = 0.8;
let jumpStrength = -20;
let groundY = 432;

//animation()

    walkleft();
    walkright();

function animation(){
    clear();

    y += velocityY;
    velocityY += gravity;

    if (y > groundY) {
        y = groundY;
        velocityY = 0;
    }


    // for (let i=0; i<20; i++) {
    //     jump();
    // }
    // if (y < 432) {
    //     y+= 5;
    // }

    player();
}



//Gazeebo
function player(){
graphics.fillStyle = "#00C15D";
graphics.fillRect(x,y,60,80);
}

//Clear
function clear(){
    graphics.fillStyle = "rgba(87, 149, 230, 1)"
    graphics.fillRect(0,0,canvas.width,canvas.height);
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'w' && y === groundY) {
        velocityY = jumpStrength;
    }
});

//Moving
// function jump(){
//     document.addEventListener('keypress', function(event) {

//         if (y == 432) {
//         if (event.key == 'w') {
//             y += -100;
// }
//  } }) }

function walkleft(){
    document.addEventListener('keydown', function(event) {

        if (event.key == 'a') {
            
                x += -5;
                console.log(x);
            
}})}  

function walkright(){
    document.addEventListener('keydown', function(event) {

        if (event.key == 'd') {
            
                x += 5;
                console.log(x);
            
}})}  



function movingstuff(){
    x = x + speed*directionX;
    y = y + speed*directionY;
}



window.setInterval(animation,1000/FPS);