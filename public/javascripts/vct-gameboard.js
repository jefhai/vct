$(document).ready(function() { 
	function initFco() {
        this.tableLayer = new Konva.Layer();
        this.dragLayer = new Konva.Layer();

        this.stageWidth = 500;
        this.stageHeight = 500;

        this.tween = null;

        this.stage = new Konva.Stage({
            container: 'container',
            width: this.stageWidth,
            height: this.stageHeight
        });

        this.stage.add(this.tableLayer, this.dragLayer);
    };
    var fco = new initFco();

    var simpleShape = new Konva.Circle({
    	x: fco.stageWidth / 2,
    	y: fco.stageHeight / 2,
    	visible: true,
    	listening: true,
    	draggable: true,
    	radius: 50,
    	strokeWidth: 30,
    	stroke: '#00FF00',
    });

    simpleShape.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
    });
    simpleShape.on('mouseout', function() {
        document.body.style.cursor = 'default';
    });

    simpleShape.cache()
    simpleShape.drawHitFromCache()

    fco.tableLayer.add(simpleShape);
    fco.tableLayer.batchDraw();
});
