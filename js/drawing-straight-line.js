class DrawingStraightLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextReal.lineJoin = "round";
        this.contextDraft.lineJoin = "round";
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0],coord[1]);
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.drawDraft(coord[0],coord[1]);
    }

    onMouseMove(){}
    
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.drawReal(coord[0],coord[1]);
    }

    onMouseLeave(){}
    onMouseEnter(){}

    drawDraft(x,y){
        this.contextDraft.lineTo(x,y);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }

    drawReal(x,y){
        this.contextReal.lineTo(x,y);
        this.contextReal.closePath();
        this.contextReal.stroke();    
    }

}