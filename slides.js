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
		this.slides.push(new Slide("Minha IA não consegue", "resolver a tarefa que dei para ela"));
		this.slides.push(new Slide("Teste de Segundo Slide", "com acentos como áàãäâ"));
		this.slides.push(new Slide("Teste de terceiro Slide", "Com números\nE com novos"));
		this.slides.push(new Slide("Teste de quarto Slide", "Com números\nE com novos"));
		this.slides.push(new Slide("Teste de quinto Slide", "Com números\nE com novos"));
		this.slides.push(new Slide("Teste de sexto Slide", "Com números\nE com novos"));
		this.slides.push(new Slide("Teste de setimo Slide", "Com números\nE com novos"));
		this.slides.push(new Slide("Teste de oitavo Slide", "Com números\nE com novos"));
	}
}