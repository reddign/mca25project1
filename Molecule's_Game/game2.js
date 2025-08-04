//Gets the HTML object canvas from webpage (document)
let canvas = document.querySelector("canvas");
//Gets the graphics
const graphics = canvas.getContext("2d");
//Declare Variables
let x = 100;
let y = 100;
window.setInterval(animation,1000/fps);
function animation(){
clear();
block();
move();
}
function move(){
x+= 40;
y+= 40;
}
//Ball
function block(){
graphics.fillStyle = "#00C15D";
graphics.fillRect(x,y,80,80);
    

}
//Clear
function clear(){
    graphics.fillStyle = "#FFEEDD";
    graphics.fillRect(0,0,canvas.width,canvas.height);
}