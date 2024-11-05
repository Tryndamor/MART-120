var enemyBodyX = 125
var enemyBodyY = 125
var enemyBodyDirection = 2
var enemyBodySpeed = 1

var iceX1 = 700
var iceY1 = 25
var iceDirection1 = 2

var iceX2 = 75
var iceY2 = 25
var iceDirection2 = 3

var enemyEyeX = 175
var enemyEyeY = 100

var enemyMouthX = 143
var enemyMouthY = 150

var mousex = 0;
var mousey = 0;

var characterX = 290
var characterY = 850


function setup()
{
    createCanvas(1000,900);
}

function draw ()
{
    background (0); 

    fill (110);
    rect(25,25,950,900); //grey inner background

    fill (0);
    rect (350,200,300,700) 
    rect (25,200,200,50)
    rect (150,350,200,50)  //these are the black pillars to move around
    rect (25,500,200,50)
    rect (150,650,200,50)
    rect (25,800,200,200)
    rect (650,200,200,50)
    rect (775,350,200,50)
    rect (650,500,200,50)
    rect (775,650,200,50)
    rect (650,800,200,200)


    fill (139,69,19)  //brown torches
    triangle (25,450,30,425,50,425); //far left
    triangle (350,800,345,775,330,775) //bottom left
    triangle (650,350,655,325,670,325) //middle right
    triangle (975,860,970,840,955,840) //bottom right

    fill (255,140,0) //fire for torches
    triangle(32, 425, 32, 410, 45, 425); //far left
    triangle(342,775, 335, 765, 335, 775); //bottom left
    triangle(655,325,665,310,670,325) //middle right
    triangle(960,830,970,840,955,840) //bottom right

    fill (0,0,255)
    rect(iceX1,iceY1,20,75)
    iceY1 += iceDirection1; // The falling Ice!
    if( iceY1 >= 900)
        {
         iceY1 = 25
        }
    fill (0,0,255)
    rect(iceX2,iceY2,20,75)
    iceY2 += iceDirection2; // The falling Ice!
    if( iceY2 >= 900)
        {
         iceY2 = 25
        }


    fill (255,0,0);
    circle (enemyBodyX,enemyBodyY,150); //Big Red Enemy
    enemyBodyX += enemyBodySpeed * enemyBodyDirection;
    if(enemyBodyX >= 600 && enemyBodyX <= 900)
        {
        enemyBodySpeed += 0.1;
        }
    else if (enemyBodyX >= 900)
        {
        enemyBodyX = 125
        enemyBodySpeed = 1
        }


    fill(0);
    circle (enemyEyeX,enemyEyeY,20); //his eye
    enemyEyeX = enemyBodyX +40;
    enemyEyeY = enemyBodyY -30;
    

    fill(0);
    rect (enemyMouthX,enemyMouthY,50,10); //his mouth
    enemyMouthX = enemyBodyX +15;
    enemyMouthY = enemyBodyY +30;

    fill(255,255,255)
    textSize(30)
    text("The Depths", width -575, height -400)  //Maze title-The Depths

    textSize(20)
    text("<Exit here>", width -140, height -10)  // The exit text
        if(characterX > width || characterY > width -140)
        {
            fill(255,215,0)
            stroke(5)
            textSize(40)
            text("CONGRATS! GGWP!", width-550, height-30) //when character moves across "Exit here" - they win.
        }

    fill(0,255,0)
    circle (mousex,mousey,40)  //The green dot you can click-place

    fill (135,206,235)
    circle (characterX,characterY, 50) // My sky blue character

    characterMovement() //this constantly calls the charactermovement function to allow for movement


}
    function characterMovement()  //Character movement wooh!!
    {
        if (keyIsDown(68)) // D key code
        {
        characterX += 5;
        } 

        if (keyIsDown(65)) // A key code
        {
        characterX -= 5;
        }

        if(keyIsDown (87)) // W key code
        {
        characterY -= 5;
        }

        if(keyIsDown (83)) // S key code
        {
        characterY += 5;
        }
    }

    function mouseClicked() 
    {
        mousex = mouseX;
        mousey = mouseY;
    }
    
    


