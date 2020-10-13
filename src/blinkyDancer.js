// Refactor makeBlinkyDancer in to pseudoclassical pattern

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // Call on the superClass
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

// delegate the the Dancer methods to the BlinkyDancer
BlinkyDancer.prototype = Object.create(Dancer.prototype);
// assign the BlinkyDancer constructor to BlinkyDancer
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};