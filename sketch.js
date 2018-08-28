var cell = [];
var mouse;

function setup() {
    createCanvas(displayWidth-20, displayHeight-20);
    for (var i=0; i < 2; i++) {
        append(cell,new Cell(random(30,50)));
    }
    mouse = new Cell(50);
}

function draw() {
    background(0,50);

    mouse.pos = createVector(mouseX, mouseY);
    mouse.show();

    for (var i=0; i < cell.length; i++) {
        cell[i].move();
        cell[i].show();
        cell[i].border();
        if(cell[i].collision(mouse)){
            background(255);
        }

        for (var j = 0; j < cell.length; j++) {
            if(cell[i].collision(cell[j])){
                
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

function Cell(size){

    this.size = size;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0,0);
    this.acc = createVector(random(2),random(2));

    this.col = color(random(255),random(255), random(255));

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