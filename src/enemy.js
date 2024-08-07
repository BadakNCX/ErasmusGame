let img_enemy1, img_acqua;
let enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10;
//let acqua1;

function preload_enemy(s) {
    // Carico l'immagine come spritesheets
    img_enemy1 = PP.assets.sprite.load_spritesheet(s, "assets/images/enemy.png", 46, 86);
    //img_acqua  = PP.assets.sprite.load_spritesheet(s, "assets/images/acqua.png", 70, 90.5);
}

function goto_game_over(s, obj1, obj2) {
    // Funzione di collisione tra nemico e giocatore:
    // in questo caso avvio la scena di game over
    PP.scenes.start("game_over");
}

function create_enemy(s, player,floor) {


    //acqua1 = PP.assets.sprite.add(s, img_acqua, 100, 4500, 0.5, 1);
    //PP.physics.add(s, acqua1, PP.physics.type.STATIC);
    //PP.physics.set_collision_rectangle(acqua1, 40, 60, 10, 15);
    //PP.physics.add_collider_f(s, player, acqua1, playerHealthLost);
    //PP.assets.sprite.animation_add(acqua1, "acqua_anim", 0, 9, 10, -1);
    //PP.assets.sprite.animation_play(acqua1, "acqua_anim");

    // Aggiungo un nemico come sprite, lo aggiungo alla fisica
    // 
    //enemy1 = PP.assets.sprite.add(s, img_enemy1, 900, 500, 0.5, 1);
    //PP.physics.add(s, enemy1, PP.physics.type.DYNAMIC);
    //PP.physics.add_collider(s, enemy1, floor);
    //PP.physics.add_collider_f(s, enemy1, player, playerHealthLost);
    // add the movement speed in X 
    //PP.physics.set_velocity_x(enemy1, 0);
    // add the walking animation
    //PP.assets.sprite.animation_add(enemy1, "walk_left", 0, 11, 10, -1);
    //PP.assets.sprite.animation_add(enemy1, "walk_right", 0, 11, 10, -1);
    // Iniziamo andando a destra
    //PP.assets.sprite.animation_play(enemy1, "walk_right");

    //use the y coordinates that the platform the enemy is on, use platformX - 
    //no gravity for the ennemies on platform because we can't access the platform they are on for the collider physics
    enemy2 = PP.assets.sprite.add(s, img_enemy1, 880, 4040, 0.5, 1);
    PP.physics.add(s, enemy2, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(enemy2, false);
    PP.physics.add_collider_f(s, enemy2, player, playerHealthLost);
    PP.physics.set_velocity_x(enemy2, 0);
    // add the walking animation
    PP.assets.sprite.animation_add(enemy2, "walk_left", 0, 11, 10, -1);
    PP.assets.sprite.animation_add(enemy2, "walk_right", 0, 11, 10, -1);
    PP.assets.sprite.animation_play(enemy2, "walk_right");

    

    enemy7 = PP.assets.sprite.add(s, img_enemy1, 510, 3084, 0.5, 1);
    PP.physics.add(s, enemy7, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(enemy7, false);
    PP.physics.add_collider_f(s, enemy7, player, playerHealthLost);
    PP.physics.set_velocity_x(enemy7, 0);
    PP.assets.sprite.animation_add(enemy7, "walk_left", 0, 11, 10, -1);
    PP.assets.sprite.animation_add(enemy7, "walk_right", 0, 11, 10, -1);
    PP.assets.sprite.animation_play(enemy7, "walk_right");

    enemy8 = PP.assets.sprite.add(s, img_enemy1, 500, 2000, 0.5, 1);
    PP.physics.add(s, enemy8, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(enemy8, false);
    PP.physics.add_collider_f(s, enemy8, player, playerHealthLost);
    PP.physics.set_velocity_x(enemy8, 0);
    PP.assets.sprite.animation_add(enemy8, "walk_left", 0, 11, 10, -1);
    PP.assets.sprite.animation_add(enemy8, "walk_right", 0, 11, 10, -1);
    PP.assets.sprite.animation_play(enemy8, "walk_right");
}

function update_enemy(s) {
    //largeur plateforme = 130

    

    //use base X + 130 (because it's the platform width)
    if(enemy2.geometry.x >= 630) {
        // Hit right boundary
        PP.physics.set_velocity_x(enemy2, -100);
        PP.assets.sprite.animation_play(enemy2, "walk_left");
    }
    //use base X (because it's the platform position)
    else if (enemy2.geometry.x <= 500) {
        // Hit left boundary
        PP.physics.set_velocity_x(enemy2, 100);
        PP.assets.sprite.animation_play(enemy2, "walk_right");
    }

    

    //enemy 7 510
    if(enemy7.geometry.x >= 640) {
        PP.physics.set_velocity_x(enemy7, -70);
        PP.assets.sprite.animation_play(enemy7, "walk_left");
    }
    else if (enemy7.geometry.x <= 510) {
        PP.physics.set_velocity_x(enemy7, 100);
        PP.assets.sprite.animation_play(enemy7, "walk_right");
    }


    if(enemy8.geometry.x >= 640) {
        PP.physics.set_velocity_x(enemy8, -70);
        PP.assets.sprite.animation_play(enemy8, "walk_left");
    }
    else if (enemy8.geometry.x <= 510) {
        PP.physics.set_velocity_x(enemy8, 100);
        PP.assets.sprite.animation_play(enemy8, "walk_right");
    }
    


}