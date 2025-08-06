/*************************************************************************************************************************
    Programmer: Ryan L
    Git: SF-rj
************************************************************************************************************************/
//Gets the HTML object canvas from webpage (document)
    let canvas = document.querySelector("canvas");
//Gets the graphics
    const graphics = canvas.getContext("2d");
//Declare Variables
    let rockX= 1010;
    let rockY = 405;
    let birdX = 500;
    let birdY = 260;
    let score = 0;
    let y = 370;
    let x = 100;
    let fps = 9;
    let mFrames = 1
    let bFrames = 1;
    let speed = 30;
    let gameStarted = false;
//Molecule sprites
    const mImage1 = new Image();
    mImage1.src = "Molecule_1.png"
    const mImage2 = new Image();
    mImage2.src = "Molecule_2.png"
    const mImage3 = new Image();
    mImage3.src = "Molecule_3.png"
    const rImage = new Image();
    rImage.src = "Rock_optimized.png"
//Bird sprites
    const bImage1 = new Image();
    bImage1.src = "Bird_1.png"
    const bImage2 = new Image();
    bImage2.src = "Bird_2.png"
     const bImage3 = new Image();
    bImage3.src = "Bird_3.png"
//Backgrounds
    const backgrounds = [];
    const back1 = new Image();
    back1.src = "Background_1.png";
    backgrounds.push(back1);
    const back2 = new Image();
    back2.src = "Background_2.png";
    backgrounds.push(back2);
    const back3 = new Image();
    back3.src = "Background_3.png";
    backgrounds.push(back3);



function beginScreen()
{
    graphics.fillStyle = "#2E273F";
    graphics.fillRect(0,0,canvas.width,canvas.height)
    graphics.fillStyle = "#00C15D";
    graphics.strokeStyle = "#00C15D";
    graphics.font = "bold 25px '', monospace"
    let begin = "A bird has stolen the core to the spaceship";
    graphics.fillText(begin,220,200);
    graphics.fillText("Press enter to start", 375,250);

}
function startGame(event){

    
        
            if( gameStarted == false)
            {
             let interval = window.setInterval(animate,100);
             gameStarted = true;
            }
}
//Animation function to make the game move
    function animation()
    {
        clear();
        scoreBoard();
        rock();
        rockX -= speed;
        moleculeImage(x,y);
        birdImage(birdX,birdY);
        jump();
        if(y < 370)
        {y += 15;}
        if(rockX < -50)
        {rockX = 1010;}
        if(rockX > 120 && rockX <= 160 && y == 370){
            console.log("You died");
        }else if(rockX > 120 && rockX <= 160 && y != 370){
            score+= 10;
        }
    }
//Function to display score
function scoreBoard()
{
    graphics.fillStyle = "rgba(71, 139, 76, 1)";
    graphics.font = "24px '', monospace"
    graphics.fillText("Score: " + score, 30,30);
}
//Function to draw a rock
    function rock()
    {
        graphics.drawImage(rImage,rockX,rockY,60,60);
    }
//Function to make character jump
    function jump(event)
    {
        document.addEventListener('keyup', function(event) 
        {
    
        if (y == 370){
            if(event.key === 'Enter')
            {
                y = 280;
            }
        }
    }
        )
    }
//Molecule images
    function moleculeImage(x,y)
    {
        if(mFrames == 1 || mFrames == 3)
        {graphics.drawImage(mImage1,x,y,100,100);}
        else if(mFrames == 2)
        {graphics.drawImage(mImage2,x,y,100,100);}
        else
        {graphics.drawImage(mImage3,x,y - 8,100,100);}
        mFrames++;
        if(mFrames > 4 ){
            mFrames = 1 ;
        }
    }
     function birdImage(x,y)
    {
        if(bFrames == 0)
        {graphics.drawImage(bImage1,x,y,60,60);}
        else if(bFrames == 1)
        {graphics.drawImage(bImage3,x,y,60,60);}
        else if(bFrames == 2)
        {graphics.drawImage(bImage2,x,y,60,60);}
        else
        {graphics.drawImage(bImage3,x,y,60,60)}
        bFrames++;
        if(bFrames > 2){
            bFrames = 0 ;
        }
    }
//Bird images
    function bird(){

    }
//Clear
function clear()
{
    graphics.drawImage(backgrounds[0],0,0,1000,500);
}

