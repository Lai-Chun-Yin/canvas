
$('#drawing-rectangle').click(() => {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
});
$('#drawing-line').click(() => {
    currentFunction = new DrawingLine(contextReal, contextDraft);
});
$('#drawing-circle').click(()=>{
    currentFunction = new DrawingCircle(contextReal, contextDraft);
});
$('#color-picker').click(() => {
    currentFunction = new ColorPicker(contextReal, contextDraft);
});

currentFunction = new DrawingRectangle(contextReal, contextDraft); 

currentFillColor = 'rgba(255,0,0,1)';

$('#save-image').click(()=>{
    let link = document.getElementById('save-link');
    link.setAttribute('download', 'image.png');
    link.setAttribute('href', canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
});