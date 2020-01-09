class GameMenu {

  /* Variable */

  public isGameRunning: boolean;
  public startGameButton: Button;
  public muteButton: Button;
  public highScoreButton: Button;
  public theRandomStars: randomStar;
  public gameManager: GameManager;
  public world: World;
  public mute: boolean;
  public gameIsMuted: Button;
  public gameOver: boolean;

  private gameOverImage: p5.Image; /// ---


  constructor() {
    this.gameManager = new GameManager();
    this.theRandomStars = new randomStar();
    this.startGameButton = new Button("Start Game", windowWidth / 3 / 2 - 100, windowHeight / 4, 200, 100, "#EEAA3A", "#673aee");
    this.muteButton = new Button("Mute", windowWidth / 3 / 2 - 100, windowHeight / 2, 200, 100, "#EEAA3A", "#673aee");
    this.highScoreButton = new Button("High Score " + this.gameManager.highScoreLocalStorage(), windowWidth / 3 / 2 - 100, windowHeight / 1.35, 200, 100, "#673aee", "#EEAA3A");
    this.gameIsMuted = new Button("The game is now muted! Restart to undo.", windowWidth / 3 / 2 - 100, windowHeight / 2, 200, 100, "#130B1B", "white",);
    this.isGameRunning = false;
    this.world = new World();
    this.mute = false;
    this.gameOver = false;
    this.gameOverImage = loadImage('../assets/img/gameoverII.png');
  }

  public update(): void {
    this.gameManager.highScoreLocalStorage();

    if (!this.mute){
      this.mute = this.muteButton.clickedMute(this.mute);
    }
    else {
      this.mute = true;
    }
    if (!this.isGameRunning) {
      this.isGameRunning = this.startGameButton.clicked(this.isGameRunning);
    }
    else {
      this.isGameRunning = true;
    }
    gameMenu.startGameButton.clicked(this.isGameRunning);
  }


  /* Method */

  public draw(): void {
    if (!this.isGameRunning) {
      push();
      fill("#130B1B");
      rect(0, 0, windowWidth / 3, windowHeight);
      pop();

      push();
      fill("#E2D8E0");
      rect(0, 0, 30, windowHeight);
      pop();

      push();
      fill("#E2D8E0");
      rect(windowWidth / 3 - 30, 0, 30, windowHeight);
      pop();

      push();
      fill("#605559");
      rect(30, 0, windowWidth / 3 - 60, 30);
      pop();

      push();
      fill("#605559");
      rect(30, windowHeight - 30, windowWidth / 3 - 60, 30);
      pop();
      this.theRandomStars.draw();

      push();
      fill("white");
      textSize(45);
      textFont("punkboy");
      textAlign(CENTER, TOP);
      text("Nobel Popper", windowWidth / 3 / 2, 50)
      pop();

      this.startGameButton.draw();
      if (this.mute == false) {
        this.muteButton.draw();
      }
      else{
        this.gameIsMuted.draw();
      }
      this.highScoreButton.draw();
    } else if(this.isGameRunning && !this.gameOver) {
      this.world.update();
      this.world.draw(this.theRandomStars);
      this.gameManager.draw();
    } else if(this.isGameRunning && this.gameOver) {
        background(25)
        let score;
        let gameOverText;
        score = this.gameManager.getScore()      
        if(score < 1000) {
          gameOverText = "U SUCK!";
        } else if(score > 1000) {
          gameOverText = "U are OK!";
        } else if(score > 10000) {
          gameOverText = "U are AMAZING!";
        } else {
          gameOverText = "Get a LIFE!";
        }
        push();
        fill('white')
        textSize(33)
        text("Score " + score + "..." + gameOverText, width / 2 * 1.1, height / 2 * 1.2, width, height);
        pop();
        
        push()
        imageMode(CENTER);
        image(this.gameOverImage, width / 2, height / 1.3 , width * 1 , height * .5);
        pop();

        push();
        fill('white')
        textSize(23)
        text('Restarting..', width / 2 * 1.6, height / 2 * 1.2, width * 1, height * .5);
        pop();

        setTimeout(function () {
          location.reload();
        }, 4000);
    }
  }
}
