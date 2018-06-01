// class DrawingBezierCurve extends PaintFunction{
//     constructor(contextReal,contextDraft){
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;
//         this.actionCounter = 0;
//     }

//     onMouseDown(coord,event){
//         if (this.actionCounter === 0){
//             this.contextReal.lineCap = "round"; //lineCap = "butt" or "round"
//             this.contextDraft.lineCap = "round"; //lineCap = "butt" or "round"
//             // this.contextReal.strokeStyle = canvasSettings.colorStroke; //canvas-configuration.js
//             // this.contextDraft.strokeStyle = canvasSettings.colorStroke; //canvas-configuration.js
//             // this.contextReal.lineWidth = canvasSettings.brushSize; //canvas-configuration.js
//             // this.contextDraft.lineWidth = canvasSettings.brushSize; //canvas-configuration.js
//             this.origX = coord[0];
//             this.origY = coord[1];
//             this.contextReal.beginPath();
//             this.contextReal.moveTo(this.origX,this.origY);
//         } 
//         else if (this.actionCounter === 1){
//         } 
//         else if (this.actionCounter === 2){
//         }
//     }
//     onDragging(coord,event){
//         if (this.actionCounter === 0){
//             this.endX = coord[0];
//             this.endY = coord[1];
//             this.contextDraft.closePath();
//             this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//             this.contextDraft.beginPath();
//             this.contextDraft.moveTo(this.origX,this.origY);
//             this.contextDraft.bezierCurveTo(this.origX,this.origY,this.endX,this.endY,this.endX,this.endY);
//             this.contextDraft.stroke();
//             console.log(this.actionCounter);
//         } else if (this.actionCounter === 1){
//             this.cp1X = coord[0];
//             this.cp1Y = coord[1];
//             this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//             this.contextDraft.beginPath();
//             this.contextDraft.moveTo(this.origX,this.origY);
//             this.contextDraft.bezierCurveTo(this.cp1X,this.cp1Y,this.cp1X,this.cp1Y,this.endX,this.endY);
//             this.contextDraft.stroke();
//             console.log(this.actionCounter);
//         } else if (this.actionCounter === 2){
//             this.cp2X = coord[0];
//             this.cp2Y = coord[1];
//             this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//             this.contextDraft.beginPath();
//             this.contextDraft.moveTo(this.origX,this.origY);
//             this.contextDraft.bezierCurveTo(this.cp1X,this.cp1Y,this.cp2X,this.cp2Y,this.endX,this.endY);
//             this.contextDraft.stroke();
//             console.log(this.actionCounter);
//         }
//     }
//     onMouseUp(coord,event){
//         if (this.actionCounter === 0){
//             this.actionCounter = 1;
//         } else if (this.actionCounter === 1){
//             this.actionCounter = 2;
//             // this.onFinish();
//         } else if (this.actionCounter === 2){
//             this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//             this.contextReal.bezierCurveTo(this.cp1X,this.cp1Y,this.cp2X,this.cp2Y,this.endX,this.endY);
//             this.contextReal.stroke();
//             this.actionCounter = 0;
//             // this.onFinish();
//         }
//     }
//     // onFinish(){
//     //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount] = new Image();
//     //     canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount].src = canvasReal.toDataURL();
//     //     canvasSettings.undoObject.actionCount++;
//     // }
// }