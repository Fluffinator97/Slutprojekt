class GameMenu {

  /* Variable */
  // private highscore: number;
  // private setupGameDialog: string;
  // private soundOnOff: boolean;
  // private endGameDialog: string;
  // private gameManager: GameManager;
  // private isGameRunning: boolean;
  // public input: boolean; 

  public x: number;
  public highscore: number;

  constructor(x: number, highscore: number) {
    this.x = x;
    this.highscore = highscore;

  }



  /* Method */
  // private soundOnOff(): boolean;
  // getHighScoreTLS(): number;
  // private setHighScore(): number;
  // private startGame(): object {

  // }



  public draw(x: number, highscore: number): void {
    this.highscore = 20;
    this.x = 100;
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, 100, 100);
    

  
    // Button.draw("Start Game");


    
  }

}