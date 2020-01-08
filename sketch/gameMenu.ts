class GameMenu {

  /* Variable */

  public isGameRunning: boolean;
  public startGameButton: Button;
  public muteButton: Button;
  public soundMuteButton: Button;
  public highScoreButton: Button;
  public theRandomStars: randomStar;
  public gameManager: GameManager;
  public world: World;
  public mute: boolean;
  public gameOver: boolean;

  private gameOverImage: p5.Image; /// ---


  constructor() {
    this.gameManager = new GameManager();
    this.theRandomStars = new randomStar();
    this.startGameButton = new Button("Start Game", windowWidth / 3 / 2 - 100, windowHeight / 4, 200, 100, "#EEAA3A", "#673aee");
    this.muteButton = new Button("Mute", windowWidth / 3 / 2 - 100, windowHeight / 2, 200, 100, "#EEAA3A", "#673aee");
    this.soundMuteButton = new Button("Sound/Mute", windowWidth / 9 / 8, windowHeight - 40, 135, 30, "#EEAA3A", "#673aee");
    this.highScoreButton = new Button("High Score " + this.gameManager.highScoreLocalStorage(), windowWidth / 3 / 2 - 100, windowHeight / 1.35, 200, 100, "#673aee", "#EEAA3A");
    this.isGameRunning = false;
    this.world = new World();
    this.mute = false;
    this.gameOver = false;

    this.gameOverImage = loadImage('../assets/img/gameoverII.png');

  }

  public update(): void {
    this.gameManager.highScoreLocalStorage();

    if (!this.isGameRunning) {
      this.isGameRunning = this.startGameButton.clicked(this.isGameRunning);
    }
    else {
      this.isGameRunning = true;
    }
    gameMenu.startGameButton.clicked(this.isGameRunning);

    // Lägg till en mute funktion
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
      this.muteButton.draw();
      this.highScoreButton.draw();
    } else if(this.isGameRunning && !this.gameOver) {
      // detta borde ligga in en update metod istället
      this.soundMuteButton.draw();
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
        // GAME OVER
        push()
        // background(0);
      
        imageMode(CENTER);
        image(this.gameOverImage, width / 2, height / 1.3 , width * 1 , height * .5);
        pop();
    }
  }
}