// name spacing 

const Engine= Matter.Engine // helps us create Physics Engine
const World= Matter.World  // helps create world following physics rules
const Bodies= Matter.Bodies // helps create objects residing in world 

var engine, world, ground ;
var ball;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world
  
 



box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
box3=new Box(300,300,50,50)
box4=new Box(100,100,50,50)
box5=new Box(300,300,50,50)

ground=new Ground()

pig=new Pig(810,350,50,50)
pig2=new Pig(810,220,50,50)


log1=new log(810,160,300,50)
log2=new log(810,180,300,50)
log3=new log(760,120,150,50)
log4=new log(8700,170,150,50)

bird1=new bird(200,50,50,50)
}

function draw() {
  background(0);  
  Engine.update(engine)
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig.display();
  pig2.display();
  log1.display();
 log2.display()
 bird1.display();
 log3.display();
 log4.display()
}

