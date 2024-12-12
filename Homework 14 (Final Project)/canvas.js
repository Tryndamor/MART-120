var characterX = 1000;
var characterY = 850;
var characterW = 50;
var characterH = 50;
 
var princessX = 1000;
var princessY = 200;
var princessW = 50;
var princessH = 50;

var castleGuardX = [300,100,100,200,1500,1800,1500,1800];
var castleGuardY = [100,650,300,100,550,750,450,250]; 
var currentPatrolPoint = [0,0,0,0,0,0,0,0];
var castleGuardSpeed = 1;
var castleGuardPatrolX = [[1500,1500,1800,1800],[1800,1800,1500,1500],[1500,1500,1800,1800],[1800,1800,1500,1500]];
var castleGuardPatrolY = [[550,750,750,550],[750,550,550,750],[450,250,250,450],[250,450,450,250]];
var castleBushesX = [50,100,150,200,250,300,350,400,450,500,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,100,150,200,250,300,350,400,450,450,450,450,450,450,450,450,450,450,450,450,450,350,300,350,150,150,200,250,150,150,150,200,250,300,350,250,300,350,400,350,350,350,350,350,350,350,300,250,150,150,150,150,150,200,250,250,250,150,150,200,100,100,550,1450,1500,1550,1600,1650,1700,1750,1800,1850,1850,1850,1850,1850,1850,1850,1850,1850,1850,1850,1850,1850,1850,1850,1850,1800,1750,1700,1650,1600,1550,1500,1450,1750,1800,1750,1720,1670,1620,1570,1520,1470,1550,1600,1650,1700,1700,1750,1650,1600,1550,1700,1650,1600,1700,1750,1650,1600,1550,1700,1750,1600,1550,1700,1650,1600,1700,1750,1600,1550,1650,1750,1550,1800,1800];
var castleBushesY = [50,50,50,50,50,50,50,50,50,50,50,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,800,800,800,800,800,800,800,800,750,700,650,600,550,500,450,400,350,300,250,200,100,150,150,200,150,150,150,250,300,350,350,350,350,350,250,250,250,250,400,450,500,550,600,650,700,700,700,650,700,750,600,550,600,550,500,450,450,400,550,550,350,50,50,50,50,50,50,50,50,50,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,800,800,800,800,800,800,800,800,100,200,200,500,500,500,500,500,500,200,200,200,200,300,300,300,300,300,350,350,350,400,400,400,400,400,600,600,600,600,650,650,650,700,700,700,700,100,150,150,150,100];
var castSpellX = [300,200,100,100];
var castSpellY = [102,102,300,650];
var spellSpeedX = [0,0,2,2];
var spellSpeedY = [3,3,0,0];
var vineWallVisible = true;
var castleWallVisible = true;


function setup ()
{
    createCanvas (1900,895);
}
function draw ()
{
    background (79,66,181); //Ocean blue
    castleGrounds ();
    castleBushes ();
    createCharacter ();
    characterMovement ();
    castleGuards ();
    treasure ();
    collision ();
    princess ();
    gameText ();
}

function castleGrounds ()
{
    fill (121,135,122);  //Grass color
    stroke (138,112,91);
    strokeWeight (12);
    rect(25,25,1850,800); //Green grass coverage of map

    strokeWeight(0);       //Bridge entry
    rect(900,700,200,200);

    fill (171,172,167);  //castle color
    stroke (89,104,113); //border color
    strokeWeight (6);  
    rect (550,25,50,650); //left castle wall 
    rect (1400,25,50,650); //right castle wall
    line (590,25,1400,25); //top-top castle wall outline
    line (600,126,1400,126); //bottom-top caste wall outline
    rect (550,620,350,100); //bottom left wall
    rect (1100,620,350,100); //bottom right wall
    circle(1000,300,250); //main big circle platform
    circle(950,400,20);
    circle(950,420,20);
    circle(1050,400,20);  //railing circles for platform
    circle(1050,420,20);
    rect(960,390,80,10);
    rect(960,400,80,10);  // stairs for platform
    rect(960,410,80,10);
    rect(960,420,80,10);

    strokeWeight(0);
    rect (590,28,820,95); // top castle wall
    rect (553,615,44,10); //left gray box to remove blue lines
    rect (1403,615,44,10); //right gray box to remove blue lines

    fill(0,0,255)
    stroke (65,105,255)
    strokeWeight (5)
    line (1060,380,1090,350)
    line (1090,350,1090,270)
    line (1090,270,1060,220)
    line (1060,220,940,220) //blue design around circle platform
    line (940,220,910,270)
    line (910,270,910,350)
    line (910,350,940,380)
    

    fill (255,215,0)
    stroke (89,104,113)
    strokeWeight (2)
    triangle (960,100,980,80,1000,100)
    triangle (1000,100,1020,80,1040,100) //yellow Triforce symbol
    triangle (980,80,1000,60,1020,80)

    fill(89,104,113)
    stroke(89,104,113)
    triangle (960,320,980,300,1000,320)
    triangle (1000,320,1020,300,1040,320) //gray Triforce symbol
    triangle (980,300,1000,280,1020,300)


    fill(131,180,235)     // glowing blue sword
    rect (997,260,7,50)
    line (998,248,1002,248)
    

    fill (74,81,177)
    stroke (67,72,133)
    strokeWeight (0)    // purple sword hilt
    rect (985,259,30,8)
    rect (996,240,8,8)
    rect(998,248,4,12)
    triangle(983,259,994,259,986,273)
    triangle(1018,259,1007,259,1015,273)

    if (castleWallVisible)   // This is the brown castle gate wall
    {
    fill (102,66,40)
    stroke (0,0,0)
    strokeWeight (2)
    rect (900,620,200,100)
    line (900,700,1100,700)
    line (900,650,1100,650)
    line (950,620,950,720)
    line (1050,620,1050,720)
    }
   
    if (vineWallVisible)
    {
        fill (65,132,72)    // Thisn is the green Vine Wall
        stroke (57,100,62)
        strokeWeight (2)
        rect (1390,720,30,100) 
    }
    
} 
function princess ()
{
    fill (209,171,136)
    circle (princessX, princessY, princessW)                          //princess body
    fill (244,189,230)
    triangle (princessX-20,princessY-princessH/3,                    //princess hat
              princessX+20,princessY-princessH/3,
              princessX,princessY-princessH/1.2)
    fill(244,189,230);
    arc(princessX, princessY, princessW, princessW, 0, PI)
    fill (220,126,196)
    circle (princessX-24,princessY+2,princessW/5)                    //left hand
    circle (princessX+24,princessY+2,princessW/5)                    //right hand
    circle (princessX-10,princessY+24,princessW/5)                   //left foot
    circle (princessX+10,princessY+24,princessW/5)                   //right foot
    rect (princessX-23,princessY+10,princessH-4,princessW-47)
    fill (226,209,117)                                                  
    rect (princessX-22,princessY-17,princessH-7,princessW-44)       //yellow character hair
    rect (princessX-3,princessY+10,princessH-45,princessW-47)       //yellow belt buckle
}


function castleGuards ()
{
    for (let i = 0; i < castleGuardX.length; i++)
    {
    fill (161,157,148);
    circle (castleGuardX[i],castleGuardY[i], characterW);                           //Guard body
    fill (54,69,79);
    triangle (castleGuardX[i]-20,castleGuardY[i]-characterH/3,                      //Guard hat
              castleGuardX[i]+20,castleGuardY[i]-characterH/3,
              castleGuardX[i],castleGuardY[i]-characterH/1.2);
    fill(54,69,79);
    arc(castleGuardX[i], castleGuardY[i], characterW, characterW, 0, PI);           //Guard outfit
    fill (31,38,42);
    circle (castleGuardX[i]-24,castleGuardY[i]+2,characterW/5);                    //left hand
    circle (castleGuardX[i]+24,castleGuardY[i]+2,characterW/5);                    //right hand
    circle (castleGuardX[i]-10,castleGuardY[i]+24,characterW/5);                   //left foot
    circle (castleGuardX[i]+10,castleGuardY[i]+24,characterW/5);                   //right foot
    rect (castleGuardX[i]-23,castleGuardY[i]+10,characterH-4,characterW-47);
    fill (31,38,42);                                                  
    rect (castleGuardX[i]-22,castleGuardY[i]-17,characterH-7,characterW-44);       //Guard hair
    rect (castleGuardX[i]-3,castleGuardY[i]+10,characterH-45,characterW-47);       //Guard belt
    
    
        for (let i = 0; i < castleGuardX.length; i++) 
        {
           
            if (i >= 4 && i <= 7) 
            {
                let targetX = castleGuardPatrolX[i - 4][currentPatrolPoint[i]];
                let targetY = castleGuardPatrolY[i - 4][currentPatrolPoint[i]];
    
                if (castleGuardX[i] < targetX) castleGuardX[i] += castleGuardSpeed;
                if (castleGuardX[i] > targetX) castleGuardX[i] -= castleGuardSpeed;
                if (castleGuardY[i] < targetY) castleGuardY[i] += castleGuardSpeed;
                if (castleGuardY[i] > targetY) castleGuardY[i] -= castleGuardSpeed;
    
                
                if (abs(castleGuardX[i] - targetX) < castleGuardSpeed && abs(castleGuardY[i] - targetY) < castleGuardSpeed) // Patrol point change logic
                {
                    currentPatrolPoint[i] = (currentPatrolPoint[i] + 1) % castleGuardPatrolX[i - 4].length;
                }
            }
        }
    
     if (spellSpeedX[i] == 0 && spellSpeedY[i] == 3) 
        { 
            fill(255, 0, 0);
            rect(castSpellX[i], castSpellY[i], 10, 30);                         // Vertical Spell design
        }
    else if (spellSpeedX[i] == 2 && spellSpeedY[i] == 0) 
        {
            fill(48, 25, 52);
            rect(castSpellX[i], castSpellY[i], 30, 10);                         // Horizontal Spell design
        }


    castSpellX[i] += spellSpeedX[i];                                            // Spells moving horizontally
    castSpellY[i] += spellSpeedY[i];                                            // Spells moving vertically


    if (castSpellY[i] > height) 
        {
            castSpellY[i] = 102;                                                // When spell goes off screen reset it to 102y
        }
    if (castSpellX[i] > 530) 
        {
            castSpellX[i] = 100;                                                // When spell goes off screen reset it to 100x
        }
    }
   
    
}    
function treasure ()
{
    fill (102,66,40)
    stroke (0,0,0)
    strokeWeight (1)
    rect (80,380,40,40)
    line (80,400,120,400)
    rect (1680,80,40,40)
    line (1680,100,1720,100)



    let collisionSize = characterW;
    if (abs (characterX - 100) < collisionSize && abs(characterY - 400) < collisionSize)
    {
        treasureCollected = true;
        vineWallVisible = false;
    }
    if (abs (characterX - 1680) < collisionSize && abs (characterY - 80) < collisionSize)
    {
        treasureCollected = true;
        castleWallVisible = false;
    }
}
function createCharacter ()
{
    fill (209,171,136)
    circle (characterX,characterY, characterW)                          //character body
    fill (45,169,66)
    triangle (characterX-20,characterY-characterH/3,                    //character hat
              characterX+20,characterY-characterH/3,
              characterX,characterY-characterH/1.2)
    fill(45, 169, 66);
    arc(characterX, characterY, characterW, characterW, 0, PI)
    fill (117,71,58)
    circle (characterX-24,characterY+2,characterW/5)                    //left hand
    circle (characterX+24,characterY+2,characterW/5)                    //right hand
    circle (characterX-10,characterY+24,characterW/5)                   //left foot
    circle (characterX+10,characterY+24,characterW/5)                   //right foot
    rect (characterX-23,characterY+10,characterH-4,characterW-47)
    fill (226,209,117)                                                  
    rect (characterX-22,characterY-17,characterH-7,characterW-44)       //yellow character hair
    rect (characterX-3,characterY+10,characterH-45,characterW-47)       //yellow belt buckle
}


function castleBushes ()
{
    for (t = 0; t < castleBushesX.length; t++)
    {
    fill (65,132,72);
    stroke (57,100,62);                                                 // ALL THE BUSHES !
    strokeWeight (2);
    circle (castleBushesX[t],castleBushesY[t],50,50);
    }
    
}
function collision (dx,dy)
{
    let collisionSize = characterW / 3 + 25;
    let nextX = characterX + dx;
    let nextY = characterY + dy;
    for (let i = 0; i < castleBushesX.length; i++)
    {
        let nextX = characterX + dx;
        let nextY = characterY + dy;
        if(abs(nextX - castleBushesX[i]) < collisionSize && abs(nextY - castleBushesY[i]) < collisionSize)
        {
            return true;
        }
    }
    if (nextX > 550 && nextX < 600 && nextY > 25 && nextY < 675)  // Left castle wall collision
    {
        return true;
    }
    if (nextX > 1400 && nextX < 1450 && nextY > 25 && nextY < 675) // Right castle wall collision
    {
        return true;
    }
    if (nextY > 25 && nextY < 126 && nextX > 550 && nextX < 1450) // Top castle wall collision
    {
        return true;
    }
    if (nextX > 550 && nextX < 900 && nextY > 620 && nextY < 725) // Bottom-left castle wall collision
    {
        return true;
    }
    if (nextX > 1100 && nextX < 1450 && nextY > 620 && nextY < 725) // Bottom-right castle wall collision
    {
        return true;
    }
    if (vineWallVisible && nextX > 1390 && nextX < 1420 && nextY > 720 && nextY < 820) // Vine Wall collision
    {
        return true;
    }
    if (castleWallVisible && nextX > 890 && nextX < 1110 && nextY > 620 && nextY < 725) // Castle Wall collision
    {
        return true;
    }
    for (let i = 0; i < castleGuardX.length; i++)
        {
            if(nextX > castleGuardX[i] - 35 && nextX < castleGuardX[i] + 35 && nextY > castleGuardY[i] - 35 && nextY < castleGuardY[i] + 35)
            {
                characterX = 1000;
                characterY = 850;
                return true;
            }
        } 
     
    for (let i = 0; i < castSpellX.length; i++) 
    {
        let spellWidth = spellSpeedX[i] == 0 ? 20 : 30;
        if (Math.abs(characterX - castSpellX[i]) < spellWidth && Math.abs(characterY - castSpellY[i]) < 30) 
        {
            characterX = 1000;
            characterY = 850;
            break;
        }
    }
    return false;
    
}

function characterMovement ()
{
    let moveSpeed = 5;
    if (keyIsDown(68) && !collision(moveSpeed, 0))                                              // D key (right)   
    { 
        characterX += moveSpeed;
    }
    if (keyIsDown(65) && !collision(-moveSpeed, 0))                                             // A key (left)
    { 
        characterX -= moveSpeed;
    }
    if (keyIsDown(87) && !collision(0, -moveSpeed))                                             // W key (up)
    { 
        characterY -= moveSpeed;
    }
    if (keyIsDown(83) && !collision(0, moveSpeed))                                              // S key (down)
    { 
        characterY += moveSpeed;
    }

    
}
function gameText ()
{
    if(characterX > 850 && characterX < 1150 && characterY > 245 && characterY < 400)
        {
            fill(255,215,0)
            stroke(5)
            textSize(30)
            text("You did it, Adventurer. The sword is yours!", princessX + 10, princessY - 20) //when character moves onto sword platform - they win.
        }
}
