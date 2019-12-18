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
  public gameManager: GameManager;

  constructor() {
    this.startGameButton = new Button("Start Game", 100, 100, 200, 100);
    this.isGameRunning = false;
    // this.gameState = false;
    this.gameManager = new GameManager();

  }

  public update(): void {
    this.isGameRunning = this.startGameButton.getButtonPressed();
    this.gameManager.gameStart(this.isGameRunning);
  }


  /* Method */
  // private soundOnOff(): boolean;
  // getHighScoreTLS(): number;
  // private setHighScore(): number;
  
  // public gameState(): void {
  //   // this.gameState = this.isGameRunning;
  // }

  public draw(): void {

    if (!this.isGameRunning){
      this.startGameButton.draw();
      this.gameManager.draw();
    }
    
  }

}