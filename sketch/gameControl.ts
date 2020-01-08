class GameControl {

    /* Variable */

    private mouseInputX: number;
    private mouseInputY: number;

    constructor() {
        this.mouseInputX = mouseX,
        this.mouseInputY = mouseY;
    }

    /* Method */

    public updateYpos(): number {
        return this.mouseInputY
    }

    public updateXpos(): number {
        return this.mouseInputX
    }
}