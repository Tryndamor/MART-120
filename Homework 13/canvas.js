var mousex = 0;
var mousey = 0;

var characterX = 290
var characterY = 850

var shapeXs = [125, 700, 75, 100, 800];
var shapeYs = [125, 25, 25, 400, 300];
var diameters = [150, 0, 0, 0, 0];  
var rectWidths = [0, 10, 20, 0, 0];         //MY ARRAY 
var rectHeights = [0, 75, 75, 0, 0]; 
var speeds = [2, 2, 3, 2, 2];
var directions = [2, -1, 1, 2, 2];
var triangleAngles = [0, 0];


function setup()
{
    createCanvas(1000,900);
   
}

function draw ()
{
    background (0); 

    createGrayBackground();     // Calling this border
    blackPillars();             // The black pillars to move around
    torches();                  // The brown torches
    torcheFire();               // The fire for torches            
    exitText();                 // The exit text
    winMessage();               // The win message when player reaches exit text
    mouseClickCircle();         // This calls a green circle to be placed on every mouse click
    createCharacter();          // This constantly calls the createCharacter function to display it on screen
    characterMovement();        // This constantly calls the charactermovement function to allow for movement
    levelTitle();               // The level title
    moveObstacles();            // Movement of obstacles 
    drawObstacles();            // Drawing of the obstacles
}
    
    function blackPillars()
    {
        fill (0);
        rect (350,200,300,700) 
        rect (25,200,200,50)
        rect (150,350,200,50)   //these are the black pillars to move around
        rect (25,500,200,50)
        rect (150,650,200,50)
        rect (25,800,200,200)
        rect (650,200,200,50)
        rect (775,350,200,50)
        rect (650,500,200,50)
        rect (775,650,200,50)
        rect (650,800,200,200)
    }

    function torches ()
    {
        fill (139,69,19)                    //brown torches
        triangle (25,450,30,425,50,425);    //far left
        triangle (350,800,345,775,330,775)  //bottom left
        triangle (650,350,655,325,670,325)  //middle right
        triangle (975,860,970,840,955,840)  //bottom right
    }
    function torcheFire()
    {
        fill (255,140,0)                        //fire for torches
        triangle(32, 425, 32, 410, 45, 425);    //far left
        triangle(342,775, 335, 765, 335, 775);  //bottom left
        triangle(655,325,665,310,670,325)       //middle right
        triangle(960,830,970,840,955,840)       //bottom right
    }
    function createCharacter()
    {
        fill (135,206,235)
        circle (characterX,characterY, 50)                          // My sky blue character
    }

    function createGrayBackground()
    {
        fill (110);
        rect(25,25,950,900);                                        //grey inner background

    }

    function characterMovement()                                    //Character movement wooh!!
    {
        if (keyIsDown(68))                                          // D key code
        {
        characterX += 5;
        } 

        if (keyIsDown(65))                                          // A key code
        {
        characterX -= 5;
        }

        if(keyIsDown (87))                                          // W key code
        {
        characterY -= 5;
        }

        if(keyIsDown (83))                                          // S key code
        {
        characterY += 5;
        }
    }

    function mouseClicked()                                         // allows for mouse tracking on x and y axis
    {
        mousex = mouseX;
        mousey = mouseY;
    }
    function mouseClickCircle()                                     // allows for placement of a green circle depending on where mouse is on any x or y axis
    {
        fill(0,255,0)
        circle (mousex,mousey,40)  
    }
    function moveObstacles() 
    {
        for (var t = 0; t < shapeXs.length; t++) {
            if (diameters[t] > 0) {
                if (shapeXs[t] >= 600) {                            //Speeds Red Circle up at 600 px X-Axis
                    speeds[t] = 4;
                }
                shapeXs[t] += speeds[t] * directions[t];            // Horizontal movement for obstacles
            }
    
            if (shapeXs[t] > width) {                               // The Reset position for Red obstacle
                shapeXs[t] = 125;
                shapeYs[t] = 125;
                speeds[t] = 2;
            }
    
            if (rectWidths[t] > 0 && rectHeights[t] > 0) {          // Falling Blue Ice
                shapeYs[t] += speeds[t];
            }
    
            if (shapeYs[t] > height) {                              // Reset position for Ice obstacles
                shapeYs[t] = random(-50, 0);
                shapeXs[t] = random() < 0.5 ? random(100, 300) : random(650, 900);
                speeds[t] = 3;
            }
            if (t >= 3) 
            {                                                       // Bat (triangle) movement
                shapeXs[t] += speeds[t] * directions[t];            // Horizontal movement
                shapeYs[t] += 5 * Math.sin(frameCount * 0.1 + t);   // Vertical movement (up and down)
    
                if (shapeXs[t] > width || shapeXs[t] < 0) 
                    {         
                        shapeXs[t] = 50;                            // X-reset position for bats
                        shapeYs[t] = random(100, 800);              // Y-reset position for bats
                    }
            }
        }
    }
    function drawObstacles() 
    {
        for (var t = 0; t < shapeXs.length; t++)
        {
            if (diameters[t] > 0)
            {
                fill(255,0,0);
                circle(shapeXs[t], shapeYs[t], diameters[t]);       // Making the Red Circle
            }
            else if (rectWidths[t] > 0 && rectHeights[t] > 0)       // Making the Blue Rectangles for Ice
            {
                if(t % 2 == 0)
                {
                    fill(0,0,255);
                }
                else
                {
                    fill(0,0,139);
                }
                rect(shapeXs[t], shapeYs[t], rectWidths[t], rectHeights[t]);
            }
            else
            {
                if (t % 2 == 0)                                       // Making the Purple and Pink Bats
                {
                    fill(128, 0, 128)
                }
                else
                {
                    fill(255,105,180)
                }
                triangle(shapeXs[t] - 20, shapeYs[t] -20,
                         shapeXs[t] + 20, shapeYs[t] -20,
                         shapeXs[t], shapeYs[t] -35)
            }
        }
    }    
    function exitText()
    {
        fill(255,255,255)
        textSize(20)
        text("<Exit here>", width -140, height -10)  // The exit text
    }
    function winMessage()
    {
        if(characterX > width || characterY > width -140)
            {
                fill(255,215,0)
                stroke(5)
                textSize(40)
                text("CONGRATS! GGWP!", width-550, height-30) //when character moves across "Exit here" - they win.
            }
    }
    function levelTitle()
    {
        fill(255,255,255)
        textSize(30)
        text("The Depths", width -575, height -400)  //Maze title-The Depths
    }