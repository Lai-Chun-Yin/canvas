class DrawingStraightLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextReal.strokeStyle = "black";
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 5;
        this.contextDraft.strokeStyle = "black";
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = 5;
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0],coord[1]);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(coord[0],coord[1]);
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
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
        // this.contextDraft.moveTo(x,y);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }

    drawReal(x,y){
        this.contextReal.lineTo(x,y);
        this.contextReal.moveTo(x,y);
        this.contextReal.closePath();
        this.contextReal.stroke();    
    }

}