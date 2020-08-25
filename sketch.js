const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;

function setup() {
  createCanvas(1200,800);

  var ground_options={
    isStatic: true
  }

  var ball_options={
    restitution: 1
  }

  engine=Engine.create();
  world=engine.world;

  ground=Bodies.rectangle(600,380,1200,20, ground_options);
  World.add(world,ground);
  console.log(ground);

  ball=Bodies.circle(200,50,20,ball_options);
  World.add(world,ball);
  console.log(ball);

}

function draw() {
  var groundLocation=ground.position;
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(groundLocation.x,groundLocation.y,1200,20);

  var ballLocation=ball.position;
  ellipseMode(RADIUS);
  circle(ballLocation.x, ballLocation.y,20);
  drawSprites();
}