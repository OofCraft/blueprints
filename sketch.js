
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//create the variables of the bodies made from the blueprint
var engine, world;
var ground, ball;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

//create the two boxes and the the ground, with customized x, y, etc. but from the blueprint.
    box1 = new Box(200,300,50,50);

    box2 = new Box(240,100,50,100); 

    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);

    //display the bodies from the blueprint
    box1.display();
    box2.display();
    ground.display();
}