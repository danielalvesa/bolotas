// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function PopulationManager(pop){
  this.target;
  this.popmax = pop;
  this.mutationRate;
  this.population;

  this.bestPhrase;
  this.allPhrases;
  this.stats;

  this.populate = function(pop){
    for (var i = 0; i < pop; i++) {
      this.population.population.push(new DNA(this.target.length));
    }
  }

  this.startPopulation = function() {
    this.target = "javascript e melhor do que pipoca com vinagre";
    this.mutationRate = 0.006;

    this.population = new Population(this.target, this.mutationRate, this.popmax);
  }

  this.generate = function() {
    // Generate mating pool
    this.population.naturalSelection();
    
    //Create next generation
    this.population.generate();
    
    // Calculate fitness
    this.population.calcFitness();

    this.population.evaluate();
  }

  this.evaluate = function(){
    return this.population.finished;
    
  }
}