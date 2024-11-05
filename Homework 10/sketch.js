var headX = 250;
var headY = 150;
var headDirection = 4;

var bodyX = 200;
var bodyY = 235;
var bodyDirection = 3;

var noseX = 250;
var noseY = 150;

var eyeY1 = 125;
var eyeY2 = 125;
var eyeDirection1 = 1;
var eyeDirection2 = 1;

var mouthX = 245;
var mouthY = 190;
var mouthTargetX = 500;
var mouthTargetY = 600;
var mouthSpeed = 2;
var mouthDirection =1;

var TextSizeDirection = 1;
var TextSize = 30;  
var TextSizeChangeRate = 5; 
var maxTextSize = 150; 
var minTextSize = 30; 


var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
    {
    createCanvas(500, 600);
    }

    function draw()
    {
        background(90,90,90);
        textSize(TextSize)
        text("My portrait!", 10,80);
        TextSize += TextSizeDirection * TextSizeChangeRate; // IDK why this one was hard for me.
        if (TextSize >= maxTextSize || TextSize <= minTextSize) //Text size changes
            {
            TextSizeDirection *= -1; 
            }
    
        
        strokeWeight(10)  //THE HEAD MOVES !
        fill(210,180,140);
        circle(headX,headY,175);
        headX += headDirection;
        if (headX >= 418 || headX <= 82) 
            {
            headDirection *= -1; 
            }

       
        
        strokeWeight(10);
        fill(135,206,235);
        circle(210,eyeY1,40); // THE EYES MOVE TOO !
        circle(290,eyeY2,40);
        point(200,eyeY1);
        point(280,eyeY2);
        eyeY1 += eyeDirection1
        eyeY2 += eyeDirection2
        if (eyeY1 >= 160 || eyeY1 <= 90) 
            {
            eyeDirection1 *= -1;
            }   
        if (eyeY2 >= 160 || eyeY2 <= 90) 
            {
            eyeDirection2 *= -1; 
            }
    
    
        fill(255);
        point(noseX,noseY); //NOSE moves with the head
       noseX = headX
       noseY = headY

        
        
        ellipse(mouthX, mouthY, 70, 30)  //MOUTH and movement for it
        if (mouthDirection == 1) 
            {
            if (mouthX < mouthTargetX) 
                {
                mouthX += mouthSpeed;  
                }
            if (mouthY < mouthTargetY) 
                {
                mouthY += mouthSpeed;  
                }
            } 
        else {  
            if (mouthX > mouthTargetX) 
                {
                mouthX -= mouthSpeed;  
                }
            if (mouthY > mouthTargetY) 
                {
                mouthY -= mouthSpeed;  
                }
            }

        
        if (mouthX >= 500 && mouthY >= 600)         // Once the mouth reaches each of the target spots, reverse the direction
        {
        mouthDirection = -1;                        // When the mouth makes it to the bottom right, it will turn around and go top-left.
        mouthTargetX = 0;     
        mouthTargetY = 0; 
        } 
        else if (mouthX <= 0 && mouthY <= 0) 
        {                                                // When the mouth makes it to top-left, it will turn around and head bottom right again
        mouthDirection = 1;   
        mouthTargetX = 500;   
        mouthTargetY = 600;   
        }
        
        fill(10, 24, 120);
        rect(200,235,100,150);                          // body
        line(250,260,250,325);
        
        
        fill(210,180,140);
        rect(300,260,80,30);                            // right arm
        rect(120,260,80,30);                            // left arm
        rect(200,385,30,50);                            // left leg
        rect(270,385,30,50);                            // right leg
        
        strokeWeight(3);                                // hair
        fill(255, 255, 0);
        triangle(220,65,230,45,240,65);
        triangle(240,65,250,45,260,65);
        triangle(260,65,270,45,280,65);

        fill(10, 24, 120);
        textSize(40);                                   //My name text
        text("Trevor Kleh",150,550);          
    }