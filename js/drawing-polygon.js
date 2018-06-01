class DrawingPolygon extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.drawing = false;
    }

    onMouseDown(coord, event) {
        this.contextReal.lineJoin = "round";
        this.contextDraft.lineJoin = "round";
        if(this.drawing===false){
        this.contextReal.beginPath();
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.moveTo(this.origX,this.origY);
        this.drawing=true;}
        if(typeof this.stopX=="undefined"){
        this.stopX=coord[0];
        this.stopY=coord[1];}
    }

    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.stopX, this.stopY);
        this.drawDraft(coord[0], coord[1]);
    }

    onMouseMove() { }

    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        if((Math.abs(coord[0]-this.origX)<10&&Math.abs(coord[1]-this.origY)<10)&&this.drawing===true){
            this.drawReal(this.origX,this.origY);
            this.contextReal.fill();
            this.contextReal.closePath();
            this.drawing=false;
            this.stopX=undefined;
            this.stopY=undefined;
            cAddStep();
        }else{
        this.drawReal(coord[0], coord[1]);}
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
        this.stopX=x;
        this.stopY=y;
        this.contextReal.stroke();
    }
}