var TriforceDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('triforce');
};

TriforceDancer.prototype = Object.create(Dancer.prototype);
TriforceDancer.prototype.constructor = TriforceDancer;

TriforceDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var styleSettings = {
    height: 100,
    width: 100
  };
  this.$node.css(styleSettings);

  var self = this;
  $('.triforce').on('mouseover', function() {
    var styleSettings = {
      height: 200,
      width: 200
    };
    self.$node.css(styleSettings);
  });

};