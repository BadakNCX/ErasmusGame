let img_background3;
let img_back_left3;

let img_player, player;
let valueForSkySpawn;
let cameraObjectEmpty;
let floor;
let enemy;
let bossLifeTxt;

let floor_death3;

let source, img_source;

let spara;
let raccogli3;




function preload(s) {
    console.log("Executing preload() - SCENE");

    // Carichiamo gli asset grafici
    img_background3 = PP.assets.image.load(s, "assets/images/background3.png");
    img_back_left3 = PP.assets.image.load(s, "assets/images/background3.png");
    img_player     = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet.png", 178, 173);
    img_source    = PP.assets.sprite.load_spritesheet(s, "assets/images/water_source.png", 114, 113);
    spara = PP.assets.image.load(s, "assets/images/spara.png");
    raccogli3 = PP.assets.image.load(s, "assets/images/raccogli.png");
    

    preload_player(s);
    preload_boss(s);
    preload_platforms3(s);
}

function goto_game_over3(s, boss, player) {
    // Funzione di collisione tra nemico e giocatore:
    // in questo caso avvio la scena di game over
PP.scenes.start("game_over3");
}


function create_level3(s) {
    currentLevel = 3;

    console.log("Executing create() - SCENE");
    floor_height    = 0;
        
    

    // Inseriamo background e giocatore
    PP.assets.tilesprite.add(s, img_background3, 150, -1450, 2352, 1722, 0, 0);
    PP.assets.tilesprite.add(s, img_back_left3, -2202, -1450, 2352, 1722, 0, 0);
    PP.assets.tilesprite.add(s, spara, 250, -80, 230, 64, 0, 0);
    PP.assets.tilesprite.add(s, raccogli3, 930, -590, 151, 64, 0, 0);
    

    player = PP.assets.sprite.add(s, img_player, 150, 0, 0.5, 1);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    
    // Creiamo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 1000, -150, 1000, 1, "0x000000", 0);
    PP.physics.add(s, floor, PP.physics.type.STATIC); 

    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider_f(s, player, floor, jumpLower);
 
    source = PP.assets.sprite.add(s, img_source, 1000, -400, 0.5, 1);
    PP.physics.add(s, source, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, source, Ending);
    

    create_platforms3(s, player);

    configure_player_animations(s, player);
    configure_source_animations(s, source);
    create_boss(s, player);
    configure_Boss_Animation(s, boss);
    PP.physics.add_collider(s, boss, floor);
    PP.physics.add_collider_f(s, boss, player, goto_game_over3);
    createHUD(s);

    PP.camera.start_follow(s, player, -300, 300);

    floor_death3 = PP.shapes.rectangle_add(s,  -1000, 110, 10000, 30, "0x154e2d", 0);
    PP.physics.add(s, floor_death3, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, floor_death3, player, goto_game_over3);
    
}

function update(s){

    bossLifeTxt = PP.shapes.text_add(s, 1900, 50, "boss lives :" + bossLives);
    bossLifeTxt.tile_geometry.scroll_factor_x = 0;
    bossLifeTxt.tile_geometry.scroll_factor_y = 0;
    

    update_platforms3(s);
    manage_player_update(s, player, cameraObjectEmpty,playerLives);
    manage_player_weapon(s, player); 
    update_boss(s, player, boss);

    if (playerLives === 0){
        PP.scenes.start("game_over3");
    }
}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

function Ending(s){
    if (bossLives < 1){
        PP.scenes.start("game_finish");
    }else if (bossLives > 0){
        PP.scenes.start("game_finish3");
    }
}

function configure_source_animations(s, source) {

    PP.assets.sprite.animation_add(source, "finish", 0, 9, 10, -1); 
    PP.assets.sprite.animation_play(source, "finish");
}

PP.scenes.add("level3", preload, create_level3, update, destroy);
