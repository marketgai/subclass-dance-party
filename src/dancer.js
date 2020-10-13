// Creates and returns a new dancer object that can step
// Refactoring functional to pseudoclassical pattern

var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.moving = true;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  if (this.moving) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
// lineup at 220 from the top
Dancer.prototype.lineUp = function() {
  this.top = 220;
  var styleSettings = {
    top: 220,
  };
  this.$node.css(styleSettings);
  this.moving = false;
};

Dancer.prototype.breakLine = function() {
  this.moving = true;
  this.step();
  this.top = $('body').height() * Math.random();
  this.setPosition(this.top, this.left);
};


