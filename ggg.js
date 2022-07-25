
 var car,wall;
 var speed,weight;


function setup() {
 createCanvas(1000,400);
  
 car=createSprite(50, 200, 50, 50);
 wall=createSprite(1200,250,50,100);


 speed=random(55,90);
 weight=random(1400,1499);

 car.velocityX = speed;


}

function draw() {
  
  background("white");
  
  if (wall.x-car.x < (Car.width+wall.width)/2) {
  car.velocityX=0;
  var deformation= 0.5 * weight * speed/22509;
  if (deformation>180) {
  car.shapeColor="red";  
  }
  if (deformation<180 && deformation>100) {
  car.shapeColor="yellow"; 
  }
  if (deformation<100) {
  car.shapeColor="green";  
  }
}



  drawSprites();
}