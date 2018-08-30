var popR = [];
var popG = [];
var popB = [];
// var mouse;

var col;
var row;

var slides;

function setup() {
    createCanvas(displayWidth-20, displayHeight-20);

    col = width/12;
    row = height/12;

    for (var i=0; i < 4; i++) {
        append(popR,new Cell(random(30,50),'red'));
        append(popG,new Cell(random(30,50),'green'));
        append(popB,new Cell(random(30,50),'blue'));
    }

    slides = new Slides();
    slides.set();    
}

function draw() {
    setBackground();
    showPopulation();
    slides.show();
}

function setBackground() {
    
    var r = (popR.length/4)*255;
    var g = (popG.length/4)*255;
    var b = (popB.length/4)*255;

    //console.log(r +" "+ g +" "+ b);

    background(r,g,b, 80);
}

function getWinner() {
    var r = popR.length;
    var g = popG.length;
    var b = popB.length;

    if (r >= g && r >= b){
        return r;
    } else if (g >= r && g>=b){
        return g;
    } else if (b >= r && b>=g){
        return b;
    }
}

function showPopulation(){
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
    for (var i = population.length-1; i>=0; i--) {
        for (var j = population1.length-1; j>=0; j--) {
            if(population[i].collision(population1[j])){
                if (reduce(population[i], population1[j])){
                    population1.splice(j, 1);
                    break;
                }else{
                    population.splice(i, 1);
                    break;
                }

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

function keyPressed(){
    if(keyCode==RIGHT_ARROW){
        if(slides.index<slides.slides.length-1){
            slides.index++;
        }
    }else if(keyCode==LEFT_ARROW&&slides.index>0) {
        slides.index--;
    }
}

function reduce(cell, cell1){

    var difference = cell.size - cell1.size;
    difference = difference <0 ? (difference/10)*-1 : (difference/10);

    if (cell.size > cell1.size){
        cell.size += difference;
        return true;
    }else{
        cell1.size += difference;
        return false;
    }
}

function Cell(size, col){

    this.size = size;
    this.pos = createVector(random(100,width-100), random(100, height-100));
    this.vel = createVector(0,0);
    this.acc = createVector(random(-2,2),random(-2,2));

    switch (col){
        case 'red':
            r = 1;
            g = 0;
            b = 0;
            break;
        case 'green':
            r = 0;
            g = 1;
            b = 0;
            break;       
        case 'blue':
            r = 0;
            g = 0;
            b = 1;
            break;
        default:
            r, g, b = 0;
    }

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