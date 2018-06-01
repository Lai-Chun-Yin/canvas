
$('#drawing-rectangle').click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
    contextReal.globalCompositeOperation="source-over";
});
$('#drawing-line').click(() => {
    currentFunction = new DrawingLine(contextReal, contextDraft);
});
$('#drawing-straight-line').click(() => {
    currentFunction = new DrawingStraightLine(contextReal, contextDraft); 
});
$('#drawing-quadratic-curve').click(() => {
    currentFunction = new DrawingQuadraticCurve(contextReal, contextDraft);
});
$('#drawing-bezier-curve').click(() => {
    currentFunction = new DrawingBezierCurve(contextReal, contextDraft);
});
$('#drawing-bubbles').click(() => {
    currentFunction = new DrawingBubbles(contextReal, contextDraft);
    contextReal.globalCompositeOperation="source-over";
});$('#drawing-straight-line').click(() => {
    currentFunction = new DrawingStraightLine(contextReal, contextDraft);
    contextReal.globalCompositeOperation="source-over";
});
$('#drawing-curve').click(()=>{
    currentFunction = new DrawingBezierCurve(contextReal, contextDraft);
    contextReal.globalCompositeOperation="source-over";
});
$('#drawing-circle').click(()=>{
    currentFunction = new DrawingCircle(contextReal, contextDraft);
    contextReal.globalCompositeOperation="source-over";
});
$('#drawing-polygon').click(()=>{
    currentFunction = new DrawingPolygon(contextReal,contextDraft);
    contextReal.globalCompositeOperation="source-over";
});
$('#color-picker').click(() => {
    currentFunction = new ColorPicker(contextReal, contextDraft);
    contextReal.globalCompositeOperation="source-over";
});
$('#eraser').click(()=>{
    currentFunction = new DrawingLine(contextReal, contextDraft);
    contextReal.globalCompositeOperation="destination-out";
});
//for brush width handler
var brushWidth = document.getElementById("brush-width");
contextReal.lineWidth = this.value;
contextDraft.lineWidth = this.value;
brushWidth.oninput = function() {
    contextReal.lineWidth = this.value;
    contextDraft.lineWidth = this.value;
}
//end of brush width handler

currentFunction = new DrawingRectangle(contextReal, contextDraft); 

currentFillColor = 'rgba(255,0,0,1)';

//function keys

$('#save-image').click(()=>{
    let link = document.getElementById('save-link');
    link.setAttribute('download', 'image.png');
    link.setAttribute('href', canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
});

$('#clear-image').click(() => {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextReal.globalCompositeOperation="source-over";
    cAddStep();
});

$('#load-image').click(()=>{
    let loadUrl = prompt("Please enter the photo URL:", "https://picsum.photos/400/300");
    getStepImage(loadUrl).then(function(image){
        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
        canvasDraft.width=image.width;
        canvasDraft.height=image.height;
        canvasReal.width=image.width;
        canvasReal.height=image.height;
        /*contextReal = canvasReal.getContext('2d');
        contextDraft = canvasDraft.getContext('2d');*/
        contextReal.drawImage(image,0,0);
        
    }).catch(function(url){alert('The URL entered is invalid')});
});

let imageObj = new Image();
$('#undo').click(()=>{
    if(cStep>0){
        cStep--;
        getStepImage(cPushArray[cStep]).then(function(image){
            contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
            contextReal.drawImage(image,0,0);
        });
    }
});
$('#redo').click(()=>{
    if(cStep<cPushArray.length-1){
        cStep++;
        getStepImage(cPushArray[cStep]).then(function(image){
            contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
            contextReal.drawImage(image,0,0);
        });
    }
});

function getStepImage(url){
    return new Promise(function(resolve, reject){
        imageObj.onload = function(){
            resolve(imageObj);
        }
        imageObj.onerror = function(){
            reject(url);
        }
        imageObj.src = url;
        imageObj.crossOrigin = "Anonymous";
    })
}