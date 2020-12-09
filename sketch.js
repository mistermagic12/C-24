const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5
var pig1,pig2
var log1,log2,log3,log4
var bird

function setup(){
    var canvas = createCanvas(1200,360);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    pig1= new Pig(800,320)
    box2 = new Box(900,320,70,70);
    log1 = new Log(800,250,300,PI/2)
    
     box3 = new Box(700,200,70,70);
    pig2= new Pig(800,200)
    box4 = new Box(900,200,70,70);
    log2 = new Log(800,170,300,PI/2)

    box5=new Box(800,145,70,70)
    log3 = new Log(750,150,170,PI/7)
    log4 = new Log(850,150,170,-PI/7)

    bird = new Bird(100,100)
    
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
     ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}