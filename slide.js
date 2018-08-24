function slide(color, title, topics){

    this.colorSlide = color(255,0,0);
    this.title = title;
    this.topics = topics;

    this.show = function(){
        fill(this.colorSlide);

    };
}