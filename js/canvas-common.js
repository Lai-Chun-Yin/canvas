
    let canvasReal = document.getElementById('canvas-real');
    let contextReal = canvasReal.getContext('2d');
    let canvasDraft = document.getElementById('canvas-draft');
    let contextDraft = canvasDraft.getContext('2d');
    
    let currentFunction;
    let dragging = false;

    //for tracking action on canvas
    let cPushArray = new Array();
    let cStep = -1;
    let cAddStep = function(){
        cStep++;
        if (cStep < cPushArray.length) { cPushArray.length = cStep; }
        cPushArray.push(canvasReal.toDataURL("image/png"));
    }
    
    $('#canvas-draft').mousedown(function(e){
        let canvasRec = this.getBoundingClientRect();
        let mouseX = e.pageX - canvasRec.left;
        let mouseY = e.pageY - canvasRec.top;
        currentFunction.onMouseDown([mouseX,mouseY],e);
        dragging = true;
    });
    
    $('#canvas-draft').mousemove(function(e){
        let canvasRec = this.getBoundingClientRect();
        let mouseX = e.pageX - canvasRec.left;
        let mouseY = e.pageY - canvasRec.top;
        if(dragging){
            currentFunction.onDragging([mouseX,mouseY],e);
        }
        currentFunction.onMouseMove([mouseX,mouseY],e);
    });
    
    $('#canvas-draft').mouseup(function(e){
        dragging = false;
        let canvasRec = this.getBoundingClientRect();
        let mouseX = e.pageX - canvasRec.left;
        let mouseY = e.pageY - canvasRec.top;
        currentFunction.onMouseUp([mouseX,mouseY],e);
        //for tracking action on canvas
        //if(!(currentFunction instanceof ColorPicker)){cAddStep();}
    });
    
    $('#canvas-draft').mouseleave(function(e){
        dragging = false;
        let canvasRec = this.getBoundingClientRect();
        let mouseX = e.pageX - canvasRec.left;
        let mouseY = e.pageY - canvasRec.top;
        currentFunction.onMouseLeave([mouseX,mouseY],e);
    });
    
    $('#canvas-draft').mouseenter(function(e){
        let canvasRec = this.getBoundingClientRect();
        let mouseX = e.pageX - canvasRec.left;
        let mouseY = e.pageY - canvasRec.top;
        currentFunction.onMouseEnter([mouseX,mouseY],e);
    });
    
    class PaintFunction{
        constructor(){}
        onMouseDown(){}
        onDragging(){}
        onMouseMove(){}
        onMouseUp(){}
        onMouseLeave(){}
        onMouseEnter(){}
    }    