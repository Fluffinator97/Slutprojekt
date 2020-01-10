let gameMenu: GameMenu;
let gameRunning: boolean;

/* Sounds*/
let song: p5.SoundFile;
let bounce: p5.SoundFile;
let explosion: p5.SoundFile;
let music: p5.SoundFile;
let alfred: p5.Image;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    soundFormats('mp3');
    bounce = (window as any).loadSound('./assets/sound/bounceI');
    explosion = (window as any).loadSound('./assets/sound/explosion.mp3')
    alfred = loadImage('./pictures/Alfred_paddel.svg');
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
    song = (window as any).loadSound("./assets/sound/musicIII.mp3", loaded);
    
        song.setVolume(0.2);
        explosion.setVolume(0.3);
        bounce.setVolume(0.7);
}


function loaded() {
    song.loop();
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

    if (gameMenu.mute != false){
        song.setVolume(0);
        explosion.setVolume(0);
        bounce.setVolume(0);
    }
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth / 3, windowHeight);
}
