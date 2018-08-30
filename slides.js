function Slides(){
	this.font;

	this.slides = [];

	this.index = 0;

	this.set = function() {
		this.setSlides();
	}

	this.show = function() {
		fill(255);
		this.slides[this.index].show();
	}

	this.setSlides = function(){
		this.slides.push(new Slide("Teste de Título", "com tópicos"));
		this.slides.push(new Slide("Teste de Segundo Slide", "com acentos como áàãäâ"));
		this.slides.push(new Slide("Teste de terceiro Slide", "Com números\nE com novos"));
	}
}