let game_finish3;
let game_continue3;
let tavola_game_finish3;

function preload(s) {
    tavola_game_finish3 = PP.assets.image.load(s, "assets/images/tavola_finale3.png");

}

function create(s) {
    PP.assets.image.add(s, tavola_game_finish3, 0, 0, 0, 0);

    // Questa scena di game over contiene solamente
    // il testo centrato.
    

    

    

}

function update(s) {
    

    game_finish3 = PP.shapes.rectangle_add(s,105,68,100,65,"0x154e2d",0);
    PP.interactive.mouse.add(game_finish3,'pointerdown',backToMenu);

    game_continue3 = PP.shapes.rectangle_add(s,1230,355,100,65,"0x154e2d",0);
    PP.interactive.mouse.add(game_continue3,'pointerdown',backToLevel3);
    
}

function destroy(s) {

}

function backToMenu(s){
    PP.scenes.start("menu");
}

function backToLevel3(s){
    PP.scenes.start("game_finish4");
}


PP.scenes.add("game_finish3", preload, create, update, destroy);
