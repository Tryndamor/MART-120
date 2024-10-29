function setup()
    {
    createCanvas(500, 600);
    }

    function draw()
    {
        background(90,90,90);
        textSize(30)
        text("My portrait!", 10,80);
    
        // head
        strokeWeight(10)
        fill(210,180,140);
        circle(250,150,175);
       
        // eyes
        strokeWeight(10);
        fill(135,206,235);
        circle(210,125,40);
        circle(290,125,40);
        point(200,125);
        point(280,125);
    
        // nose
        fill(255);
        point(250,150);
        
        // mouth
        ellipse(245, 190, 70, 30)
    
        // body
        fill(10, 24, 120);
        rect(200,235,100,150);
        line(250,260,250,325);
        
        // right arm
        fill(210,180,140);
        rect(300,260,80,30);
        // left arm
        rect(120,260,80,30);
        // left leg
        rect(200,385,30,50);
        // right leg
        rect(270,385,30,50);
        // hair
        strokeWeight(3);
        fill(255, 255, 0);
        triangle(220,65,230,45,240,65);
        triangle(240,65,250,45,260,65);
        triangle(260,65,270,45,280,65);

        fill(10, 24, 120);
        textSize(40);
        text("Trevor Kleh",150,550);          
    }