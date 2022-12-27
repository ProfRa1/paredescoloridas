const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    options = {
        isStatic: true,
    };

    chao = Bodies.rectangle(200, 5, 400, 20, options);
    World.add(world, chao);

    chao2 = Bodies.rectangle(10, 200, 20, 400, options);
    World.add(world, chao2);

    chao3 = Bodies.rectangle(390, 195, 20, 400, options);
    World.add(world, chao3);

    chao4 = Bodies.rectangle(200, 390, 400, 20, options);
    World.add(world, chao4);

    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw() {
    background(51);
    noStroke();
    fill("red");
    rect(chao.position.x, chao.position.y, 400, 20);
    fill("orange");
    rect(chao2.position.x, chao2.position.y, 20, 400);
    fill("yellow");
    rect(chao3.position.x, chao3.position.y, 20, 400);
    fill("blue");
    rect(chao4.position.x, chao4.position.y, 400, 20);
    Engine.update(engine);
}
