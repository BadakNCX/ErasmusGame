let tavola1;
let tavola2;
let tavola3;
let storiaImg1, storiaImg2, storiaImg3;

let currentImage;

let leftButton;
let rightButton;
let menuButton;
let gameButton;

var corrente = 3;

function preload(s) {
    tavola1 = PP.assets.image.load(s, "assets/images/Tavola1.png");
    tavola2 = PP.assets.image.load(s, "assets/images/Tavola2.png");
    tavola3 = PP.assets.image.load(s, "assets/images/Tavola3.png");
}

function create(s) {
    console.log("in storia");
    
    storiaImg1 = PP.assets.image.add(s, tavola3, 0, 0, 0, 0);
    storiaImg2 = PP.assets.image.add(s, tavola2, 0, 0, 0, 0);
    storiaImg3 = PP.assets.image.add(s, tavola1, 0, 0, 0, 0);

    leftButton = PP.shapes.rectangle_add(s,45,355,50,50,"0x154e2d",0);
    rightButton = PP.shapes.rectangle_add(s,1230,355,50,50,"0x154e2d",0);
    menuButton = PP.shapes.rectangle_add(s,105,68,100,65,"0x154e2d",0);
    gameButton = PP.shapes.rectangle_add(s,1175,68,100,65,"0x154e2d",0);

    PP.interactive.mouse.add(leftButton,'pointerdown',addCorrente);
    PP.interactive.mouse.add(rightButton,'pointerdown',substractCorrente);
    PP.interactive.mouse.add(menuButton,'pointerdown',backToMenu);
    PP.interactive.mouse.add(gameButton,'pointerdown',goToGame);
    

}

function update(s) {

    
    
    
    console.log(corrente);
}

function destroy(s) {

}

function substractCorrente(s){
    console.log("left pressed");
    if(corrente>1){
        corrente--;
    }
    changeStoria(s);
}

function addCorrente(s){
    //changes the images with right and left arrows
    console.log("right pressed");
    if(corrente<3){
        corrente++;
    }
    changeStoria(s);
   
    
}



function changeStoria(s){
    if (corrente == 1){
        storiaImg1.visibility.alpha = 1;
        storiaImg2.visibility.alpha = 0;
        storiaImg3.visibility.alpha = 0;
    }
    if (corrente == 2){
        storiaImg1.visibility.alpha = 0;
        storiaImg2.visibility.alpha = 1;
        storiaImg3.visibility.alpha = 0;
    }
    if (corrente == 3){
        storiaImg1.visibility.alpha = 0;
        storiaImg2.visibility.alpha = 0;
        storiaImg3.visibility.alpha = 1;
    }
}

function backToMenu(s){
    PP.scenes.start("menu");
}

function goToGame(s){
    PP.scenes.start("level1");
}


PP.scenes.add("storia",preload, create, update, destroy );
