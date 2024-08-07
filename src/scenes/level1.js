let img_background;
//let img_back_left, img_back_right
let img_back_up, img_back_up_left, img_back_up_right;
let img_pavimento;
let img_player;

let img_pozione;
let pozione1, pozione2, pozione3;

let player;
let cameraObjectEmpty
let floor;
let leftLimit;
let rightLimit;
let txt_score;

let img_life, img_noLife, img_egg, img_noEgg;
let uovo_sprites, uovo1, uovo2, uovo3;;

let hudLife1, hudLife2, hudLife3;
let hudNoLife1, hudNoLife2, hudNoLife3;
let hudEgg1, hudEgg2, hudEgg3;
let hudNoEgg1, hudNoEgg2, hudNoEgg3;
let img_warning, img_cloud_base;


let gameButton;
let level3Button;

let istruzioni;
let raccogli;


//pour l'animation il faut une grande spritesheet avec toutes les animations du personnage
//il faut une sprite sheet avec toutes les poses de chaque objet


function preload(s) {
    console.log("Executing preload() - SCENE");

    // Carichiamo gli asset grafici
    img_background = PP.assets.image.load(s, "assets/images/background.png");
    img_player     = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet.png", 178, 173);
    img_pozione   = PP.assets.image.load(s, "assets/images/pozione.png");
    //img_back_left = PP.assets.image.load(s, "assets/images/back_left.png");
    //img_back_right = PP.assets.image.load(s, "assets/images/back_right.png");
    img_back_up = PP.assets.image.load(s, "assets/images/back_up.png");
    img_pavimento = PP.assets.image.load(s, "assets/images/pavimento.png");
    istruzioni = PP.assets.image.load(s, "assets/images/istruzioni.png");
    raccogli = PP.assets.image.load(s, "assets/images/raccogli.png");
    img_warning = PP.assets.image.load(s, "assets/images/egg_dialogue.png");
    uovo_sprites = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_uovo.png", 70, 125);

    // Preload dei vari elementi della scena
    preload_platforms(s);
    preload_player(s);
    preload_enemy(s);
    
}

function create(s) {
    console.log("Executing create() - SCENE");

    currentLevel = 1;
    

    // Inseriamo background e giocatore
    PP.assets.tilesprite.add(s, img_background, -1400, 0, 3700, 5000, 0, 0);
    //PP.assets.tilesprite.add(s, img_back_left, -2321, 0, 2321, 5000, 0, 0);
    //PP.assets.tilesprite.add(s, img_back_right, 1280, 0, 2321, 5000, 0, 0);
    PP.assets.tilesprite.add(s, img_back_up, -800, -5000, 2321, 5040, 0, 0);
    PP.assets.tilesprite.add(s, img_back_up, -4248, -714, 2321, 5040, 0, 0);
    PP.assets.tilesprite.add(s, img_back_up, 4248, -714, 2321, 5040, 0, 0);
    PP.assets.tilesprite.add(s, img_pavimento, -900, 4985, 5000, 5000, 0, 0);
    PP.assets.tilesprite.add(s, istruzioni, 80, 4650, 150, 139, 0, 0);
    PP.assets.tilesprite.add(s, raccogli, 900, 3920, 151, 64, 0, 0);

    player = PP.assets.sprite.add(s, img_player, 150, 4990, 0.5, 1);

    // Aggiungiamo il giocatore alla fisica come entità dinamica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    



    //eggs objects to collect in game
    let uovo1 = PP.assets.sprite.add(s, uovo_sprites, 1140, 4011, 0.5, 1);
    PP.physics.add(s, uovo1, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(uovo1, 70, 80, 10, 15);
    PP.physics.add_collider_f(s, player, uovo1, collision_egg);
    
    let uovo2 = PP.assets.sprite.add(s, uovo_sprites, 330, 2925, 0.5, 1);
    PP.physics.add(s, uovo2, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(uovo2, 70, 80, 10, 15);
    PP.physics.add_collider_f(s, player, uovo2, collision_egg);
    
    let uovo3 = PP.assets.sprite.add(s, uovo_sprites, 100, 810, 0.5, 1);
    PP.physics.add(s, uovo3, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(uovo3, 70, 80, 10, 15);
    PP.physics.add_collider_f(s, player, uovo3, collision_egg);
    
    
    let pozione1= PP.assets.image.add(s, img_pozione, 340, 3670, 0.5, 1);
    PP.physics.add(s, pozione1, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(pozione1, 70, 80, 10, 15);
    PP.physics.add_collider_f(s, player, pozione1, healPotion);
    PP.physics.add(s, pozione1, PP.physics.type.STATIC);

    let pozione2= PP.assets.image.add(s, img_pozione, 1145, 2600, 0.5, 1);
    PP.physics.add(s, pozione2, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(pozione2, 70, 80, 10, 15);
    PP.physics.add_collider_f(s, player, pozione2, healPotion);
    PP.physics.add(s, pozione2, PP.physics.type.STATIC);

    let pozione3= PP.assets.image.add(s, img_pozione, 511, 1480, 0.5, 1);
    PP.physics.add(s, pozione3, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(pozione3, 70, 80, 10, 15);
    PP.physics.add_collider_f(s, player, pozione3, healPotion);
    PP.physics.add(s, pozione3, PP.physics.type.STATIC);
    

    // Creiamo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 640, 4990, 10000, 1, "0x000000", 0);
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC); 

    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider(s, player, floor);
    PP.physics.add_collider_f(s, player, floor, jumpLower);

    //add limits on left and right of the level
    leftLimit = PP.shapes.rectangle_add(s,-300, 4990, 1, 10000,"0x000000", 0);
    PP.physics.add(s, leftLimit, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, leftLimit); 

    rightLimit = PP.shapes.rectangle_add(s,1490, 4990, 1, 10000,"0x000000", 0);
    PP.physics.add(s, rightLimit, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, rightLimit); 

    img_cloud_base = PP.shapes.rectangle_add(s,  700, 55, 918, 108, "0x154e2d", 0);
    PP.physics.add(s, img_cloud_base, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, img_cloud_base, player, Cloud_goto_level2);


    configure_mushrooms_animations(s, uovo1)
    configure_mushrooms_animations(s, uovo2)
    configure_mushrooms_animations(s, uovo3)
    configure_player_animations(s, player); // Impostazione animazioni giocatore
    create_platforms(s, player);            // Creazione piattaforme
    create_enemy(s, player, floor);
    createHUD(s);
    

    // Impostiamo la camera che segua il giocatore
    PP.camera.start_follow(s, player, -50, 170);
}

function update(s) {
    // Azioni che vengono eseguite a ogni frame del gioco
    

    manage_player_update(s, player, cameraObjectEmpty);    // Posizione del giocatore e animazioni
    update_platforms(s);                // Movimento piattaforme
    manage_player_weapon(s, player);    // Gestione armi
    update_enemy(s);
    //update_cloud_base(s);
    if (playerLives === 0){
        PP.scenes.start("game_over");
    }
   

}


function healPotion(s, player, pozione){
    //pseudoCode :      if (life bar < 3){ +1 to life bar}
    PP.assets.destroy(pozione);
    if(playerLives <3){
        playerLives++;
    updateHUDLife(s, playerLives);
    }
}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

function goToGame(s){
    PP.scenes.start("level2");
}

function goTolevel3(s){
    PP.scenes.start("level3");
}

function Cloud_goto_level2(s, img_cloud_base, player) {
    // Funzione di collisione tra nemico e giocatore:
    // in questo caso avvio la scena di game over
    if(eggScore < 3){
        let eggWarning = PP.assets.image.add(s, img_warning, 850, 150, 0, 0);
        setTimeout(() => {
            PP.assets.destroy(eggWarning);
        }, 3000);
    }


    if(eggScore == 3){
        PP.scenes.start("level2");
    }
}



function configure_mushrooms_animations(s, uovo) {

    PP.assets.sprite.animation_add(uovo, "bounce", 0, 28, 10, -1); 
    PP.assets.sprite.animation_play(uovo, "bounce");
}
function collision_egg(s, player, uovo) {
    // In caso di collisione procedo come segue:

    // 1) distruggo il funghetto
    PP.assets.destroy(uovo);

    eggScore ++;
    updateHUDEggs(s, eggScore);
}




PP.scenes.add("level1", preload, create, update, destroy);
