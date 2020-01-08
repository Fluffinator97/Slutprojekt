let gameMenu: GameMenu;
let gameRunning: boolean;
let mute: boolean;
mute = false;

/* Sounds*/
let song: p5.SoundFile;
let bounceI: p5.SoundFile;
let bounceIII: p5.SoundFile;
let explosion: p5.SoundFile;
let music: p5.SoundFile;


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    soundFormats('mp3');
    bounceI = (window as any).loadSound('assets/sound/bounceI');
    bounceIII = (window as any).loadSound('assets/sound/bounceIII.mp3');
    explosion = (window as any).loadSound('assets/sound/explosion.mp3')
}


/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    // if(mute === true) {
    //     masterVolume(0)
    // } else {
    //     masterVolume(1)
    // }
    createCanvas(windowWidth / 3, windowHeight);
    frameRate(60);
    fullscreen();
    gameMenu = new GameMenu();
    song = (window as any).loadSound("/assets/sound/musicIII.mp3", loaded, togglePlaySongMute);
    // song.play();
    song.setVolume(0.2);
    explosion.setVolume(0.3);
    bounceI.setVolume(0.7);
}


function loaded() {
    song.loop();
    // bounceI.loop()
}

function togglePlaySongMute() {
    if (song.isPlaying()) {
        song.pause();
        //button.html("Sound On")
    } else {
        song.play();
        song.setVolume(0.2);
        //button.html("Mute Sound")
    }
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
