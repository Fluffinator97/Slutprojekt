let gameMenu: GameMenu;
let gameRunning: boolean;
let song: p5.SoundFile;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    soundFormats('mp3');
    // song = (window as any).loadSound('../assets/backgroundSound.mp3');
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
    createCanvas(windowWidth / 3, windowHeight);
    frameRate(60);
    fullscreen();
    gameMenu = new GameMenu();
    song = (window as any).loadSound("/assets/backgroundSound.mp3", loaded);
    // song.play();
    song.setVolume(0.1);
}

function loaded() {
    song.play();
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

    if (gameMenu.isGameRunning == true) {
        noCursor();
    }
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth / 3, windowHeight);
}
