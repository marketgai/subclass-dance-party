var TriforceDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('triforce');
};

TriforceDancer.prototype = Object.create(Dancer.prototype);
TriforceDancer.prototype.constructor = TriforceDancer;

LeftRightDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var styleSettings = {
    height: 70,
    width: 70
  };
  this.$node.css(styleSettings);

  $('.triforce').on('mouseover', function() {
    var styleSettings = {
      height: 200,
      width: 200
    };
    this.$node.css(styleSettings);
  });

};