const stage = new Konva.Stage({
    container: "container",
    width: window.innerWidth,
    height: window.innerHeight
})

const layer = new Konva.Layer();
const rectlayer = new Konva.Layer();

const circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 100,
    fill: "red", 
    stroke: "black",
    strokeWidth: 4,

})

const rect = new Konva.Rect({
    x: 100, 
    y: 100, 
    width: 200,
    height: 400,
    fill: "green",
    draggable: true
})

const transform = new Konva.Transformer()
layer.add(transform)

circle.on('mousedown touchstart', function(){
    
    circle.attrs.transformer = !circle.attrs.transformer;

    if (circle.attrs.transformer){
        transform.nodes([circle])
    } else {
        transform.nodes([])
    }

})

circle.on('mouseover touchstart', function(){
    circle.fill("blue")
    layer.draw()
})

circle.on('mouseout touchend', function(){
    circle.fill("red")
    layer.draw()
})


circle.draggable(true)

circle.on("dragmove", function(){

    if (circle.attrs.x < 0)
    {
        circle.x(circle.radius())
    } 
    else if (circle.attrs.x > stage.width())
    {

        circle.x(stage.width()-circle.radius())

    }


})

rectlayer.add(rect)
layer.add(circle)

stage.add(layer)
stage.add(rectlayer)

const MIN_SCALE=20;
const MAX_SCALE=200;
let rectW = 100;
let rectH = 200;

const animation = new Konva.Animation(function(frame){

    rect.width(rectW)
    rect.height(rectH)

    rectW += 1;
    rectH += 1;

}, rectlayer )

animation.start();
