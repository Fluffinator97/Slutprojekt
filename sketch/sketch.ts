let gameMenu: GameMenu;
let gameRunning: boolean;

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
    createCanvas(windowWidth / 1.8, windowHeight);
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
    background(55);
    gameMenu.update();
    gameMenu.draw();

    if (gameMenu.startGameButton.clicked()) {
        alert('hurra!')
    }
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth / 1.8, windowHeight);
}

