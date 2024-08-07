//problem using player.geometry.x or player.geometry.y in the projectile part, for the triggers or using the position  to spawn projectiles
//maybe the problems comes from the fact I call the function through collider_f ?
let boss;
let img_boss, sprite_boss;
let bossSpawnX = 850, bossSpawnY = -170, bossLives = 15;
let projectileSpeedX = 180, projectileSpeedY = 130, projectileOffset = 100, delayAttacks = 2500;
let skyBoxTrigger, rightBoxTrigger;
let canAttack = true;

let img_projectileX, img_projectileY;


//le boss ne peut que lancer des choses, du coup go faire des trucs marrants avec les physiques

function preload_boss(s) {
    //preload the sprite of the boss, still to do
    img_boss = PP.assets.image.load(s, "assets/images/BossMaquette.png");
    img_projectileX = PP.assets.image.load(s, "assets/images/giant_shurikenx.png");
    img_projectileY = PP.assets.image.load(s, "assets/images/giant_shurikeny.png");
    sprite_boss     = PP.assets.sprite.load_spritesheet(s, "assets/images/giant_sprite.png", 250, 371);

}

function configure_Boss_Animation (s, boss){
    PP.assets.sprite.animation_add(boss, "Boss_Death", 14, 25 ,12,0);

}

function create_boss(s, player) {
    //animation_add(sprite_instance, animation_name, frame_start_nr, frame_end_nr, frame_rate, repeat)

    boss = PP.assets.sprite.add(s, sprite_boss, bossSpawnX, bossSpawnY, 0.5, 1);


    //configure_Boss_Animation(s, boss);

    //adds an image for the boss maquette
    //boss = PP.assets.image.add(s, img_boss, bossSpawnX, bossSpawnY, 0.5, 1);
    PP.physics.add(s, boss, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(boss, 150, 350, 50, 25);

    PP.physics.add(s, boss, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(boss, false);

    // speed in x of the boss
    PP.physics.set_velocity_x(boss, 100);
    PP.physics.set_velocity_y(boss, -50);

    //this object defines the heigh at which the rain of projectiles will happen
    skyBoxTrigger = PP.shapes.rectangle_add(s, 0, bossSpawnY - 900, 10000, 1, "0x000000", 0);
    PP.physics.add(s, skyBoxTrigger, PP.physics.type.STATIC); 

    rightBoxTrigger = PP.shapes.rectangle_add(s, bossSpawnX + 400, bossSpawnY - 600, 1, 10000, "0x000000", 0);
    PP.physics.add(s, rightBoxTrigger, PP.physics.type.STATIC); 

    PP.assets.sprite.animation_add(boss, "Boss_Move", 0, 13, 12, -1);

    PP.assets.sprite.animation_play(boss, "Boss_Move");

    /*
    // adds the boss walking animation, in his his sprtiesheet
    PP.assets.sprite.animation_add(boss, "walk_left", 0, 3, 10, -1);
    PP.assets.sprite.animation_add(boss, "walk_right", 12, 15, 10, -1);

    // plays the animation of boss walking right on start of game
    PP.assets.sprite.animation_play(boss, "walk_right");
    */


}

function update_boss(s, player) {
    if(bossLives > 0){
    boss_movement(s);
    boss_attacks(s, player);
    }
    
    
}

function boss_movement(s){
    /*
    moves in a delimited place , use if (bossX >=)
    //puts distance between him and the player, if (bossX -playerX <= distanceBetweenThem){

    }
    sometimes jump
    */

    if(boss.geometry.x > bossSpawnX + 150){
        PP.physics.set_velocity_x(boss, -100);
    }
    if(boss.geometry.x < bossSpawnX - 150){
        PP.physics.set_velocity_x(boss, 100);
    }
    
    if (PP.physics.get_velocity_x(boss) < 0) {
        boss.geometry.flip_x = true;
    }
    else if (PP.physics.get_velocity_x(boss) > 0) {
        boss.geometry.flip_x = false;
    }

    if(boss.geometry.y >= bossSpawnY +50 ){
        PP.physics.set_velocity_y(boss, -50);
    }
    if(boss.geometry.y < bossSpawnY - 50){
        PP.physics.set_velocity_y(boss, 50);
    }
    
}

function boss_attacks(s, player){
    let bossAttackType;

    
    

   if(canAttack === true){

    bossAttackType = Math.floor(Math.random() * 4 + 1);

    if(bossAttackType == 1){
        //verticalAttack
        console.log(bossAttackType + " Basic Attack");
        //calls the vertical attack function
        bossBasicAttackX(s, player);


        //puts a delay before next attack
        canAttack = false;
        setTimeout(function(){canAttack = true}, delayAttacks);
    }
    if(bossAttackType == 2){
        //verticalAttack
        console.log(bossAttackType + " vertical Attack");
        //calls the vertical attack function
        bossRainProjectiles(s, player);


        //puts a delay before next attack
        canAttack = false;
        setTimeout(function(){canAttack = true}, delayAttacks);
    }
    if(bossAttackType == 3){
        //verticalAttack
        console.log(bossAttackType + " Spam Attack X");
        //calls the vertical attack function

        projectilesFromRight(s, player);


        //puts a delay before next attack
        canAttack = false;
        setTimeout(function(){canAttack = true}, delayAttacks);
    }
    if(bossAttackType == 4){
        //verticalAttack
        console.log(bossAttackType + " Boss Rain Projectiles");
        //calls the vertical attack function
        bossRainProjectiles(s, player);


        //puts a delay before next attack
        canAttack = false;
        setTimeout(function(){canAttack = true}, delayAttacks);
    }

   }
        
   
   
   
}

function bossBasicAttackX(s, player, offsetProjectileY){
    //create the initial vertical projectile
    let projectileX = PP.assets.image.add(s, img_projectileX,boss.geometry.x , boss.geometry.y - 70, 0.5, 0.5);

    PP.physics.add(s, projectileX, PP.physics.type.DYNAMIC);
    //PP.physics.set_rotation(projectileX, 360);
    PP.physics.set_allow_gravity(projectileX, false);
    PP.physics.set_velocity_x(projectileX, -projectileSpeedX);

    PP.physics.add_collider_f(s, projectileX, player, playerHealthLost);
}

function bossRainProjectiles(s, player){
    //create the initial vertical projectile
    for (let i = 0; i < 3; i++){

    let minimumPositionX = boss.geometry.x - 800;
    let maximumOffsetX = 900;

    xSpawnPosition = Math.floor(Math.random() * maximumOffsetX) + minimumPositionX;
    
    let projectileRain = PP.assets.image.add(s, img_projectileY, xSpawnPosition, skyBoxTrigger.geometry.y-200, 0.5, 0.5);
    PP.physics.add(s, projectileRain, PP.physics.type.DYNAMIC);
    //PP.physics.set_rotation(projectileX, 360);
    PP.physics.set_allow_gravity(projectileRain, false);
    PP.physics.set_velocity_y(projectileRain, projectileSpeedY);

    //reverse the image for the projectile
    if (PP.physics.get_velocity_y(projectileRain) > 0) {
        projectileRain.geometry.flip_y = true;
    }
    PP.physics.add_collider_f(s, projectileRain, player, playerHealthLost);
    }
}


function projectilesFromRight(s, player){
    let ySpawnPosition

    //for defines the number of projectiles to be spawned
   for (let i = 0; i < 6; i++){
    //picks randomly the Y value for the spawn of each projectile

    ySpawnPosition = Math.random() * rightBoxTrigger.geometry.y;
    //console.log(ySpawnPosition);

    let projectileSpammed = PP.assets.image.add(s, img_projectileX,rightBoxTrigger.geometry.x - projectileOffset, ySpawnPosition, 0.5, 0.5);

    PP.physics.add(s, projectileSpammed, PP.physics.type.DYNAMIC);
    //PP.physics.set_rotation(projectileX, 360);
    PP.physics.set_allow_gravity(projectileSpammed, false);
    PP.physics.set_velocity_x(projectileSpammed, -projectileSpeedX);

    //reverse the image for the projectile
    if (PP.physics.get_velocity_x(projectileSpammed) < 0) {
        projectileSpammed.geometry.flip_x = true;
    }
    PP.physics.add_collider_f(s, projectileSpammed, player, playerHealthLost);

   }
    
}

function hitByBoss(s){
}

function destroy_boss(s) {

}

function hitBoss(s, shuriken, boss){
    bossLives--;
    PP.assets.destroy(shuriken);
    if(bossLives < 1){
        PP.physics.set_velocity_x(boss, 0);
        PP.assets.sprite.animation_play(boss, "Boss_Death");
        setTimeout(function(){PP.assets.destroy(boss)}, 2500);
        //PP.assets.destroy(boss);
    }
}