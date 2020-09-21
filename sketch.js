
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//background(255);
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1 = new bob(200,600,);
	bobObj2 = new bob(400,600);
	bobObj3 = new bob(600,600);
	bobObj4 = new bob(800,600);
	bobObj5 = new bob(1000,600);
	roofObj = new Roof(100,height,1200,20);
	rope1= new Rope(bobObj1.body,roofObj.body,-bobDiameter*2,0);
	rope2= new Rope(bobObj2.body,roofObj.body,-bobDiameter*2,0);
	rope3= new Rope(bobObj3.body,roofObj.body,-bobDiameter*2,0);
	rope4= new Rope(bobObj5.body,roofObj.body,-bobDiameter*2,0);
	rope5= new Rope(bobObj5.body,roofObj.body,-bobDiameter*2,0);
  

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
    bobObj1.display();
	bobObj2.display();
	bobObj3.display(); 
	bobObj4.display(); 
	bobObj5.display();
	roofObj.display(); 
	rope1.display(); 
	rope2.display();
	rope3.display(); 
	rope4.display(); 
	rope5.display();


  drawSprites();
 
}



