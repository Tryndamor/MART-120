var characterX = 1000;
var characterY = 850;
var characterW = 50;
var characterH = 50;

var castleGuardX = [100,300,500];
var castleGuardY = [100,200,300];
var castleBushesX = [50,100,150,200,250,300,350,400,450,500,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50];
var castleBushesY = [50,50,50,50,50,50,50,50,50,50,50,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800];


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

    strokeWeight(0);
    rect (590,28,820,95); // top castle wall
    rect (553,615,44,10); //left gray box to remove blue lines
    rect (1403,615,44,10); //right gray box to remove blue lines
} 

function castleGuards ()
{
    for (let i = 0; i < castleGuardX.length; i++)
    {
    fill (161,157,148);
    circle (castleGuardX[i],castleGuardY[i], characterW);                           //character body
    fill (54,69,79);
    triangle (castleGuardX[i]-20,castleGuardY[i]-characterH/3,                      //character hat
              castleGuardX[i]+20,castleGuardY[i]-characterH/3,
              castleGuardX[i],castleGuardY[i]-characterH/1.2);
    fill(54,69,79);
    arc(castleGuardX[i], castleGuardY[i], characterW, characterW, 0, PI);           //character outfit
    fill (31,38,42);
    circle (castleGuardX[i]-24,castleGuardY[i]+2,characterW/5);                    //left hand
    circle (castleGuardX[i]+24,castleGuardY[i]+2,characterW/5);                    //right hand
    circle (castleGuardX[i]-10,castleGuardY[i]+24,characterW/5);                   //left foot
    circle (castleGuardX[i]+10,castleGuardY[i]+24,characterW/5);                   //right foot
    rect (castleGuardX[i]-23,castleGuardY[i]+10,characterH-4,characterW-47);
    fill (31,38,42);                                                  
    rect (castleGuardX[i]-22,castleGuardY[i]-17,characterH-7,characterW-44);       //yellow character hair
    rect (castleGuardX[i]-3,castleGuardY[i]+10,characterH-45,characterW-47); 
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
    stroke (57,100,62);
    strokeWeight (2);
    circle (castleBushesX[t],castleBushesY[t],50,50);
    }
    
}
function characterMovement ()
{
    if (keyIsDown(68))                                          // D key code
    {
    characterX += 2;
    } 

    if (keyIsDown(65))                                          // A key code
    {
    characterX -= 2;
    }

    if(keyIsDown(87))                                          // W key code
    {
    characterY -= 2;
    }

    if(keyIsDown(83))                                          // S key code
    {
    characterY += 2;
    }
}