class GameManager {

    /* Variable */

    public highScore: number;
    private startGame: boolean;
    private player: Player;


    constructor() {
        this.highScore = 0;
        this.startGame = false;
        this.player = new Player();
    }

    /* Method */

    public gameStart(startGame: boolean): void {
        this.startGame = startGame;
        push();
        fill('white')
        text("startGame " + this.startGame, 200, 360, 300, 300);
        pop();
    }

    private setTime(): void {
        if (this.startGame == true) {
        }
    }

    public getPlayerName(): void {
        push();
        fill('white')
        text("player " + this.player.name, 200, 380, 300, 300);
        pop();
    }

    public highScoreLocalStorage(): number {
        if (this.player.getHighScoreLS() > 1) {
            this.highScore = this.player.getHighScoreLS();
        } else {
            this.highScore = 0;
        }
        return this.highScore;
    }

    public draw(): void {
        this.player.draw();
    }

}