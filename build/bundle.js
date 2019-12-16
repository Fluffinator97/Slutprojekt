"use strict";
function preload() {
}
function setup() {
    createCanvas(windowWidth / 2.5, windowHeight);
    frameRate(60);
    noCursor();
    fullscreen();
}
function draw() {
    background(100);
    fill('red');
    stroke('white');
    circle(width * .5, height * .5, width * 0.07);
    rect(width / 2, height - 20, width * .3, 15, 10);
    arc(width / 2, height - 27, width * .2, height * .06, radians(180), radians(360));
    rectMode(CENTER);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=bundle.js.map