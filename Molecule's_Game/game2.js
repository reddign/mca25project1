//Gets the HTML object canvas from webpage (document)
let canvas = document.querySelector("canvas");
//Gets the graphics
const graphics = canvas.getContext("2d");
//Declare Variables
let rockX= 800;
let rockY = 479;
let y = 420;
let x = 100;
let fps = 3;





function animation()
{
clear();
rock();
rockX -= 50;
block(x,y);
jump();
if(y < 420)
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
 
    if (y == 420){
        if(event.key === 'Enter')
        {
             y = 320;
        }
    }
}
    )
}


// document.addEventListener('keydown', function(event) {
//         console.log('Key Pressed:', event.key); // Logs the character of the pressed key
//         console.log('Key Code:', event.code); // Logs the physical key code
//         if (event.key === 'Enter') {
//             console.log('Enter key was pressed!');
//         }
//         if (event.ctrlKey && event.key === 's') {
//             console.log('Ctrl + S was pressed!');
//         }
//     });

function block(x,y)
{
graphics.fillStyle = "#00C15D";
graphics.fillRect(x,y,80,80);
}
//Clear
function clear()
{
    graphics.fillStyle = "#FFEEDD";
    graphics.fillRect(0,0,canvas.width,canvas.height);
}







window.setInterval(animation,500/fps);