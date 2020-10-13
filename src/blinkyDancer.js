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
  console.log('lololol heyo');
  this.$node.toggle();
};





/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};

*/

