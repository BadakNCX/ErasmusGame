let img_platform3;
let img_giant_platform;
let img_spikes;


let movingPlatX3;
let onPlat3 = false;
let platformsLvl3= [
    //name = name, x = positionX, y =positionY, img : spriteType, dynamic : true allows it to move if needed colliders : true adds collision, textName : true adds the name of the plat on screen, immovable : true makes it immovable, gravity:true makes it “gravitable”,  collideTrigger : collision_platform allow the player to sit on it, velocityXY : 0 set the initial velocity at 0, delayedDestruction : true makes it destroy itself after 3000ms (put 0 to not autodestroy, jumpHigher : true makes the platform jumpHigher , distanceXY : distance it will move, speedXY : speed it will move
    //to move the platforms, use the verticalMovePlat() and horizontalMovePlat functions in the update sessions so they don't leave the game    
        { name: "", x: 70, y: 0, img: "test", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "", x: 300, y: -250, img: "test", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "", x: -160, y: -260, img: "test", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "", x: 70, y: -500, img: "test", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "", x: 558, y: -155, img: "giant", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "", x: 920, y: -400, img: "test", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "", x: 370, y: -650, img: "test", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "", x: 600, y: -650, img: "test", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "", x: 0, y: 105, img: "spikes", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "", x: -2014, y: 105, img: "spikes", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
    ];


function preload_platforms3(s) {
    // Prealoads the images for the platforms
    img_platform3   = PP.assets.image.load(s, "assets/images/plat_castle.png");
    img_giant_platform   = PP.assets.image.load(s, "assets/images/giant_platform.png");
    img_spikes   = PP.assets.image.load(s, "assets/images/spikes.png");
}

function collision_platform3(s, platform3, player) {
    // Function that  checks if player is on platform and thus if he can jump again, use this in add_collider_f if this a basic platform
    if( player.geometry.x+10 >= platform3.geometry.x &&
        player.geometry.x-10 <= platform3.geometry.x + platform3.geometry.display_width) {
            player.is_on_platform = true;
            onPlat3 = true
            //console.log(player.is_on_platform);
    }
}

function create_platforms3(s, player) {
    //this function is called one time in base.js

    platformsLvl3.forEach(platform3 => {
        let platform3_obj;
        if (platform3.img === "test") {
            platform3_obj = PP.assets.image.add(s, img_platform3, platform3.x, platform3.y, 0, 0);
        } else if (platform3.img === "giant") {
            platform3_obj = PP.assets.image.add(s, img_giant_platform, platform3.x, platform3.y, 0, 0);
        } else if (platform3.img === "spikes") {
            platform3_obj = PP.assets.image.add(s, img_spikes, platform3.x, platform3.y, 0, 0);
        }

        platform3.obj = platform3_obj;

        //problem to add physics to the objects in the array
        if (platform3.dynamic === true) {
            PP.physics.add(s, platform3_obj, PP.physics.type.DYNAMIC);
            //console.log('DYNAMIC plat ' + platform.name);
        } else {
            PP.physics.add(s, platform3_obj, PP.physics.type.STATIC);
            //console.log('STATIC plat ' + platform.name);
        }

        if (platform3.colliders === true){
            PP.physics.add_collider_f(s, platform3_obj, player, collision_platform3);
            //console.log('COLLIDER Activated plat ' + platform.name);
        }

        if (platform3.textName === true){
            PP.shapes.text_add(s, platform3.x, platform3.y, platform3.name);
            //console.log('platofrm number visible for plat' + platform.name)
        }

        if (platform3.immovable === true) {
            if(platform3.dynamic ===true){
                //console.log('plat ' + platform.name + ' is immovable')
            PP.physics.set_immovable(platform3_obj, true);
            }
        } 

        if (platform3.gravity === true){
            PP.physics.set_allow_gravity(platform3_obj, true);
            //console.log( 'Gravity ON plat ' + platform.name);
        } else {
            PP.physics.set_allow_gravity(platform3_obj, false);
        }

        if (platform3.initVelocityX != 0) {
            PP.physics.set_velocity_x(platform3_obj, platform3.initVelocityX);
            //console.log('platform ' + platform.name + ' moving at speed X ' + platform.velocityX);
        }

        if (platform3.initVelocityY != 0) {
            PP.physics.set_velocity_y(platform3_obj, platform3.initVelocityY);
            //console.log('platform ' + platform.name + ' moving at speed Y ' + platform.velocityY);
        }

      });
    



    /*
    code pour les autres plateformes
    // plateforme mobile
    platform_2 = PP.assets.image.add(s, img_BouncyCloud, 1000, 450, 0, 0);
    //value in y that will be remembered to be used to move the platform vertically
    platform_2.init_platHeight = 450;
    PP.physics.add(s, platform_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform_2, false);
    PP.physics.set_allow_gravity(platform_2, false);    
    if (player.geometry.y < platform_2.geometry.y){
        PP.physics.add_collider_f(s, platform_2, player, jumpHigher);
    }
    PP.physics.set_velocity_y(platform_2, 50);


    platform_3 = PP.assets.image.add(s, img_platform, 1400, 300, 0, 0);
    PP.physics.add(s, platform_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform_3, true);
    PP.physics.set_allow_gravity(platform_3, false);    
    PP.physics.add_collider_f(s, platform_3, player, jumpLower);
    PP.physics.set_velocity_x(platform_3, 100);
    */

    // Reduces the box collider of the target (platform)

    


}

function update_platforms3(s) {
    //I can't access to the platform_obj we created in create_platforms, how can I do it?

    
    platformsLvl3.forEach(platform3 => {
        let platform3_obj = platform3.obj;
        if (platform3.speedY != 0) {
            //console.log(platform.obj.geometry.y);
            verticalMovePlat(s, platform3.obj, platform3.speedY, platform3.maxDistanceY);
        } 
        if (platform3.speedX != 0) {
            console.log(".obj geometry X " + platform3.obj.geometry.x);
            horizontalMovePlat(s, platform3.obj, platform3.speedX, platform3.maxDistanceX);
        } 
    });    
    

    //console.log(platformsLvl3[0]);
}



function DestroyCloud(s, platform3) {
    if( player.geometry.x >= platform3.geometry.x &&
        player.geometry.x <= platform3.geometry.x + platform3.geometry.display_width) {
            player.is_on_platform = true;
    } 
    // Destroy immediately the cloud, put the cloud in obj
    PP.assets.destroy(platform3);
}

function DelayedDestroyCloud3(s, platform3, player){
    //permet de jumper via is on platform
    if( player.geometry.x >= platform3.geometry.x &&
        player.geometry.x <= platform3.geometry.x + platform3.geometry.display_width) {
            player.is_on_platform = true;
            onPlat3 = player.is_on_platform;
    } 

    //Destroy the cloud after 3000ms
    setTimeout(() => {
        PP.assets.destroy(platform3);
    }, 3000);
    //console.log("delay après");
}

function jumpHigher3(s, platform3, player){
    //makes a platform that makes the player jump higher
    if( player.geometry.x >= platform3.geometry.x &&
        player.geometry.x <= platform3.geometry.x + platform3.geometry.display_width) {
            player.is_on_platform = true;
    } 
    jump_init_speed = 450;
}

function jumpLower3(s, platform3, player){
    //makes a platform that makes the player jump normal
    if( player.geometry.x >= platform3.geometry.x &&
        player.geometry.x <= platform3.geometry.x + platform3.geometry.display_width) {
            player.is_on_platform = true;
            
    } 
    jump_init_speed = 350;
}

function verticalMovePlat3(s, platform3, lengthY, speedY){
    // platform to target a plaform you want to move, lengthY is the distance in pix it will move in Y, speedY changes the velocity
    //console.log(platform.init_platHeight);
    // make true or false in immovable to change if it moves depending on the character
   if (PP.physics.get_velocity_y(platform3) == 0){
    if(platform3.geometry.y <= (platform3.initPlatY + lengthY)){
        PP.physics.set_velocity_y(platform, speedY);
    }
    else if (platform3.geometry.y >= (platform3.initPlatY - lengthY)){
        PP.physics.set_velocity_y(platform, -speedY);
    }
   } else if(platform3.geometry.y >= (platform3.initPlatY + lengthY))
    //platform goes up when it goes to a certain point down
    {
        PP.physics.set_velocity_y(platform, - speedY);

    } 
    else if (platform3.geometry.y <= (platform3.initPlatY - lengthY)) 
    //goes down when reach a certain high based of a reference high
    {
        PP.physics.set_velocity_y(platform3, speedY);

    } 

    
    //console.log(platform + platform.geometry.y);
    
}

function horizontalMovePlat3(s, platform3, distanceX, speedX){
    // platform to target a plaform you want to move, lengthY is the distance in pix it will move in Y, speedY changes the velocity
    //console.log(platform.init_platHeight);
    // make true or false in immovable to change if it moves depending on the character
   
    if(platform3.geometry.x >= (platform3.initplatX + distanceX))
    //platform goes up when it goes to a certain point down
    {
        PP.physics.set_velocity_x(platform3, - speedX);

        if (PP.physics.get_velocity_x(platform3) == 0)
        {
            PP.physics.set_velocity_x(platform3, speedX);
        }
    } 
    else if (platform3.geometry.x <= (platform3.initplatX - distanceX)) 
    //goes down when reach a certain high based of a reference high
    {
        PP.physics.set_velocity_x(platform3, speedX);

        if (PP.physics.get_velocity_x(platform3) == 0)
        {
            PP.physics.set_velocity_x(platform3, -speedX);
        }
    } 
}



