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
		this.slides.push(new Slide("Teste de T�tulo", "com t�picos"));
		this.slides.push(new Slide("Teste de Segundo Slide", "com acentos como �����"));
		this.slides.push(new Slide("Teste de terceiro Slide", "Com n�meros\nE com novos"));
	}
}