var FightingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fightingLink');
  this.VDisplacement = 50;
  this.HDisplacement = -50;
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

  // find the next placement to see if it would hi thte edge of the screen
  let newY = this.$node.position().top + this.VDisplacement;
  let newX = this.$node.position().left + this.HDisplacement;

  var HBorderCollision = newX - 50 <= 0 || newX + 50 >= $('body').width();
  var VBorderCollision = newY - 50 <= 0 || newY + 50 >= 600;

  if (HBorderCollision) {
    if (newX > $('body').width()) {
      this.HDisplacement = -this.HDisplacement;
      this.$node.css('transform', 'rotateY()');
    }
    if (newX < 0) {
      this.HDisplacement = -this.HDisplacement;
      this.$node.css('transform', 'rotateY(180deg)');
    }
    HBorderCollision = false;
  }


  if (VBorderCollision) {
    this.VDisplacement = -this.VDisplacement;
    VBorderCollision = false;
  }

};

Dancer.prototype.lineUp = function() {
  this.top = 220;
  var styleSettings = {
    top: 220,
  };
  this.$node.css(styleSettings);
  this.moving = false;
};