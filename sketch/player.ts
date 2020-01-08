class Player {

    /* Variable */
    public name: string;
    private score: number;
    private life: number;
    public highScoreFLS: number;
    private highScore: any;

    constructor() {
        this.name = "Örjan";
        this.score = 0;
        this.life = 3;
        this.highScoreFLS = 0;
    }


    public removeLife(): void {
        this.life - 1;
    }

    public setLife(): number {
        return this.life;
    }


    private updateScore(): number {
        if (deltaTime) {
            this.score++;
        }
        return Math.round(this.score);
    }

    private showScore(): number {
        this.score = this.updateScore();
        push();
        fill('white')
        text("score " + this.score, 170, 160, 300, 300);
        pop();
        return this.score;
    }

    private saveScore() {
        if(this.score > this.getHighScoreLS()){
            localStorage.setItem(this.name, JSON.stringify(this.score))
        }
    }

    public setHighScoreLS() {
        this.highScore;
        this.highScore = localStorage.getItem(this.name);
        this.highScoreFLS = JSON.parse(this.highScore);

    }

    public getHighScoreLS(): number {
        this.setHighScoreLS();
        return this.highScoreFLS;
    }
 
    /* Method */
    // private updateScore(): number;
    // private updateLife(): number;


    public draw() {
        this.setHighScoreLS();
        this.updateScore();
        this.showScore();
        this.saveScore();
    }
}