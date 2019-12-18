class GameManager {

    /* Variable */
    private time: number;
    private difficulty: number;
    private score: number;
    private startGame: boolean;
    //private gameOver: boolean;
    //private player?: player;

    constructor() {
        this.time = 0;
        this.difficulty = 0;
        this.score = 0;
        this.startGame = false;

    }

    /* Method */

    private getTime(): void {
        push();
        fill('white')
        text("time " + this.time, 200, 300, 300, 300);
        pop();
    }

    private updateDifficulty(): void {
        push();
        fill('white')
        text("difficulty " + this.difficulty, 200, 320, 300, 300);
        pop();
    }

    private updateScore(): void {
        push();
        fill('white')
        text("score " + this.score, 200, 340, 300, 300);
        pop();
    }

    public gameStart(startGame: boolean): void {
        this.startGame = startGame;
        push();
        fill('white')
        text("startGame " + this.startGame, 200, 360, 300, 300);
        pop();
    }
    //private gameOver(): void
    //private endGameDialog(): object
    //private getScore(): number
    //private saveScoreTLS(): number
    //private getDeltaTime(): object

    public draw(): void {
        this.updateScore();
        this.updateDifficulty();
        this.getTime();
    }

}