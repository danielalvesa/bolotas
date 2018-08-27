var cell = [];

function setup() {
    createCanvas(displayWidth-20, displayHeight-20);
    for (var i=0; i < 20; i++) {
        append(cell,new Cell(random(30,50)));
    }
}

function draw() {
    background(0,50);
    for (var i=0; i < cell.length; i++) {
        cell[i].move();
        cell[i].show();
        cell[i].border();

        for (var j = 0; j < cell.length; j++) {
            if(cell[i].collision(cell[j])){
                cell[i].vel = createVector(0,0);
                cell[i].acc = createVector(0,0);
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
    }

    this.collision = function(cell2){

        let x;
        let y;

        if(this.pos.y > cell2.pos.y && this.pos.y+size < cell2.y){
            y = true;
        }

        if(this.pos.x > cell2.pos.x && this.pos.x+size < cell2.x){
            x = true;
        }

        if(x&&y)
            return true;
        else
            return false;
    }
}