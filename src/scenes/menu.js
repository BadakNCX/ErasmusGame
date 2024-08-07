let menuBackground;
let giocaButton;
let storiaButton;
let creditiButton;

function preload(s) {
    menuBackground = PP.assets.image.load(s, "assets/images/menu.png");
}

function create(s) {
    console.log("in the menu");
    PP.assets.image.add(s, menuBackground, 0, 0, 0, 0);
    //button gioca is 934, 204
    //button storia is 934 264
    //button crediti is 934 324

    giocaButton = PP.shapes.rectangle_add(s,999,333,202,75,"0xABCDEF",0);
    storiaButton = PP.shapes.rectangle_add(s,999,420,202,75,"0xABCDEF",0);
    creditiButton = PP.shapes.rectangle_add(s,999,509,202,75,"0xABCDEF",0);

    
    PP.interactive.mouse.add(giocaButton,'pointerdown',goToGame);
    PP.interactive.mouse.add(storiaButton,'pointerdown',goToStoria);
    PP.interactive.mouse.add(creditiButton,'pointerdown',goToCrediti);

    /*
    PP.interactive.mouse.add(giocaButton,'pointerover',goToGame);
    PP.interactive.mouse.add(storiaButton,'pointerover',goToStoria);
    PP.interactive.mouse.add(creditiButton,'pointerover',goToCrediti);
    PP.interactive.mouse.add(giocaButton,'pointerout',goToGame);
    PP.interactive.mouse.add(storiaButton,'pointerout',goToStoria);
    PP.interactive.mouse.add(creditiButton,'pointerout',goToCrediti);
    */

}

function update(s) {
    
    
}

function destroy(s) {

}

PP.scenes.add("menu",preload, create, update, destroy );

function goToGame(s){
    PP.scenes.start("level1");
}

function goToStoria(s){
    PP.scenes.start("storia");
}

function goToCrediti(s){
    PP.scenes.start("crediti");
}