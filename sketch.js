var car,wall,speed,weight
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(300,1700);
  car=createSprite(50,200,50,50);
  car.shapeColor=("white")
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80)
  car.velocityX = speed

}

function draw() {
  background(0,0,0);  
  if(wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/2250
    if(deformation<100) {
      car.shapeColor=color(0,255,0)
    }
  else if(deformation>=100 && deformation < 180) {
    car.shapeColor=color(230,230,0)
  }
  else if(deformation >= 180){
    car.shapeColor=color(255,0,0)
  }
  }
  drawSprites();
}