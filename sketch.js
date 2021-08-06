const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone,stone2,stone3,stone4, bouncyBall,hammer;
var iron,iron2,iron3,iron4,bouncyBall2,bouncyBall3,bouncyBall4

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,width+450,20)
    iron = new Iron(300,700);
    iron2= new Iron(300,600);
    iron3 = new Iron(300,500);
    iron4 = new Iron(300,400);

    stone = new Stone(700,600,100,100);
    stone2 = new Stone(700,500,100,100);
    stone3 = new Stone(700,400,100,100);
    stone4= new Stone(700,300,100,100);
  
     bouncyBall=new BouncyBall(400,450,70);
     bouncyBall2=new BouncyBall(400,400,70);
     bouncyBall3=new BouncyBall(400,350,70);
     bouncyBall4=new BouncyBall(400,300,70);
    // bouncyBall=BouncyBall(900,450,70);
    // bouncyBall=new (900,450,70);
    // bouncyBall=new BouncyBall();

    hammer = new Hammer(10,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    stone2.display();
    stone3.display();
    stone4.display();

    plane.display();
   
    bouncyBall.display();
    bouncyBall2.display();
    bouncyBall3.display();
    bouncyBall4.display();
    iron.display()  
    iron2.display()  
    iron3.display()  
    iron4.display()  
    hammer.display();

 
}
