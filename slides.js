var font;

var slides = [];

var col;
var row;

var index = 0;

function setup() {
	//levar em conta os dpis
	createCanvas(displayWidth-20, displayHeight-20);
	col = width/12;
	row = height/12;
	setSlides();
}

function draw() {
	fill(255);

	slides[index].show();
}

function keyPressed(){
	if(keyCode==RIGHT_ARROW||keyCode==32){
		if(index<slides.length-1){
			index++;
		}
	}else if(keyCode==LEFT_ARROW&&index>0) {
		index--;
	}

	if(keyCode==ENTER){
		fl = fullscreen();
		fullscreen(!fl);
	}
}

function setSlides(){
	slides.push(new slide(173, "Teste de TÌtulo", "com tÛpicos"));
	slides.push(new slide(235, "Teste de Segundo Slide", "com acentos como ·‡„‰‚"));
	slides.push(new slide(235, "Teste de terceiro Slide", "Com n˙meros\nE com novos"));
}

function setFont(multiplier){
	textFont('Roboto');
	multiplier = multiplier <= 0 ? 1 : multiplier;
	textSize(row*multiplier);
	textAlign(LEFT, TOP);
}

function slide(_c, _t, _topic){
	this.col = _c;
	this.tex = _t;
	this.topic = _topic;

	this.show = function(){
		setFont(1);
		background(this.col,50);
		text(this.tex, col, row);
		setFont(0.5);
		text(this.topic, col*2, row*3);
	}
}