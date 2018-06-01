class ImageFilter {
    constructor(contextReal,contextDraft,manipulation){
        this.contextReal=contextReal;
        this.contextDraft=contextDraft;
        this.manipulation=manipulation;
    }

    updateImageData(){
        this.imageData=contextReal.getImageData(0,0,canvasReal.width,canvasReal.height);
    }
    manipulatePixels(){
        this.manipulation();
    }
}


let greyScale = new ImageFilter(contextReal,contextDraft,(imageData)=>{
    let d = imageData.data;
    for (var i=0; i<d.length; i+=4) {
        var r = d[i];
        var g = d[i+1];
        var b = d[i+2];
        // CIE luminance for the RGB
        // The human eye is bad at seeing red and blue, so we de-emphasize them.
        var v = 0.2126*r + 0.7152*g + 0.0722*b;
        d[i] = d[i+1] = d[i+2] = v
    }
    contextReal.putImageData(imageData,0,0);
});
let brightness = new ImageFilter(contextReal,contextDraft,(imageData)=>{
    let d = imageData.data;
    let adjustment = prompt("Please enter degree of color adjustment","-10");
    let adjustmentDegree=parseInt(adjustment);
    for (var i=0; i<d.length; i+=4) {
        d[i] += adjustmentDegree;
        d[i+1] += adjustmentDegree;
        d[i+2] += adjustmentDegree;
      }
    contextReal.putImageData(imageData,0,0);
});
let threshold = new ImageFilter(contextReal,contextDraft,(imageData)=>{
    let d = imageData.data;
    let sum = 0;
    let count = 0;
    for (var i=0; i<d.length; i+=4) {
        var r = d[i];
        var g = d[i+1];
        var b = d[i+2];
        sum+=(r+g+b)/3;
        count++;
    }
    let threshold= sum/count;
    for (var i=0; i<d.length; i+=4) {
        var r = d[i];
        var g = d[i+1];
        var b = d[i+2];
        var v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 255 : 0;
        d[i] = d[i+1] = d[i+2] = v
      }
    contextReal.putImageData(imageData,0,0);
});

$('#grayScale-filter').click(()=>{
    greyScale.updateImageData();
    greyScale.manipulation(greyScale.imageData);
});
$('#brightness-filter').click(()=>{
    brightness.updateImageData();
    brightness.manipulation(brightness.imageData);
});
$('#threshold-filter').click(()=>{
    threshold.updateImageData();
    threshold.manipulation(threshold.imageData);
});