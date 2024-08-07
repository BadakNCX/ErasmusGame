let game2Button;
let tavola_gameover2;

function preload(s) {
    tavola_gameover2 = PP.assets.image.load(s, "assets/images/game_over.png");

}

function create(s) {
    PP.assets.image.add(s, tavola_gameover2, 0, 0, 0, 0);

    // Questa scena di game over contiene solamente
    // il testo centrato.
    

    

    

}

function update(s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.ENTER)) {
        // Se e' premuto il tasto destro...
        PP.scenes.start("level2");
        playerLives = 3;
    }

    game2Button = PP.shapes.rectangle_add(s,105,68,100,65,"0x154e2d",0);

    PP.interactive.mouse.add(game2Button,'pointerdown',backToMenu);
    
}

function destroy(s) {

}

function backToMenu(s){
    PP.scenes.start("menu");
}

PP.scenes.add("game_over2", preload, create, update, destroy);

