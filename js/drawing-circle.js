class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(Math.round((this.origX+coord[0])/2),Math.round((this.origY+coord[1])/2),Math.round(Math.abs((coord[0]- this.origX)/2)),Math.round(Math.abs((coord[1] - this.origY)/2)),0,0, 2 * Math.PI);
        
        this.contextDraft.fill();
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.closePath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.ellipse(Math.round((this.origX+coord[0])/2),Math.round((this.origY+coord[1])/2),Math.round(Math.abs((coord[0]- this.origX)/2)),Math.round(Math.abs((coord[1] - this.origY)/2)),0,0, 2 * Math.PI);
        
        this.contextReal.fill();
        this.contextReal.stroke();
        this.contextReal.closePath();
        cAddStep();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}