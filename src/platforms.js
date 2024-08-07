//objects from array can't take physics
let img_platform, img_NiceCloud, img_BouncyCloud, img_DoubleJumpCloud, img_DisappearingCloud;

let img_leftleaf, img_rightLeaf, img_centerLeaf;

let img_cloud_big, img_cloud_small, img_cloud_dis, img_cloud_bounce, img_cloudbase;


let platform_27;
let movingPlatX1;
let onPlat = false;
let platformsLvl1= [
    //name = name, x = positionX, y =positionY, img : spriteType, dynamic : true allows it to move if needed colliders : true adds collision, textName : true adds the name of the plat on screen, immovable : true makes it immovable, gravity:true makes it “gravitable”,  collideTrigger : collision_platform allow the player to sit on it, velocityXY : 0 set the initial velocity at 0, delayedDestruction : true makes it destroy itself after 3000ms (put 0 to not autodestroy, jumpHigher : true makes the platform jumpHigher , distanceXY : distance it will move, speedXY : speed it will move
    //to move the platforms, use the verticalMovePlat() and horizontalMovePlat functions in the update sessions so they don't leave the game    
        { name: "1", x: 499, y: 4759, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        { name: "2", x: 780, y: 4644, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 150, speedY : 10},
        { name: "3", x: 314, y: 4546, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 180, speedX: 10, maxDistanceY : 0, speedY : 0},
        { name: "4", x: 660, y: 4400, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "5", x: 250, y: 4264, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "6", x: 851, y: 4180, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "7", x: 80, y: 4040, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "8", x: 1070, y: 4000, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "9", x: 391, y: 3895, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "10", x: 619, y: 3700, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "11", x: 250, y: 3670, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "12", x: 791, y: 3560, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
      
        { name: "13", x: 405, y: 3364, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "14", x: 671, y: 3325, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "15", x: 87, y: 3270, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "16", x: 961, y: 3166, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "18", x: 510, y: 3084, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "19", x: 1080, y: 2966, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "20", x: 254, y: 2911, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "21", x: 761, y: 2825, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "22", x: 20, y: 2709, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "23", x: 1081, y: 2600, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "24", x: 419, y: 2592, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "25", x: 720, y: 2392, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "26", x:380, y: 2274, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        //moving plat, might need some code adaptation later to work with the array
        //{ name: "27", x: , y: 2709, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "28", x: 230, y: 2040, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        //another special plat, wait to use in array
        //{ name: "28", x: 75, y: 2709, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "30", x: 554, y: 1815, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "31", x: 75, y: 1486, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "32", x: 439, y: 1480, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "33", x: 765, y: 1510, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        //special plat moving, wait too
        //{ name: "34", x: 75, y: 2709, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "35", x: 1076, y: 1271, img: "leafR", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "36", x: 559, y: 821, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "37", x: 20, y: 804, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "38", x: 260, y: 1050, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "39", x: 270, y: 585, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
       // { name: "40", x: 657, y: 479, img: "leafL", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        //{ name: "41", x: 657, y: 479, img: "leafC", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
        { name: "42", x: 200, y: 0, img: "cloudbase", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 0, speedX: 0, maxDistanceY : 0, speedY : 0 },
      ];


function preload_platforms(s) {
    // Prealoads the images for the platforms
    img_leftleaf = PP.assets.image.load(s, "assets/images/LeafL.png");
    img_rightLeaf = PP.assets.image.load(s, "assets/images/LeafR.png");
    img_centerLeaf = PP.assets.image.load(s, "assets/images/LeafC.png");
    img_cloud_big = PP.assets.image.load(s, "assets/images/cloud_big.png");
    img_cloud_small = PP.assets.image.load(s, "assets/images/cloud_small.png");
    img_cloud_dis = PP.assets.image.load(s, "assets/images/cloud_dis.png");
    img_cloud_bounce = PP.assets.image.load(s, "assets/images/cloud_bounce.png");
    img_cloudbase= PP.assets.image.load(s, "assets/images/cloud_base.png");
}

function collision_platform(s, platform, player) {
    // Function that  checks if player is on platform and thus if he can jump again, use this in add_collider_f if this a basic platform
    if( player.geometry.x+10 >= platform.geometry.x &&
        player.geometry.x-10 <= platform.geometry.x + platform.geometry.display_width) {
            player.is_on_platform = true;
            onPlat = true
            //console.log(player.is_on_platform);
    }
}

function create_platforms(s, player) {
    //this function is called one time in base.js

    platformsLvl1.forEach(platform => {
        let platform_obj;
        if (platform.img === "basic") {
          platform_obj = PP.assets.image.add(s, img_platform, platform.x, platform.y, 0, 0);
        } else if (platform.img === "leafL") {
            platform_obj = PP.assets.image.add(s, img_leftleaf, platform.x, platform.y, 0, 0);
        } else if (platform.img === "leafR") {
            platform_obj = PP.assets.image.add(s, img_rightLeaf, platform.x, platform.y, 0, 0);
        } else if (platform.img === "leafC") {
            platform_obj = PP.assets.image.add(s, img_centerLeaf, platform.x, platform.y, 0, 0);
        } else if (platform.img === "cloudbig") {
            platform_obj = PP.assets.image.add(s, img_cloud_big, platform.x, platform.y, 0, 0);
        } else if (platform.img === "cloudbase") {
            platform_obj = PP.assets.image.add(s, img_cloudbase, platform.x, platform.y, 0, 0);
        } 
        platform.obj = platform_obj;

        //problem to add physics to the objects in the array
        if (platform.dynamic === true) {
            PP.physics.add(s, platform_obj, PP.physics.type.DYNAMIC);
            //console.log('DYNAMIC plat ' + platform.name);
        } else {
            PP.physics.add(s, platform_obj, PP.physics.type.STATIC);
            //console.log('STATIC plat ' + platform.name);
        }

        if (platform.colliders === true){
            PP.physics.add_collider_f(s, platform_obj, player, collision_platform);
            //console.log('COLLIDER Activated plat ' + platform.name);
        }

        //used for debugging, comment it for the final game
        /*
        if (platform.textName === true){
            PP.shapes.text_add(s, platform.x, platform.y, platform.name);
            //console.log('platofrm number visible for plat' + platform.name)
        }
        */

        if (platform.immovable === true) {
            if(platform.dynamic ===true){
                //console.log('plat ' + platform.name + ' is immovable')
            PP.physics.set_immovable(platform_obj, true);
            }
        } 

        if (platform.gravity === true){
            PP.physics.set_allow_gravity(platform_obj, true);
            //console.log( 'Gravity ON plat ' + platform.name);
        } else {
            PP.physics.set_allow_gravity(platform_obj, false);
        }

        if (platform.initVelocityX != 0) {
            PP.physics.set_velocity_x(platform_obj, platform.initVelocityX);
            //console.log('platform ' + platform.name + ' moving at speed X ' + platform.velocityX);
        }

        if (platform.initVelocityY != 0) {
            PP.physics.set_velocity_y(platform_obj, platform.initVelocityY);
            //console.log('platform ' + platform.name + ' moving at speed Y ' + platform.velocityY);
        }

      });
    

    //movingY plat
    platform_27 = PP.assets.image.add(s, img_cloud_big, 730, 2090, 0, 0);
    PP.physics.add(s, platform_27, PP.physics.type.DYNAMIC); 
    platform_27.initPlatY = platform_27.geometry.y;
    PP.physics.set_immovable(platform_27, true);
    PP.physics.set_allow_gravity(platform_27, false);    
    PP.physics.add_collider_f(s, platform_27, player, collision_platform);
    PP.physics.set_velocity_y(platform_27, 50);
    //P27 = PP.shapes.text_add(s, platform_27.geometry.x, platform_27.geometry.y, "P27");

   
    //movingY
    platform_29 = PP.assets.image.add(s, img_cloud_big, 980, 1828, 0, 0);
    PP.physics.add(s, platform_29, PP.physics.type.DYNAMIC); 
    platform_29.initPlatY = platform_29.geometry.y;
    PP.physics.set_immovable(platform_29, true);
    PP.physics.set_allow_gravity(platform_29, false);    
    PP.physics.add_collider_f(s, platform_29, player, collision_platform);
    PP.physics.set_velocity_y(platform_29, 70);
    //P29 = PP.shapes.text_add(s, platform_29.geometry.x, platform_29.geometry.y, "P29");

    //movingY
    platform_34 = PP.assets.image.add(s, img_cloud_big, 933, 993, 0, 0);
    PP.physics.add(s, platform_34, PP.physics.type.DYNAMIC); 
    platform_34.initPlatY = platform_34.geometry.y;
    PP.physics.set_immovable(platform_34, true);
    PP.physics.set_allow_gravity(platform_34, false);    
    PP.physics.add_collider_f(s, platform_34, player, collision_platform);
    PP.physics.set_velocity_y(platform_34, 90);

    platform_40 = PP.assets.image.add(s, img_cloud_big, 657, 420, 0, 0);
    PP.physics.add(s, platform_40, PP.physics.type.DYNAMIC); 
    platform_40.initPlatY = platform_40.geometry.y;
    PP.physics.set_immovable(platform_40, true);
    PP.physics.set_allow_gravity(platform_40, false);    
    PP.physics.add_collider_f(s, platform_40, player, collision_platform);
    PP.physics.set_velocity_y(platform_40, 90);

    console.log(platformsLvl1[0]);
}

function update_platforms(s) {
    //I can't access to the platform_obj we created in create_platforms, how can I do it?

    
    platformsLvl1.forEach(platform => {
        let platform_obj = platform.obj;
        if (platform.speedY != 0) {
            //console.log(platform.obj.geometry.y);
            verticalMovePlat(s, platform.obj, platform.speedY, platform.maxDistanceY);
        } 
        if (platform.speedX != 0) {
            //console.log(".obj geometry X " + platform.obj.geometry.x);
            horizontalMovePlat(s, platform.obj, platform.speedX, platform.maxDistanceX);
        } 
    });    
    

    //moves the platform at a speed of 50 in y axis
    verticalMovePlat(s, platform_27, 150, 50);
    verticalMovePlat(s, platform_29, 150, 70);
    verticalMovePlat(s, platform_34, 170, 90);
    verticalMovePlat(s, platform_40, 170, 90);
    //console.log(platformsLvl1[0]);
}



function DestroyCloud(s, platform) {
    if( player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
            player.is_on_platform = true;
    } 
    // Destroy immediately the cloud, put the cloud in obj
    PP.assets.destroy(platform);
}

function DelayedDestroyCloud(s, platform, player){
    //permet de jumper via is on platform
    if( player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
            player.is_on_platform = true;
            onPlat = player.is_on_platform;
    } 

    //Destroy the cloud after 3000ms
    setTimeout(() => {
        PP.assets.destroy(platform);
    }, 3000);
    //console.log("delay après");
}

function jumpHigher(s, platform, player){
    //makes a platform that makes the player jump higher
    if( player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
            player.is_on_platform = true;
    } 
    jump_init_speed = 450;
}

function jumpLower(s, platform, player){
    //makes a platform that makes the player jump normal
    if( player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
            player.is_on_platform = true;
            
    } 
    jump_init_speed = 350;
}

function verticalMovePlat(s, platform, lengthY, speedY){
    // platform to target a plaform you want to move, lengthY is the distance in pix it will move in Y, speedY changes the velocity
    //console.log(platform.init_platHeight);
    // make true or false in immovable to change if it moves depending on the character
   if (PP.physics.get_velocity_y(platform) == 0){
    if(platform.geometry.y <= (platform.initPlatY + lengthY)){
        PP.physics.set_velocity_y(platform, speedY);
    }
    else if (platform.geometry.y >= (platform.initPlatY - lengthY)){
        PP.physics.set_velocity_y(platform, -speedY);
    }
   } else if(platform.geometry.y >= (platform.initPlatY + lengthY))
    //platform goes up when it goes to a certain point down
    {
        PP.physics.set_velocity_y(platform, - speedY);

    } 
    else if (platform.geometry.y <= (platform.initPlatY - lengthY)) 
    //goes down when reach a certain high based of a reference high
    {
        PP.physics.set_velocity_y(platform, speedY);

    } 

    
    //console.log(platform + platform.geometry.y);
    
}

function horizontalMovePlat(s, platform, distanceX, speedX){
    // platform to target a plaform you want to move, lengthY is the distance in pix it will move in Y, speedY changes the velocity
    //console.log(platform.init_platHeight);
    // make true or false in immovable to change if it moves depending on the character
   
    if(platform.geometry.x >= (platform.initplatX + distanceX))
    //platform goes up when it goes to a certain point down
    {
        PP.physics.set_velocity_x(platform, - speedX);

        if (PP.physics.get_velocity_x(platform) == 0)
        {
            PP.physics.set_velocity_x(platform, speedX);
        }
    } 
    else if (platform.geometry.x <= (platform.initplatX - distanceX)) 
    //goes down when reach a certain high based of a reference high
    {
        PP.physics.set_velocity_x(platform, speedX);

        if (PP.physics.get_velocity_x(platform) == 0)
        {
            PP.physics.set_velocity_x(platform, -speedX);
        }
    } 
}


