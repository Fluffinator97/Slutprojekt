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
  public pauseGameButton: Button;
  public gameManager: GameManager;
  public world: World;
  public paddle: Paddle;
  private highScoreLS: number;

  constructor() {
    this.startGameButton = new Button("Start Game", 100, 100, 200, 100, "brown");
    this.pauseGameButton = new Button("Pause Game", 200, 100, 200, 100, "blue");
    this.isGameRunning = false;
    // this.gameState = false;
    this.gameManager = new GameManager();
    this.world = new World();
    this.paddle = new Paddle();
    this.highScoreLS = 0;
  }

  public update(): void {
    this.isGameRunning = this.startGameButton.getButtonPressed();
    // this.gameManager.gameStart(this.isGameRunning);
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
      // detta borde ligga in en update metod istället
      this.world.update();
      
      // this.startGameButton.draw();
      // this.pauseGameButton.draw();
      this.world.draw();
      this.gameManager.draw();
      this.paddle.draw();
    }  
  }

}