class Button {

    /* Variable */

    private y: number;
    private x: number;
    private height: number;
    private width: number;
    public dialog: string;
    public color: string;
    private isMouseDown: boolean;
    private fontColor: string;

    constructor(dialog: string, x: number, y: number, width: number, height: number, color: string, fontColor: string) {
        this.dialog = dialog;
        this.y = y;
        this.x = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.isMouseDown = false;
        this.fontColor = fontColor;
    }

    public clicked(isGameRunning: boolean): boolean {
        const left = this.x;
        const right = this.x + this.width;
        const top = this.y;
        const bottom = this.y + this.height;
        isGameRunning;

        let isMousePressed = false
        if (this.isMouseDown && !mouseIsPressed) {
            if (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom) {
                isMousePressed = true;
                isGameRunning = true;
                return isGameRunning;
            }
        }

        this.isMouseDown = mouseIsPressed
        return isMousePressed;
    }

    /* Method */

    public draw(): void {
        push();
        rectMode('corner')
        fill(this.color)
        rect(this.x, this.y, this.width, this.height, 10);
        fill(this.fontColor)
        textSize(20);
        strokeWeight(1);
        textAlign(CENTER, CENTER);
        textFont("punkboy");
        text(this.dialog, this.x, this.y, this.width, this.height)
        pop();
    }

}