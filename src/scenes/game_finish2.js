let game_finish2;
let game_continue2;
let tavola_game_finish2;

function preload(s) {
    tavola_game_finish2 = PP.assets.image.load(s, "assets/images/tavola_finale2.png");

}

function create(s) {
    PP.assets.image.add(s, tavola_game_finish2, 0, 0, 0, 0);

    // Questa scena di game over contiene solamente
    // il testo centrato.
    

    

    

}

function update(s) {
    

    game_finish2 = PP.shapes.rectangle_add(s,105,68,100,65,"0x154e2d",0);
    PP.interactive.mouse.add(game_finish2,'pointerdown',backToMenu);

    game_continue2 = PP.shapes.rectangle_add(s,45,355,100,65,"0x154e2d",0);
    PP.interactive.mouse.add(game_continue2,'pointerdown',backToLevel3);
    
    
}

function destroy(s) {

}

function backToMenu(s){
    PP.scenes.start("menu");
}

function backToLevel3(s){
    PP.scenes.start("game_finish");
}




PP.scenes.add("game_finish2", preload, create, update, destroy);
