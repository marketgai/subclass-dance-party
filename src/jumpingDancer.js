var FightingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('tingle');
  this.VDisplacement = 50;
  this.HDisplacement = 50;
};

FightingDancer.prototype = Object.create(Dancer.prototype);
FightingDancer.prototype.constructor = FightingDancer;

FightingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  console.log('fighting dancer step');

  setTimeout(function() {
    var currX = this.$node.position().left;
    var currY = this.$node.position().top;

    Dancer.prototype.setPosition.call(this, currY + this.VDisplacement, currX + this.HDisplacement);

  }.bind(this), 0);

  let newY = this.$node.position().top - 50;

  var borderCollision =
    newY - 50 <= 0 ||
    newY + 50 >= $('body').width();

  if (borderCollision) {
    if (newX < $('body').width()) {
      this.displacement = -50;
      this.$node.css('transform', 'rotateY(180deg)');
    }

    if (newX < 0) {
      this.displacement = 40;
      this.$node.css('transform', 'rotateY(0)');
    }
    borderCollision = false;

  }

  /*mouseover grow...
  this.$node.animate({height: '200px'});
  this.$node.mouseOver(function() {
    $(this).fadeOut("slow");
  });
  */
};