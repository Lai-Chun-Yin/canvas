class ColorPanel {

    constructor(colorBlockId, colorStripId, colorLabelId,target) {
        this.colorBlock = document.getElementById(colorBlockId);
        this.ctx1 = this.colorBlock.getContext('2d');
        this.width1 = this.colorBlock.width;
        this.height1 = this.colorBlock.height;
        this.target=target;

        this.colorStrip = document.getElementById(colorStripId);
        this.ctx2 = this.colorStrip.getContext('2d');
        this.width2 = this.colorStrip.width;
        this.height2 = this.colorStrip.height;

        this.colorLabel = document.getElementById(colorLabelId);

        this.x = 0;
        this.y = 0;
        this.drag = false;
        this.rgbaColor = 'rgba(0,0,0,1)';

        this.ctx1.rect(0, 0, this.width1, this.height1);
        this.fillGradient();

        this.ctx2.rect(0, 0, this.width2, this.height2);
        var grd1 = this.ctx2.createLinearGradient(0, 0, 0, this.height1);
        grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
        grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
        grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
        grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
        grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
        grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
        grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
        this.ctx2.fillStyle = grd1;
        this.ctx2.fill();

        this.handleEvent = function (e) {
            switch (e.type) {
                case "click":
                    this.click(e);
                    break;
                case "mousedown":
                    this.mousedown(e);
                    break;
                case "mousemove":
                    this.mousemove(e);
                    break;
                case "mouseup":
                    this.mouseup(e);
                    break;
            }
        }
        //this.handleEvent=(e)=>this.click(e);
    }


    click(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        var imageData = this.ctx2.getImageData(this.x, this.y, 1, 1).data;
        this.rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
        this.fillGradient();
    }



    fillGradient() {
        this.ctx1.fillStyle = this.rgbaColor;
        this.ctx1.fillRect(0, 0, this.width1, this.height1);

        var grdWhite = this.ctx2.createLinearGradient(0, 0, this.width1, 0);
        grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
        grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
        this.ctx1.fillStyle = grdWhite;
        this.ctx1.fillRect(0, 0, this.width1, this.height1);

        var grdBlack = this.ctx2.createLinearGradient(0, 0, 0, this.height1);
        grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
        grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
        this.ctx1.fillStyle = grdBlack;
        this.ctx1.fillRect(0, 0, this.width1, this.height1);
    }

    mousedown(e) {
        this.drag = true;
        this.changeColor(e);
    }


    mousemove(e) {
        if (this.drag) {
            this.changeColor(e);
        }
    }

    mouseup(e) {
        this.drag = false;
    }

    changeColor(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        var imageData = this.ctx1.getImageData(this.x, this.y, 1, 1).data;
        this.rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
        this.colorLabel.style.backgroundColor = this.rgbaColor;
        updateColor(this.target,this.rgbaColor);
    }

}
// default color
canvasReal.fillStyle = 'rgba(255, 0, 0, 1)';
canvasDraft.fillStyle = 'rgba(255, 0, 0, 1)';
canvasReal.strokeStyle = 'rgba(255, 0, 0, 1)';
canvasDraft.strokeStyle = 'rgba(255, 0, 0, 1)';
// add color panels
var colorFillPanel = new ColorPanel('color-block-fill', 'color-strip-fill', 'color-label-fill','fillStyle');
colorFillPanel.colorStrip.addEventListener("click", colorFillPanel, false);
colorFillPanel.colorBlock.addEventListener("mousedown", colorFillPanel, false);
colorFillPanel.colorBlock.addEventListener("mouseup", colorFillPanel, false);
colorFillPanel.colorBlock.addEventListener("mousemove", colorFillPanel, false);
var colorStrokePanel = new ColorPanel('color-block-stroke','color-strip-stroke','color-label-stroke','strokeStyle');
colorStrokePanel.colorStrip.addEventListener("click", colorStrokePanel, false);
colorStrokePanel.colorBlock.addEventListener("mousedown", colorStrokePanel, false);
colorStrokePanel.colorBlock.addEventListener("mouseup", colorStrokePanel, false);
colorStrokePanel.colorBlock.addEventListener("mousemove", colorStrokePanel, false);

function updateColor(target,color){
    switch (target) {
        case "fillStyle":
        contextReal.fillStyle=color;
        contextDraft.fillStyle=color;
        break;
        case "strokeStyle":
        contextReal.strokeStyle=color;
        contextDraft.strokeStyle=color;
        break;
    }
}
