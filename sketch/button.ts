class Button {

    /* Variable */

    private y: number;
    private x: number;
    private height: number;
    private width: number;
    public dialog: string;
    public color: string;
    private isMouseDown: boolean;

    constructor(dialog: string, x: number, y: number, width: number, height: number, color: string) {
        this.dialog = dialog;
        this.y = y;
        this.x = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.isMouseDown = false;
    }

    public clicked(): boolean {
        const left = this.x;
        const right = this.x + this.width;
        const top = this.y;
        const bottom = this.y + this.height;

        let isMousePressed = false
        if (this.isMouseDown && !mouseIsPressed) {
            if (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom) {
                this.color = "orange";
                isMousePressed = true;
            }
        }
        
        this.isMouseDown = mouseIsPressed
        return isMousePressed;
    }

    /* Method */

    
    public draw(): void {
        // const {dialog, x, y, width, height} = this;
        push();
        rectMode('corner')
        fill(this.color)
        rect(this.x, this.y, this.width, this.height, 10);
        fill(255,233,20)
        textSize(16);
        strokeWeight(0.5);
        textAlign(CENTER, CENTER);
        text(this.dialog, this.x, this.y, this.x + this.width, this.height/2)
        pop();
    }

}