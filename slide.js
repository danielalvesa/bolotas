function Slide(_t, _topic, x, y){
	this.tex = _t;
	this.topic = _topic;
	this.pos = createVector(x, y);

	this.show = function(){
		fill(255);
		noStroke();
		this.setFont(1);
		if(this.topic==""){
			textAlign(CENTER, CENTER);
			text(this.tex, width/2, height/2);
		}else{
			textAlign(LEFT, TOP);
			text(this.tex, row, col);
		}
		this.setFont(0.5);
		textAlign(LEFT, TOP);
		text(this.topic, this.pos.x, this.pos.y);
	}

	this.setFont = function(multiplier){
		textFont('Roboto');
		multiplier = multiplier <= 0 ? 1 : multiplier;
		textSize(row*multiplier);
	}
}