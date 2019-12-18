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

  constructor() {
    this.startGameButton = new Button("Start Game", 100, 100, 200, 100);
    this.isGameRunning = false;
    // this.gameState = false;

  }

  public update(): void {
    this.isGameRunning = this.startGameButton.getButtonPressed();
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
    }
    
  }

}