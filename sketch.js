var thickness,wall;
var speed,weight,bullet;



function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,50,20);
bullet.shapeColor="white";

  wall=createSprite(1200, 200, 50, 200);
  
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

}

function draw() {
  background("black");

  bullet.velocityX=speed;

  if(collide(bullet,wall))  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    
    if(damage<10){
      wall.shapeColor=("green");
    }
    if(damage>10){
      wall.shapeColor=("red");
    }
  }
  drawSprites();
}
function collide(vbullet,vwall){

bulletRightEdge=vbullet.x+vbullet.width;
wallLeftEdge=vwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}else{
  return false
}
}









