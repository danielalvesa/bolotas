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
		// this.callMethod(this.index);
	}

	this.setSlides = function(){
		this.slides.push(new Slide("Game Dev", "", 0,0)); //0
		this.slides.push(new Slide("Processo de desenvolvimento", "Software\nCinema", row*2, col*2));//1
		this.slides.push(new Slide("Pré-produção", "Mecânicas\nLevels\nProtótipo\nConcept Art", row*2, col*2));//2
		this.slides.push(new Slide("Produção", "50% do processo\nCansativo\nOnde os fracos não tem vez", row*2, col*2));//3
		this.slides.push(new Slide("Pós-produção", "Polimento de animação\nRefinamento do código\nOtimização na unha\nPARTÍCULAS", row*2, col*2));//4
		this.slides.push(new Slide("Game Engines", "Quando era só mato\nIdSoftware", row*2, col*2));//5
		this.slides.push(new Slide("O que são", "Motores Gráficos\nCentralizadores do conteúdo\nOtimização de tempo", row*2, col*2));//6
		this.slides.push(new Slide("Diferenças entre 2D e 3D", "Animação\nRenderização\nOTIMIZAÇÃO", row*2, col*2));//7
		this.slides.push(new Slide("Para saber mais", "Gamasutra\nGame Makers Toolkit\nGDC\nEu", row*2, col*2));//8
	}

	// this.callMethod = function(slideIndex){
	// 	switch (slideIndex){
	// 		case 2:
	// 			this.showImage('Image/mecanica.jpg', col*6,2*row);
	// 			break;
	// 		case 4:
	// 			this.showImage('Image/code.jpg', col*6,2*row);
	// 			break;
	// 		case 6:
	// 			this.showImage('Image/engine.png', col*6,2*row);
	// 			break;
	// 		case 7:
	// 			this.showImage('Image/2d.jpg', col*6,2*row);
	// 			break;

	// 	}
	// }

	// this.showImage = function(path, x, y){
	// 	loadImage(path, function (img){
	// 		image(img, x,y);
	// 	});
	// }
}