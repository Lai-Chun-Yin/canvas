
$('#drawing-rectangle').click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
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
});
$('#drawing-circle').click(()=>{
    currentFunction = new DrawingCircle(contextReal, contextDraft);
});
$('#color-picker').click(() => {
    currentFunction = new ColorPicker(contextReal, contextDraft);
});
//for brush width handler
var brushWidth = document.getElementById("brush-width");
contextReal.lineWidth = this.value;
contextDraft.lineWidth = this.value;
brushWidth.oninput = function() {
    contextReal.lineWidth = this.value;
    contextDraft.lineWidth = this.value;
}

currentFunction = new DrawingRectangle(contextReal, contextDraft); 

currentFillColor = 'rgba(255,0,0,1)';



$('#save-image').click(()=>{
    let link = document.getElementById('save-link');
    link.setAttribute('download', 'image.png');
    link.setAttribute('href', canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
});