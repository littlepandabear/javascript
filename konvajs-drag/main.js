const stage = new Konva.Stage({
    container: "container",
    width: window.innerWidth,
    height: window.innerHeight
})

const background = "https://i.ytimg.com/vi/D79OokhYs5A/maxresdefault.jpg";
stage.container().style.backgroundImage = `url(${background})`;
stage.container().style.backgroundSize = `cover`;

addImage("./assets/pickle.png",20, 60)
addImage("./assets/pumpkin.png")
addImage("./assets/rick.png", stage.width()/2, stage.height()/2)

function addImage(src, x=0, y=0){

    const img = new Image();
    img.src = src
    img.onload = function(){

        const layer = new Konva.Layer()

        const konvaImg = new Konva.Image({
            image: img,
            x: x, 
            y: y,
            width: img.naturalWidth / 2,
            height: img.naturalHeight / 2,
            draggable: true
        })

        konvaImg.on("mouseover", function(){
            document.body.style.cursor = "pointer"
        })
        konvaImg.on("mouseout", function(){
            document.body.style.cursor = "default"
        })

        konvaImg.on("mousedown", function(){
            layer.moveUp();
        })

        konvaImg.cache()
        konvaImg.drawHitFromCache()


        layer.add(konvaImg)

        stage.add(layer);

    }

}



