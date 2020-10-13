var LeftRightDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('runningLink');
};

LeftRightDancer.prototype = Object.create(Dancer.prototype);
LeftRightDancer.prototype.constructor = LeftRightDancer;
LeftRightDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};