const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground1;
var pig1,pig2,pig3;
var log1,log2,log3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
	box2 = new Box(200,250,50,50);
	box3 = new Box(200,200,50,50);
	box4 = new Box(200,150,50,50);
	ground1 = new Ground(200,380,300,50);
	pig1 = new pig(250,400,30,30);
	pig2 = new pig(250,400,30,30);
	pig3 = new pig(250,400,30,30);
	log1 = new log(150,350,150,50,PI/2);
	log2 = new log(150,350,150,50,PI/2);
	log3 = new log(150,350,150,50,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
	box2.display();
	box3.display();
	box4.display();
	ground1.display();
	pig1.display();
	pig2.display();
	pig3.display();
	log1.display();
	log2.display();
	log3.display();
	
   
}