let player_speed    = 130;
let highJump = false;
let jump_init_speed = 350;
let floor_height    = 4990;
let score;

let currentLevel;
let player;
let playerLives = 3;
let eggScore = 0;
let playerDmgable = true;


let hudHeart1, hudHeart2, hudHeart3;

let cameraObjectEmpty;

let curr_anim = "stop"; // Questa variabile contiene l'animazione corrente
let next_anim;

let img_shuriken, img_life, img_noLife, img_egg, img_noEgg;

function preload_player(s) {
    img_shuriken = PP.assets.image.load(s, "assets/images/jack_shuriken.png");
    img_life  = PP.assets.image.load(s, "assets/images/life.png");
    img_noLife  = PP.assets.image.load(s, "assets/images/noLife.png");
    img_egg  = PP.assets.image.load(s, "assets/images/egg.png");
    img_noEgg = PP.assets.image.load(s, "assets/images/noEgg.png");
}

function configure_player_animations(s, player) {
    // Configuro le animazioni secondo lo spritesheet
    PP.assets.sprite.animation_add(player, "run", 8, 17, 10, -1);    // Lista di frame, a 10 fps, inifito
    PP.assets.sprite.animation_add(player, "jump_up", 29, 31, 15, 0);
    PP.assets.sprite.animation_add(player, "jump_down", 32, 35, 15, 0);
    PP.assets.sprite.animation_add(player, "shoot", 20, 27, 10, 0);
    PP.assets.sprite.animation_add(player, "stop", 0, 7 , 10, -1);
    //PP.assets.sprite.animation_play(player, "stop");
    //hitbox pour le personnage
    PP.physics.set_collision_rectangle(player, 100, 140, 40, 15);

}

function createHUD(s){
    hudHeart1 = PP.assets.image.add(s, img_life, 50, 50, 0.5, 0.5);
    hudHeart2 = PP.assets.image.add(s, img_life, 120, 50, 0.5, 0.5);
    hudHeart3 = PP.assets.image.add(s, img_life, 190, 50, 0.5, 0.5);

        hudHeart1.tile_geometry.scroll_factor_x = 0;
        hudHeart1.tile_geometry.scroll_factor_y = 0;
        hudHeart2.tile_geometry.scroll_factor_x = 0;
        hudHeart2.tile_geometry.scroll_factor_y = 0;
        hudHeart3.tile_geometry.scroll_factor_x = 0;
        hudHeart3.tile_geometry.scroll_factor_y = 0;

        if(playerLives == 1){
            hudHeart1.visibility.alpha = 1;
            hudHeart2.visibility.alpha = 0.1;
            hudHeart3.visibility.alpha = 0.1;
            console.log("1 remaining Lives: " + playerLives);
    
            
        }else if(playerLives== 2){
            hudHeart1.visibility.alpha = 1;
            hudHeart2.visibility.alpha = 1;
            hudHeart3.visibility.alpha = 0.1;
            console.log("2 remaining Lives: " + playerLives);
        }else if(playerLives == 3){
            hudHeart1.visibility.alpha = 1;
            hudHeart2.visibility.alpha = 1;
            hudHeart3.visibility.alpha = 1;
            console.log("3 remaining Lives: " + playerLives);
        }

    if(currentLevel == 1){
        for(let i = 0; i < 3; i++){
            let hudEggsGrey = PP.assets.image.add(s, img_noEgg, 50 + i*70, 120, 0.5, 0.5);
            hudEggsGrey.tile_geometry.scroll_factor_x = 0;
            hudEggsGrey.tile_geometry.scroll_factor_y = 0;
            console.log("boucle 1");
            
        }
    }

    
}

function updateHUDLife(s, playerLives){
    //defines the greyed HUD
    //console.log(playerLives);

    /*
    for(let i = 0; i < playerLives; i++){
        let hudHeart = PP.assets.image.add(s, img_life, 50 + i*70, 50, 0.5, 0.5);
        hudHeart.tile_geometry.scroll_factor_x = 0;
        hudHeart.tile_geometry.scroll_factor_y = 0;

        k = i - 3;
        let hudNoHeart = PP.assets.image.add(s, img_noLife, 190 - k*70, 50, 0.5, 0.5);
        hudNoHeart.tile_geometry.scroll_factor_x = 0;
        hudNoHeart.tile_geometry.scroll_factor_y = 0;

        
    }
    */
    
    
    if(playerLives == 1){
        hudHeart1.visibility.alpha = 1;
        hudHeart2.visibility.alpha = 0.1;
        hudHeart3.visibility.alpha = 0.1;
        //console.log("1 remaining Lives: " + playerLives);

        
    }else if(playerLives== 2){
        hudHeart1.visibility.alpha = 1;
        hudHeart2.visibility.alpha = 1;
        hudHeart3.visibility.alpha = 0.1;
        //console.log("2 remaining Lives: " + playerLives);
    }else if(playerLives == 3){
        hudHeart1.visibility.alpha = 1;
        hudHeart2.visibility.alpha = 1;
        hudHeart3.visibility.alpha = 1;
        //console.log("3 remaining Lives: " + playerLives);
    }

    hudHeart1.tile_geometry.scroll_factor_x = 0;
    hudHeart1.tile_geometry.scroll_factor_y = 0;
    hudHeart2.tile_geometry.scroll_factor_x = 0;
    hudHeart2.tile_geometry.scroll_factor_y = 0;
    hudHeart3.tile_geometry.scroll_factor_x = 0;
    hudHeart3.tile_geometry.scroll_factor_y = 0;

    //console.log("playerLives " +playerLives);
    
}

    function updateHUDEggs(s, eggScore){
    //updtaes the eff collected HUD
    if(currentLevel == 1){
        for(let i = 0; i <  eggScore; i++){
            let hudEggs = PP.assets.image.add(s, img_egg, 50 + i*70,120,  0.5, 0.5);
            hudEggs.tile_geometry.scroll_factor_x = 0;
            hudEggs.tile_geometry.scroll_factor_y = 0;
            //console.log("test eggscore")
            //console.log("boucle 3");
        }
    }
    

}

function manage_player_update(s, player, cameraObjectEmpty, playerLives) {
    // Questa funzione e' chiamata ad ogni frame dalla update()

    // Creo una variabile che conterra' l'animazione futura
    // per poter verificare se cambia dalla attuale
    

    

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        // Se e' premuto il tasto destro...
        PP.physics.set_velocity_x(player, player_speed);
        PP.physics.set_collision_rectangle(player, 100, 140, 40, 15);
        if(PP.physics.get_velocity_y(player) === 0){
            next_anim = "run";
        }  
    }
    else if(PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        // Se e' premuto il tasto sinistro...
        PP.physics.set_velocity_x(player, -player_speed);
        PP.physics.set_collision_rectangle(player, 100, 140, 40, 15);
        if(PP.physics.get_velocity_y(player) === 0){
            next_anim = "run";
        }  
    } else {
        // Se non e' premuto alcun tasto...
        PP.physics.set_velocity_x(player, 0);
        if(PP.physics.get_velocity_y(player) === 0){
            next_anim = "stop";
        }  
    }

    //if player touches the ground the jump speed is reinitialized
    if(player.geometry.y>=floor_height-1 ){
        jump_init_speed = 350;
    }

    if(player.geometry.y>=floor_height-1 || player.is_on_platform) {
        // Se mi trovo sul pavimento OPPURE su una piattaforma...

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            // ... fait sauter
            PP.physics.set_velocity_y(player, -jump_init_speed);
            onPlat = false;
        }

        // Je ne gère pas les animations de saut ici, mais plus tard
    }

    player.is_on_platform = false;  // Resetto il flag che viene messo a true quando il giocatore 
                                    // si trova sulla piattaforma

    //Les animations de saut sont gérées en fonction de la vitesse en Y
    if(PP.physics.get_velocity_y(player) < 0 && onPlat == false) {
        next_anim = "jump_up";
    }
    else if(PP.physics.get_velocity_y(player) > 0 && onPlat == false) {
        next_anim = "jump_down";
    }
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.F) && currentLevel!=1 && weapon_disabled == true && PP.physics.get_velocity_x(player) === 0 && PP.physics.get_velocity_y(player) === 0 ) {
        next_anim = "shoot";
        setTimeout(1000);
    }
    // Remarque : je ne gère pas le cas == 0, car dans ce cas l'animation c'est celui du mouvement choisi en premier.

    // Ora verifico l'animazione scelta:
    // - se e' uguale a quella attuale, non faccio niente
    // - se e' cambiata, la applico e aggiorno curr_anim
    if(next_anim != curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

    // Logica per specchiare il giocatore:
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    }
    else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }
    updateHUDLife(s, playerLives);
    //problem with cameraObjectEmpty.geometry.y I can't access it
    //cameraObjectEmpty.geometry.y = player.geometry.y;
}

let weapon_disabled = false;

function reenable_weapon(s) {
    // Funzione che viene chiamata allo scadere del timer
    weapon_disabled = false;
}

function manage_player_weapon(s, player) {

    if(weapon_disabled == true) {
        // Se l'arma e' disabilitata (v. timer)...
        
        return; // Esce immediatamente dalla funzione senza eseguire
                // il codice sottostante
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.F)) {
        if(currentLevel > 1){

            let offset = 70;
        let velocity = 1500;
        //next_anim = "shoot";

        if(player.geometry.flip_x) {    // == true
            // Inverto offset e velocita' dello
            // shuriken se il giocatore guarda verso sx
            offset   = - offset;
            velocity = - velocity;
        }

        // Creo un nuovo shuriken (immagine)
        let shuriken = PP.assets.image.add(s, img_shuriken,
                                player.geometry.x + offset, player.geometry.y - 70,
                                0.5, 0.5);
        
        PP.physics.add(s, shuriken, PP.physics.type.DYNAMIC);
        //PP.physics.set_rotation(shuriken, 360);
        PP.physics.set_allow_gravity(shuriken, false);
        PP.physics.set_velocity_x(shuriken, velocity);


        //fonction de dégats sur le boss
        if (currentLevel == 3){
            PP.physics.add_collider_f(s, shuriken, boss, hitBoss);
        }
        

        weapon_disabled = true;

        // Tra 500 secondi riporto weapon disabled a false
        PP.timers.add_timer(s, 500, reenable_weapon, false);

        }

        

        /*
        //utliser des if(numéro du niveau) pour les colliders sur les ennemis
        //définit la collision entre 2 objets qui ont des collider boxes et déclenche une fonction, ici hit_enemy
        if (currentLevel ==1){
            PP.physics.add_collider_f(s, shuriken, enemy1, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy2, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy3, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy4, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy5, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy6, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy7, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy8, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy9, hit_enemy);
            PP.physics.add_collider_f(s, shuriken, enemy10, hit_enemy);
        }
        */
        
    }
}

function hit_enemy(s, obj1, obj2) {
    // Se lo shuriken colpisce il nemico, distruggo entrambi
    PP.assets.destroy(obj1);
    PP.assets.destroy(obj2);
}

function playerHealthLost(s, projectile, player){
    if (playerDmgable === true){
        playerLives--;
        //console.log("remaining Lives: " + playerLives);
        playerDmgable = false;
        setTimeout(function(){playerDmgable = true}, 1000);
        updateHUDLife(s, playerLives);
       
        

    }
    
    PP.assets.destroy(projectile);
    /*
    if (playerLives <= 0){
        goto_game_over();
        PP.scenes.start("level3");
        console.log("should be game over");
    }
    */

}

