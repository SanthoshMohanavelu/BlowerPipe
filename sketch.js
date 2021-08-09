
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var engine;
var world;
var button;
var blower;
var ball;
var blowerMouth;



function setup() {
  createCanvas(500,500);
  
  engine = Engine.create()
  world = engine.world
  
  blower = new Blower(200,300,60,6)
  ball = new Ball(220, 250, 30, 30)
  blowerMouth = new BlowerMouth(260,300,40,50)

  button = createButton("Click to blow");
  button.position(200, 450);
  button.class("blowButton");
  button.mousePressed(blow)
  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(59);  
  Engine.update(engine);
  ball.show();
  blower.show();
  blowerMouth.show();  
  
  drawSprites();
}


function blow() {
Matter.Body.applyForce(ball.body, {x: 0,y: 0}, {x: 0,y: -0.5})
}