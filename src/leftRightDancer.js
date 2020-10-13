var LeftRightDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('runningLink');
  this.displacement = 60;
};

LeftRightDancer.prototype = Object.create(Dancer.prototype);
LeftRightDancer.prototype.constructor = LeftRightDancer;


LeftRightDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  setTimeout(function() {
    var currX = this.$node.position().left;

    Dancer.prototype.setPosition.call(this, this.top, currX + this.displacement);

  }.bind(this), 0);

  let newX = this.$node.position().left + this.displacement;



  if (newX - 50 <= 0 || newX + 70 >= $('body').width()) {
    if (newX > $('body').width()) {
      this.displacement = -40;
      this.$node.css('transform', 'rotateY(180deg)');
    }
    if (newX < 0) {
      this.displacement = 40;
      this.$node.css('transform', 'rotateY(0)');
    }
  }
};