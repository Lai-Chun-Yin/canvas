class DrawingBezierCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.setControl = false;
        this.controlPoints = [];
    }

    onMouseDown(coord, event) {
        this.contextReal.lineJoin = "round";
        this.contextDraft.lineJoin = "round";
        if(!this.setControl){
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0], coord[1]);
        this.origX = coord[0];
        this.origY = coord[1];}
    }

    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    onMouseMove(coord, event) {
        if (this.setControl) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            if (this.controlPoints.length == 1) {
                this.contextDraft.bezierCurveTo( this.controlPoints[0][0], this.controlPoints[0][1], coord[0], coord[1], this.endPointX, this.endPointY);
            } else {
                this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.endPointX, this.endPointY);
            }
            this.contextDraft.stroke();
            this.contextDraft.closePath();
        }
    }

    onMouseUp(coord) {
        //this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        //if(!setControl)

        if (this.setControl) {
            this.controlPoints.push([coord[0], coord[1]]);
            if (this.controlPoints.length > 1) {
                this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
                this.contextReal.bezierCurveTo(this.controlPoints[0][0],this.controlPoints[0][1],this.controlPoints[1][0],this.controlPoints[1][1],this.endPointX,this.endPointY);
                this.contextReal.stroke();
                this.contextReal.closePath();
                this.controlPoints.length=0;
                this.setControl=false;
                cAddStep();
            }
        } else {
            this.endPointX = coord[0];
            this.endPointY = coord[1];
            this.setControl = true;
        }
        //this.drawReal(coord[0], coord[1]);
        //cAddStep();
    }
    onMouseLeave() { }
    onMouseEnter() { }

    drawDraft(x, y) {
        this.contextDraft.lineTo(x, y);
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

}