var LeftRightDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('runningLink');
  this.displacement = 40;
};

LeftRightDancer.prototype = Object.create(Dancer.prototype);
LeftRightDancer.prototype.constructor = LeftRightDancer;
LeftRightDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  setTimeout(function() {
    var currX = this.$node.position().left;

    Dancer.prototype.setPosition.call(this, this.top, currX + this.displacement);

  }.bind(this), 0);

  newX = this.$node.position().left + 50;

  var borderCollision =
    newX - 50 <= 0 ||
    newX + 50 >= $('body').width();

  if (borderCollision) {
    if (newX > $('body').width()) {
      this.displacement = -40;
      this.$node.css('transform', 'rotateY(180deg)');
    }

    if (newX < 0) {
      this.displacement = 40;
      this.$node.css('transform', 'rotateY(0)');
    }
    borderCollision = false;


  }
};