var car, wall;

var speed, weight, deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(100, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(1100, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0);

  deformation = (0.5 * weight * speed * speed)/22500;
  
  if (wall.x-car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    
    if (deformation > 180) {
      car.shapeColor = color(250, 0, 0);
    }

    if (100 < deformation && deformation < 180) {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
  }


  drawSprites();
}