const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var roof;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(420,200,280,20)

	bob1 = new Bob(300,360,30);
	bob2 = new Bob(360,360,30);
  bob3 = new Bob(420,360,30);
	bob4 = new Bob(480,360,30);
	bob5 = new Bob(540,360,30);

	rope1 = new Rope(bob1.body,roof.body,-120,0);
  World.add(world,rope1);
  rope2 = new Rope(bob2.body,roof.body,-65,0);
  World.add(world,rope2);
	rope3 = new Rope(bob3.body,roof.body,-5,0);
  World.add(world,rope3);
	rope4 = new Rope(bob4.body,roof.body,+55,0)
  World.add(world,rope4);
	rope5 = new Rope(bob5.body,roof.body,+110,0);
  World.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  textSize(30);
  stroke("red");
  text("press left arrow key",300,500);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed() {
  if(keyCode === 37) {
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0});
  }
}



