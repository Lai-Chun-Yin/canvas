class DrawingStraightLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.lineJoin = "round";
        this.contextDraft.lineJoin = "round";
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0], coord[1]);
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.drawDraft(coord[0], coord[1]);
    }

    onMouseMove() { }

    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.drawReal(coord[0], coord[1]);
        cAddStep();
    }
    onMouseLeave() { }
    onMouseEnter() { }

    drawDraft(x, y) {
        this.contextDraft.lineTo(x, y);
        //this.contextDraft.moveTo(x,y);
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    drawReal(x, y) {
        this.contextReal.lineTo(x, y);
        //this.contextReal.moveTo(x, y);
        this.contextReal.stroke();
        this.contextReal.closePath();
        
    }

}