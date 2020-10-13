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









/*
var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};
*/


