let creditiBackground;
let menuButton;

function preload(s) {
   creditiBackground = PP.assets.image.load(s,"assets/images/crediti.png");
}

function create(s) {
    console.log("in crediti");
    PP.assets.image.add(s, creditiBackground, 0, 0, 0, 0);
    menuButton = PP.shapes.rectangle_add(s,105,68,100,65,"0x154e2d",0);

    PP.interactive.mouse.add(menuButton,'pointerdown',backToMenu);
    
}

function update(s) {
    
    
}

function destroy(s) {

}

function backToMenu(s){
    PP.scenes.start("menu");
}

PP.scenes.add("crediti",preload, create, update, destroy );