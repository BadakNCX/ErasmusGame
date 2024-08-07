let menuButton;
let tavola_gameover;

function preload(s) {
    tavola_gameover = PP.assets.image.load(s, "assets/images/game_over.png");

}

function create(s) {
    PP.assets.image.add(s, tavola_gameover, 0, 0, 0, 0);

    // Questa scena di game over contiene solamente
    // il testo centrato.
    

    

    

}

function update(s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.ENTER)) {
        // Se e' premuto il tasto destro...
        PP.scenes.start("level1");
        playerLives = 3;
    }

    menuButton = PP.shapes.rectangle_add(s,105,68,100,65,"0x154e2d",0);

    PP.interactive.mouse.add(menuButton,'pointerdown',backToMenu);
    
}

function destroy(s) {

}

function backToMenu(s){
    PP.scenes.start("menu");
}

PP.scenes.add("game_over", preload, create, update, destroy);

