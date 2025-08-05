/*Luca

LAYOUT FOR GO HOME GAZEEBO:
    Farm (Part 1)
    City
    Mesa Canyon (Part 2)
    Beach
    Underwater City (Part 3)
    Forest
    Jungle (Part 4)
    Snowy Plains
    Mountain (Part 5)
    End Scene (From Mountain Top)*/

    
//Gets the HTML object canvas from webpage (document)
let canvas = document.querySelector("canvas");
//Gets the graphics
const graphics = canvas.getContext("2d");
//Declare Variables
let rockX= 800;
let rockY = 479;
let y = 420;






function animation()
{
clear();
rock();
rockX -= 100;
block();
jump();
}


function rock()
{
    graphics.fillStyle = "gray";
    graphics.beginPath();
    graphics.arc(rockX,rockY,20,0,Math.PI*2);
    graphics.fill();
    graphics.closePath();

}
//Ball
function block()
{
graphics.fillStyle = "#00C15D";
graphics.fillRect(100,420,80,80);
}
//Clear
function clear()
{
    graphics.fillStyle = "#FFEEDD";
    graphics.fillRect(0,0,canvas.width,canvas.height);
}







window.setInterval(animation,500);