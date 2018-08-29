var popR = [];
var popG = [];
var popB = [];
// var mouse;

function setup() {
    createCanvas(displayWidth-20, displayHeight-20);
    for (var i=0; i < 4; i++) {
        append(popR,new Cell(random(30,50),1,0,0));
        append(popG,new Cell(random(30,50),0,1,0));
        append(popB,new Cell(random(30,50),0,0,1));
    }
    // mouse = new Cell(50);
}

function draw() {
    background(0,50);

    renderPop(popR);
    renderPop(popG);
    renderPop(popB);

    collisionPop(popR, popB);
    collisionPop(popR, popG);
    collisionPop(popG, popB);
}

function renderPop(population){
    for (var i=0; i < population.length; i++) {
        population[i].move();
        population[i].show();
        population[i].border();
    }
}

function collisionPop(population, population1){
    for (var i = 0; i < population.length; i++) {
        for (var j = 0; j < population.length; j++) {
            if(population[i].collision(population1[j])){
                reduce(population[i], population1[j])
            }
        }
    }
}

function mousePressed() {
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
        var fs = fullscreen();
        fullscreen(!fs);
    }
}

function reduce(cell, cell1){
    var difference = cell.size - cell1.size;
    difference = difference <0 ? (difference/10)*-1 : (difference/10);

    if (cell.size > cell1.size){
        cell1.size -= difference;
        cell.size += difference;
    }else{
        cell.size -= difference;
        cell1.size += difference;
    }
}

function Cell(size, r, g, b){

    this.size = size;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0,0);
    this.acc = createVector(random(2),random(2));

    this.col = color(random(80,255)*r,random(80,255)*g, random(80,255)*b);

    this.move = function(){
        this.pos.add(this.vel);
        if(this.vel.mag()<10){
            this.vel.add(this.acc);
        }
    };

    this.border = function(){
        if(this.pos.x<size/2||this.pos.x>width-size/2){
            this.vel.x*=-1;
        }else if(this.pos.y<size/2||this.pos.y>height-size/2){
            this.vel.y*=-1;
        }
    };

    this.show = function(){
        noStroke();
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);       

        fill(255);
        stroke(255);
        strokeWeight(5);
        point(this.pos.x, this.pos.y);
    }

    this.collision = function(cell2){

        let x;
        let y;

        if (cell2.pos.x > this.pos.x-this.size && cell2.pos.x < this.pos.x+this.size && cell2.pos.y > this.pos.y-this.size && cell2.pos.y < this.pos.y+size){
            return true
        }
        return false;
    }
}