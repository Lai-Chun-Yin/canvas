
$('#drawing-rectangle').click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
    contextReal.globalCompositeOperation="source-over";
});
$('#drawing-line').click(() => {
    currentFunction = new DrawingLine(contextReal, contextDraft);
    contextReal.globalCompositeOperation="source-over";
});$('#drawing-straight-line').click(() => {
    currentFunction = new DrawingStraightLine(contextReal, contextDraft);
    contextReal.globalCompositeOperation="source-over";
});
$('#drawing-circle').click(()=>{
    currentFunction = new DrawingCircle(contextReal, contextDraft);
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

$('#save-image').click(()=>{
    let link = document.getElementById('save-link');
    link.setAttribute('download', 'image.png');
    link.setAttribute('href', canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
});