//Gets the HTML object canvas from webpage (document)
let canvas = document.querySelector("canvas");
//Gets the graphics
const graphics = canvas.getContext("2d");
//Declare Variables
let rockX= 800;
let rockY = 479;
let y = 408;
let x = 100;
let fps = 3;
let frame = 1
//Molecule sprites
const mImage1 = new Image();
mImage1.src = "Molecule_1.png"
const mImage2 = new Image();
mImage2.src = "Molecule_2.png"
const mImage3 = new Image();
mImage3.src = "Molecule_3.png"



function animation()
{
clear();
rock();
rockX -= 50;
moleculeImage(x,y);
jump();
if(y < 408)
{
y+= 20;
}

}


function rock()
{
    graphics.fillStyle = "gray";
    graphics.beginPath();
    graphics.arc(rockX,rockY,20,0,Math.PI*2);
    graphics.fill();
    graphics.closePath();

}
function jump(event)
{
    document.addEventListener('keyup', function(event) 
    {
 
    if (y == 408){
        if(event.key === 'Enter')
        {
             y = 328;
        }
    }
}
    )
}

function moleculeImage(x,y)
{
if(frame == 1 || frame == 3)
{graphics.drawImage(mImage1,x,y,100,100);}
else if(frame == 2)
{graphics.drawImage(mImage2,x,y,100,100);}
else
{graphics.drawImage(mImage3,x,y - 8,100,100);}
frame++;
if(frame > 4 ){
    frame = 1 ;
}
}
//Clear
function clear()
{
    graphics.fillStyle = "#FFEEDD";
    graphics.fillRect(0,0,canvas.width,canvas.height);
}







window.setInterval(animation,500/fps);