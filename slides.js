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
		this.slides.push(new Slide("Minha IA n�o consegue", "resolver a tarefa que dei para ela"));
		this.slides.push(new Slide("Teste de Segundo Slide", "com acentos como �����"));
		this.slides.push(new Slide("Teste de terceiro Slide", "Com n�meros\nE com novos"));
		this.slides.push(new Slide("Teste de quarto Slide", "Com n�meros\nE com novos"));
		this.slides.push(new Slide("Teste de quinto Slide", "Com n�meros\nE com novos"));
		this.slides.push(new Slide("Teste de sexto Slide", "Com n�meros\nE com novos"));
		this.slides.push(new Slide("Teste de setimo Slide", "Com n�meros\nE com novos"));
		this.slides.push(new Slide("Teste de oitavo Slide", "Com n�meros\nE com novos"));
	}
}