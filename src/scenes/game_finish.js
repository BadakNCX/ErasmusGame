let game_finish;
let game_continue;
let tavola_game_finish;

function preload(s) {
    tavola_game_finish = PP.assets.image.load(s, "assets/images/tavola_finale1.png");

}

function create(s) {
    PP.assets.image.add(s, tavola_game_finish, 0, 0, 0, 0);

    // Questa scena di game over contiene solamente
    // il testo centrato.
    

    

    

}

function update(s) {
    

    game_finish = PP.shapes.rectangle_add(s,105,68,100,65,"0x154e2d",0);
    PP.interactive.mouse.add(game_finish,'pointerdown',backToMenu);

    game_continue = PP.shapes.rectangle_add(s,1230,355,100,65,"0x154e2d",0);
    PP.interactive.mouse.add(game_continue,'pointerdown',backToLevel3);
    
}

function destroy(s) {

}

function backToMenu(s){
    PP.scenes.start("menu");
}

function backToLevel3(s){
    PP.scenes.start("game_finish2");
}


PP.scenes.add("game_finish", preload, create, update, destroy);
