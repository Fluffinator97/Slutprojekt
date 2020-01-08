// class Sound {

//     private bounceI: any;
//     private bounceII: any;
//     private bounceIII: any;
//     private music: any;
//     private explosion: any;

//     public volumeSlider: ?;
//     public pauseButton: ;


//     constructor() {
        
//     }











//     // function setup() {



//     // // PLAY / PAUSE BUTTON

//     // this.pauseButton = createButton('music on');
//     // this.pauseButton.mousePressed(togglePlaying);

//     // // VOLUME SLIDER


//     // this.volumeSlider = createSlider(0, 1, 0.5, 0.01);

//     // }

// }



// // PLAY / PAUSE BUTTON

// // function togglePlaying() {
// //     if (!music.isPlaying()) {
// //         music.loop();


// //         // masterVolume(1, 1, 1)

// //         pauseButton.html('music off')

// //     } else {
// //         music.pause();
// //         // masterVolume(0, 1, 1)

// //         pauseButton.html('music on')

// //     }


// // }








// function playSFX(event) {



//     let random = Math.floor((Math.random() * 10) + 1);


//     // if (event == 'bounce') { // random blop
//     //     console.log('playSFX: Event Bounce');
//     //     bounceI.play();
//     //     console.log(random)
//     // }



//     if (event == 'bounce') { // random blop

//         if (random <= 5) {
//             console.log('playSFX: Event Bounce under 5');
//             this.bounceI.play();
//             // bounceI.setVolume(0.1);
//             console.log(random)

//         } else {
//             console.log('playSFX: Event Bounce över 5');
//             this.bounceIII.play();
//             // bounceI.setVolume(0.1);
//             console.log(random)

//         }

//     }





//     if (event == 'explosion') {
//         console.log('playSFX: Event Explosion');
//         explosion.play();
//     }


//     //   if (event == 'bounce') {

//     //       bounceI.play();
//     //       console.log('SFX Played')
//     //     }


// }







// // MUTE FUNCTION
// function mute(state) {
//     if (state == true) {
//         masterVolume(0, 1, 1);

//     } else {
//         masterVolume(1, 1, 1);

//     }


// }






// function mousePressed() {

//     playSFX('bounce')

//     // if (music.isPlaying()) {
//     //   // .isPlaying() returns a boolean
//     //   music.stop();
//     //   background(255, 0, 0);
//     // } else {
//     //   music.loop();
//     //   background(0, 255, 0);
//     // }

// }




// function keyPressed() {

//     playSFX('explosion')



// }
// } 