let acqua1, acqua2;

let img_acqua1, img_acqua2;

function preload_acque(s) {
    // Load delle immagini del funghetto
    
    
    
}

function configure_acque_animations(s, acqua1) {

    PP.assets.sprite.animation_add(acqua1, "bounce", 0, 9, 10, -1); 
    PP.assets.sprite.animation_play(acqua1, "bounce");
}

function configure_acque_animations2(s, acqua2) {

    PP.assets.sprite.animation_add(acqua2, "bounce2", 0, 9, 10, -1); 
    PP.assets.sprite.animation_play(acqua2, "bounce2");
}

function collision_acque(s, player, acqua1) {
    // In caso di collisione procedo come segue:

    // 1) distruggo il funghetto
    PP.assets.destroy(acqua1);

    // 2) aumento di 10 lo score
    //let prev_score = PP.gameState.get_variable("score");
    //PP.gameState.set_variable("score", prev_score+10);
}

function collision_acque2(s, player, acqua2) {
    // In caso di collisione procedo come segue:

    // 1) distruggo il funghetto
    PP.assets.destroy(acqua2);

    // 2) aumento di 10 lo score
    //let prev_score = PP.gameState.get_variable("score");
    //PP.gameState.set_variable("score", prev_score+10);
}

function update_acque(s) {
    // Nothing to do...
}