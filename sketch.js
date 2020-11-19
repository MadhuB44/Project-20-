var car, wall;
var speed, weight;
var space


function preLoad() {
  
}

function setup() 
{
  createCanvas(600,650);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(200,50,50,50);
  car.velocityY=speed;
  car.shapeColor=color(255)

  space=createSprite(700,700)

  wall=createSprite(200,600,width/2,60)
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  

  
  text("hi")
if(wall.y-car.y<(car.height+wall.height)/2)
  {
    car.velocityY=0;
    var deformation=0.5*weight*speed*speed/22509

    if(deformation>180)
    { car.shapeColor=color(255,0,0)}

    if(deformation<180 && deformation>100)
    {car.shapeColor=color(230,230,0)}

    if(deformation<100)
    {car.shapeColor=color(0,255,0)}

    
  }
  

  drawSprites();
}