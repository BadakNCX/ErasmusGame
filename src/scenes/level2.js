let img_background2;
let img_back_left2;
let img_back_down2;
let img_back_down_left2;
let img_back_up2;
let img_back_up_left2;
let img_door;
let img_door_cut;
let img_door_cut2;

let img_player;

let player;

let cameraObjectEmpty;
let floor;

let leftLimit;

let img_cuore1, img_cuore2, img_cuore3;
let img_cuoreb1, img_cuoreb2, img_cuoreb3;
let goose, img_goose;

let dialogue;
let floor_death;
let img_giant_dialogue;


function preload(s) {
    console.log("Executing preload() - SCENE");

    // Carichiamo gli asset grafici
    img_background2 = PP.assets.image.load(s, "assets/images/background2.png");
    img_player    = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet.png", 178, 173);
    img_giant_dialogue   = PP.assets.image.load(s, "assets/images/goose_dialogue.png");
    img_cuore1  = PP.assets.image.load(s, "assets/images/cuore.png");
    img_cuore2  = PP.assets.image.load(s, "assets/images/cuore.png");
    img_cuore3  = PP.assets.image.load(s, "assets/images/cuore.png");
    img_cuoreb1  = PP.assets.image.load(s, "assets/images/cuoreb.png");
    img_cuoreb2  = PP.assets.image.load(s, "assets/images/cuoreb.png");
    img_cuoreb3  = PP.assets.image.load(s, "assets/images/cuoreb.png");
    img_back_left2 = PP.assets.image.load(s, "assets/images/back_left2.png");
    img_back_down2 = PP.assets.image.load(s, "assets/images/background2b.png");
    img_back_down_left2 = PP.assets.image.load(s, "assets/images/background2c.png");

    img_back_up2 = PP.assets.image.load(s, "assets/images/back_up2.png");
    img_back_up_left2 = PP.assets.image.load(s, "assets/images/back_up2.png");
    img_goose     = PP.assets.sprite.load_spritesheet(s, "assets/images/goose.png", 245, 227);
    

    img_life  = PP.assets.image.load(s, "assets/images/life.png");
    img_egg  = PP.assets.image.load(s, "assets/images/egg.png");
    img_noEgg = PP.assets.image.load(s, "assets/images/noEgg.png");
    img_door = PP.assets.image.load(s, "assets/images/door.png");
    img_door_cut = PP.assets.image.load(s, "assets/images/door_cut.png");
    img_door_cut2 = PP.assets.image.load(s, "assets/images/door_cut2.png");

    //preload_player(s);
    preload_platforms2(s);
    preload_player(s);
    preload_access_door(s);
}

function create_level2(s) {
    console.log("Executing create() - SCENE");
    currentLevel = 2;
    

    // Inseriamo background e giocatore
    PP.assets.tilesprite.add(s, img_background2, 0, 0, 4248, 714, 0, 0);
    PP.assets.tilesprite.add(s, img_back_left2, -4248, 0, 4248, 714, 0, 0);
    PP.assets.tilesprite.add(s, img_back_down2, 0, 714, 4248, 714, 0, 0);
    PP.assets.tilesprite.add(s, img_back_down_left2, -4248, 714, 4248, 714, 0, 0);
    PP.assets.tilesprite.add(s, img_back_up2, 0, -714, 4248, 714, 0, 0);
    PP.assets.tilesprite.add(s, img_back_up_left2, -4248, -714, 4248, 714, 0, 0);
    PP.assets.tilesprite.add(s, img_door, 4235, -714, 626, 1722, 0, 0);
    player = PP.assets.sprite.add(s, img_player, 150, 714, 0.5, 1);
    PP.assets.tilesprite.add(s, img_door_cut, 4475, -634, 333, 1330, 0, 0);
    PP.assets.tilesprite.add(s, img_door_cut2, 4808, -560, 1341, 2530, 0, 0);


    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    
    // Creiamo un pavimento "trasparente"
    floor_height    = 714;
    floor = PP.shapes.rectangle_add(s, 0, 714, 918, 1, "0x154e2d", 0);
    

    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC); 

    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider_f(s, player, floor, jumpLower2);

    leftLimit = PP.shapes.rectangle_add(s,0, 4990, 1, 10000,"0x000000", 0);
    PP.physics.add(s, leftLimit, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, leftLimit); 

    goose = PP.assets.sprite.add(s, img_goose, 800, 734, 0.5, 1);
    PP.physics.add(s, goose, PP.physics.type.STATIC);

    let dialogue= PP.assets.image.add(s, img_giant_dialogue, 450, 600, 0.5, 1);
    PP.physics.add(s, dialogue, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(dialogue, 300, 180, 70, 15);
    PP.physics.add_collider_f(s, player, dialogue, collision_dialogue);

    floor_death = PP.shapes.rectangle_add(s,  2900, 900, 4000, 30, "0x154e2d", 0);
    PP.physics.add(s, floor_death, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, floor_death, player, goto_game_over2);

    

    

    configure_player_animations(s, player);
    create_platforms2(s, player);
    createHUD(s);
    create_access_door(s, player, access_door);
    configure_goose_animations(s, goose);

    PP.camera.start_follow(s, player, -300, 170);



}

function update(s){

    manage_player_update(s, player, cameraObjectEmpty,playerLives);
    manage_player_weapon(s, player); 
    update_platforms2(s);
    update_access_door(s);

    if (playerLives === 0){
        goto_game_over();
    }
   
    
    
    
}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

function collision_dialogue(s, player, dialogue) {
    PP.assets.destroy(dialogue);
}

function goto_game_over2(s, floor_death, player) {
    // Funzione di collisione tra nemico e giocatore:
    // in questo caso avvio la scena di game over
    PP.scenes.start("game_over2");
}

function configure_goose_animations(s, goose) {

    PP.assets.sprite.animation_add(goose, "happy", 0, 13, 10, -1); 
    PP.assets.sprite.animation_play(goose, "happy");
}

PP.scenes.add("level2", preload, create_level2, update, destroy);
