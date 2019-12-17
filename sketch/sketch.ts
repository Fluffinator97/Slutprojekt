var gameMenu: GameMenu;


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');


}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth / 2.5, windowHeight);
    frameRate(60);
    fullscreen();
    gameMenu = new GameMenu();
}

/**
 * Built in draw function in P5
 * This is a good place to call public funcions of the object
 * you created in the setup function above
 */
function draw() {
    // background(100);
    // fill('red');
    // stroke('white');
    // circle(width * .5, height * .5, width * 0.07);
    // rect(width / 2, height - 20, width * .3, 15, 10);
    // arc(width / 2, height - 27, width * .2, height * .06, radians(180), radians(360));
    // rectMode(CENTER);
  //  gameMenu.draw();
}



/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}