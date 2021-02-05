const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9,Block10,Block11,Block12,Block13,Block14,Block15,Block16,Block17,Block18,Block19,Block20,Block21,Block22,Block23,Block24,Block25;
var stand;
var polygon;
var slingshot;


function setup(){
    createCanvas(1000,700)
       engine = Engine.create();
       world = engine.world;
       Engine.run(engine);
       block1=new Block(500,630,100,100);
       block2=new Block(500,530,100,100);
       block3=new Block(500,430,100,100);
       block4=new Block(500,330,100,100);
       block5=new Block(500,230,100,100);

       block6=new Block(600,630,100,100);
       block7=new Block(600,530,100,100);
       block8=new Block(600,430,100,100);
       block9=new Block(600,330,100,100);
       block10=new Block(600,230,100,100);
       
      
       stand = new Ground(500,680,1000,10)

       ball=new Ball(250,300,50);

       slingshot=new SlingShot(ball.body,{x:250,y:50});
}
function draw(){
    background(0);
    fill("aquamarine")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    

    stand.display()

    ball.display();

    slingshot.display();
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
