class GameMenu {

  /* Variable */

  // private highscore: number;
  // private setupGameDialog: string;
  // private soundOnOff: boolean;
  // private endGameDialog: string;
  // private gameManager: GameManager;
  // public input: boolean; 
  // public highscore: number;
  public isGameRunning: boolean;
  public startGameButton: Button;
  public muteButton: Button;
  public soundMuteButton: Button;
  public highScoreButton: Button;
  public theRandomStars: randomStar;
  public gameManager: GameManager;
  public world: World;
  public mute: boolean;

  constructor() {
    this.gameManager = new GameManager();
    this.theRandomStars = new randomStar();

    this.startGameButton = new Button("Start Game", windowWidth / 3 / 2 - 100, windowHeight / 4, 200, 100, "#EEAA3A", "#673aee");
    this.muteButton = new Button("Mute", windowWidth / 3 / 2 - 100, windowHeight / 2, 200, 100, "#EEAA3A", "#673aee");
    this.soundMuteButton = new Button("Sound/Mute", windowWidth / 9 / 8, windowHeight - 40, 135, 30, "#EEAA3A", "#673aee");
    this.highScoreButton = new Button("High Score " + this.gameManager.highScoreLocalStorage(), windowWidth / 3 / 2 - 100, windowHeight / 1.35, 200, 100, "#673aee", "#EEAA3A");
    this.isGameRunning = false;
    // this.gameState = false;
    this.world = new World();
    this.mute = false;
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


  // private soundOnOff(): boolean;
  // private setHighScore(): any {
  //   this.highScoreLS = this.gameManager.getHighScoreLocalStorage();
  // }

  // public gameState(): void {
  //   // this.gameState = this.isGameRunning;
  // }

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
    }
    else {
      // detta borde ligga in en update metod istället

      this.soundMuteButton.draw();
      this.world.update();
      this.world.draw(this.theRandomStars);
      this.gameManager.draw();
    }
  }

}