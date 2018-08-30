function Slide(_t, _topic){
	this.tex = _t;
	this.topic = _topic;

	this.show = function(){
		fill(255);
		noStroke();
		this.setFont(1);
		text(this.tex, col, row);
		this.setFont(0.5);
		text(this.topic, col*2, row*3);
	}

	this.setFont = function(multiplier){
		textFont('Roboto');
		multiplier = multiplier <= 0 ? 1 : multiplier;
		textSize(row*multiplier);
		textAlign(LEFT, TOP);
	}
}