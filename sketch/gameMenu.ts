class GameMenu {

  /* Variable */

  // private highscore: number;
  // private setupGameDialog: string;
  // private soundOnOff: boolean;
  // private endGameDialog: string;
  // private gameManager: GameManager;
  // public input: boolean; 
  // public highscore: number;
  // public gameState : boolean;
  public isGameRunning: boolean;
  public startGameButton: Button;
  public theRandomStars: randomStar;
  // public gameManager: GameManager;
  public world: World;
  public paddle: Paddle;
  private highScoreLS: number;

  constructor() {
    this.startGameButton = new Button("Start Game", windowWidth/1.8 /2 -100, windowHeight/2, 200, 100, "#EEAA3A");
    this.isGameRunning = false;
    this.theRandomStars = new randomStar();
    // this.gameState = false;
    // this.gameManager = new GameManager();
    this.world = new World();
    this.paddle = new Paddle();
    this.highScoreLS = 0;
  }


  public update(): void {
    this.isGameRunning = this.startGameButton.clicked(this.isGameRunning);
    // this.gameManager.gameStart(this.isGameRunning);
    gameMenu.startGameButton.clicked(this.isGameRunning);
  }
  
  


  /* Method */


  // private soundOnOff(): boolean;
  private setHighScore(): void {
    this.highScoreLS = this.gameManager.getHighScoreLocalStorage();
  }
  
  // public gameState(): void {
  //   // this.gameState = this.isGameRunning;
  // }
  
  public draw(): void {
    
    if (!this.isGameRunning){
      push();
      fill("#130B1B");
      rect(0, 0, windowWidth/1.8, windowHeight);
      pop();
      
      push();
      fill("#E2D8E0");
      rect(0, 0, 30, windowHeight);
      pop();
      
      push();
      fill("#E2D8E0");
      rect(windowWidth/1.8 - 30, 0, 30, windowHeight);
      pop();
      
      push();
      fill("#605559");
      rect(30, 0, windowWidth/1.8-60, 30);
      pop();
      
      push();
      fill("#605559");
      rect(30, windowHeight-30, windowWidth/1.8-60, 30);
      pop();
      this.theRandomStars.draw();
      
      push();
      fill("white");
      textSize(45);
      textFont("punkboy");
      textAlign(CENTER, TOP);
      text("Nobel Popper",windowWidth/1.8 / 2,50)
      pop();
      
      this.startGameButton.draw();
      // this.gameManager.draw();
      // this.world.draw();
      // this.paddle.draw();
      
    }
  }
  
}