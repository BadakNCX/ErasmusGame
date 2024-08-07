let img_platform2, img_NiceCloud2, img_BouncyCloud2, img_DoubleJumpCloud2, img_DisappearingCloud2, img_plat_castle;

let img_leftleaf2, img_rightLeaf2, img_centerLeaf2;

let img_cloud_big2, img_cloud_small2, img_cloud_dis2, img_cloud_bounce2, img_cloud_base2;

let cloudSpeedY = 70, cloudSpeedX = 80;
//ajouter PP.physics.add_collider_f(s, platform2_pbj, player, fallTrap); sur certaines pour faire descendre les plateformes dans le vide, PP.physics.set_velocity_y(platform2_obj, 50);

let movingPlatX2;
let onPlat2 = false;
let platformsLvl2= [
    //name = name, x = positionX, y =positionY, img : spriteType, dynamic : true allows it to move if needed colliders : true adds collision, textName : true adds the name of the plat on screen, immovable : true makes it immovable, gravity:true makes it “gravitable”,  collideTrigger : collision_platform allow the player to sit on it, velocityXY : 0 set the initial velocity at 0, delayedDestruction : true makes it destroy itself after 3000ms (put 0 to not autodestroy, jumpHigher : true makes the platform jumpHigher , distanceXY : distance it will move, speedXY : speed it will move
    //to move the platforms, use the verticalMovePlat() and horizontalMovePlat functions in the update sessions so they don't leave the game    
        { name: "0", x: 0, y: 714, img: "cloudbase2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 3000, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "1", x: 900, y: 578, img: "cloudsmall2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        { name: "2", x: 960, y: 488, img: "cloudbig2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "3", x: 1183, y: 403, img: "cloudsmall2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "4", x: 1180, y: 640, img: "clouddis2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "5", x: 1330, y: 500, img: "cloudbounce2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "6", x: 1560, y: 338, img: "cloudbig2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "7", x: 1780, y: 510, img: "clouddis2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "8", x: 1803, y: 436, img: "cloudsmall2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "9", x: 1935, y: 630, img: "cloudbounce2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "10", x: 2140, y: 422, img: "cloudsmall2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "11", x: 2210, y: 298, img: "cloudbig2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        { name: "12", x: 2418, y: 261, img: "cloudbig2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "13", x: 2630, y: 429, img: "cloudbig2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "14", x: 2663, y: 360, img: "clouddis2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "15", x: 2830, y: 525, img: "cloudsmall2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "16", x: 3000, y: 525, img: "cloudsmall2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "17", x: 3155, y: 429, img: "cloudbounce2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        { name: "18", x: 3380, y: 210, img: "cloudsmall2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "19", x: 3600, y: 123, img: "cloudsmall2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        { name: "20", x: 3720, y: 334, img: "cloudsmall2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        //{ name: "21", x: 3800, y: 246, img: "cloudbig2", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : true, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        { name: "22", x: 4000, y: 253, img: "plat_castle", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
        { name: "23", x: 4400, y: 253, img: "plat_castle", dynamic : true, colliders : true, textName : true, immovable : true, gravity : false, initVelocityX : 0, initVelocityY : 0, colliderTrig : "collision_Platform", delayedDestruction : 0, jumpHigher : false, maxDistanceX : 120, speedX: 40, maxDistanceY : 0, speedY : 0 },
    ];



function preload_platforms2(s) {
    // Prealoads the images for the platforms
    img_leftleaf2 = PP.assets.image.load(s, "assets/images/LeafL.png");
    img_rightLeaf2 = PP.assets.image.load(s, "assets/images/LeafR.png");
    img_centerLeaf2 = PP.assets.image.load(s, "assets/images/LeafC.png");

    img_cloud_big2 = PP.assets.image.load(s, "assets/images/cloud_big.png");
    img_cloud_small2 = PP.assets.image.load(s, "assets/images/cloud_small.png");
    img_cloud_dis2 = PP.assets.image.load(s, "assets/images/cloud_dis.png");
    img_cloud_bounce2 = PP.assets.image.load(s, "assets/images/cloud_bounce.png");
    img_cloud_base2 = PP.assets.image.load(s, "assets/images/cloud_base.png");

    img_plat_castle = PP.assets.image.load(s, "assets/images/plat_castle.png");
}

function collision_platform(s, platform2, player) {
    // Function that  checks if player is on platform and thus if he can jump again, use this in add_collider_f if this a basic platform
    if( player.geometry.x+10 >= platform2.geometry.x &&
        player.geometry.x-10 <= platform2.geometry.x + platform2.geometry.display_width) {
            player.is_on_platform = true;
            onPlat = true
            console.log("player touching");
            if (PP.physics.get_velocity_x(player) === 0){
                next_anim = "stop";
            }
            if (PP.physics.get_velocity_x(player) != 0){
                next_anim = "run";
            }
            
            //console.log(player.is_on_platform);
    }
}

function create_platforms2(s, player) {
    //this function is called one time in base.js

    platformsLvl2.forEach(platform2 => {
        let platform2_obj;
        if (platform2.img === "basic") {
          platform2_obj = PP.assets.image.add(s, img_platform2, platform2.x, platform2.y, 0, 0);
        } else if (platform2.img === "leafL") {
            platform2_obj = PP.assets.image.add(s, img_leftleaf2, platform2.x, platform2.y, 0, 0);
        } else if (platform2.img === "leafR") {
            platform2_obj = PP.assets.image.add(s, img_rightLeaf2, platform2.x, platform2.y, 0, 0);
        } else if (platform2.img === "leafC") {
            platform2_obj = PP.assets.image.add(s, img_centerLeaf2, platform2.x, platform2.y, 0, 0);
        } else if (platform2.img === "cloudbig2") {
            platform2_obj = PP.assets.image.add(s, img_cloud_big2, platform2.x, platform2.y, 0, 0);
        } else if (platform2.img === "cloudsmall2") {
            platform2_obj = PP.assets.image.add(s, img_cloud_small2, platform2.x, platform2.y, 0, 0);
        } else if (platform2.img === "clouddis2") {
            platform2_obj = PP.assets.image.add(s, img_cloud_dis2, platform2.x, platform2.y, 0, 0);
        } else if (platform2.img === "cloudbounce2") {
            platform2_obj = PP.assets.image.add(s, img_cloud_bounce2, platform2.x, platform2.y, 0, 0);
        } else if (platform2.img === "cloudbase2") {
            platform2_obj = PP.assets.image.add(s, img_cloud_base2, platform2.x, platform2.y, 0, 0);
        } else if (platform2.img === "plat_castle") {
            platform2_obj = PP.assets.image.add(s, img_plat_castle, platform2.x, platform2.y, 0, 0);
        } 
        platform2.obj = platform2_obj;

        //problem to add physics to the objects in the array
        if (platform2.dynamic === true) {
            PP.physics.add(s, platform2_obj, PP.physics.type.DYNAMIC);
            //console.log('DYNAMIC plat ' + platform.name);
        } else {
            PP.physics.add(s, platform2_obj, PP.physics.type.STATIC);
            //console.log('STATIC plat ' + platform.name);
        }

        /*
        if (platform2.textName === true){
            PP.shapes.text_add(s, platform2.x, platform2.y, platform2.name);
            //console.log('platofrm number visible for plat' + platform.name)
        }
        */

        if (platform2.immovable === true) {
            if(platform2.dynamic ===true){
                //console.log('plat ' + platform.name + ' is immovable')
            PP.physics.set_immovable(platform2_obj, true);
            }
        } 

        if (platform2.gravity === true){
            PP.physics.set_allow_gravity(platform2_obj, true);
            //console.log( 'Gravity ON plat ' + platform.name);
        } else {
            PP.physics.set_allow_gravity(platform2_obj, false);
        }

        if (platform2.initVelocityX != 0) {
            PP.physics.set_velocity_x(platform2_obj, platform2.initVelocityX);
            //console.log('platform ' + platform.name + ' moving at speed X ' + platform.velocityX);
        }

        if (platform2.initVelocityY != 0) {
            PP.physics.set_velocity_y(platform2_obj, platform2.initVelocityY);
            //console.log('platform ' + platform.name + ' moving at speed Y ' + platform.velocityY);
        }
        if (platform2.jumpHigher === true){
            PP.physics.add_collider_f(s, platform2_obj, player, jumpHigher2);
        } else {
            PP.physics.add_collider_f(s, platform2_obj, player, jumpLower2);
        }

      });

      
    

    //movingY plat
    //platform_27 = PP.assets.image.add(s, img_movingCloudY, 730, 2090, 0, 0);
    //PP.physics.add(s, platform_27, PP.physics.type.DYNAMIC); 
    //platform_27.initPlatY = platform_27.geometry.y;
    //PP.physics.set_immovable(platform_27, true);
    //PP.physics.set_allow_gravity(platform_27, false);    
    //PP.physics.add_collider_f(s, platform_27, player, collision_platform2);
    //PP.physics.set_velocity_y(platform_27, 50);
    //P27 = PP.shapes.text_add(s, platform_27.geometry.x, platform_27.geometry.y, "P27");

   //LEFT AND RIGHT
    cloud_5 = PP.assets.image.add(s, img_cloud_small2, 1330, 500, 0, 0);
    PP.physics.add(s, cloud_5, PP.physics.type.DYNAMIC); 
    cloud_5.initPlatY = cloud_5.geometry.y;
    PP.physics.set_immovable(cloud_5, true);
    PP.physics.set_allow_gravity(cloud_5, false);    
    PP.physics.add_collider_f(s, cloud_5, player, collision_platform);
    PP.physics.set_velocity_y(cloud_5, cloudSpeedY);
    //C5 = PP.shapes.text_add(s, cloud_5.geometry.x, cloud_5.geometry.y, "C5");

    //"7", x: 1780, y: 510, VERTICAL
    cloud_7 = PP.assets.image.add(s, img_cloud_bounce2, 1780, 510, 0, 0);
    PP.physics.add(s, cloud_7, PP.physics.type.DYNAMIC); 
    cloud_7.initPlatY = cloud_7.geometry.y;
    PP.physics.set_immovable(cloud_7, true);
    PP.physics.set_allow_gravity(cloud_7, false);    
    PP.physics.add_collider_f(s, cloud_7, player, collision_platform);
    PP.physics.set_velocity_y(cloud_7, cloudSpeedY);
    //C7 = PP.shapes.text_add(s, cloud_7.geometry.x, cloud_7.geometry.y, "C7");

    //{ name: "10", x: 2140, y: 422, VERTICAL
    cloud_10 = PP.assets.image.add(s, img_cloud_small2, 2140, 422, 0, 0);
    PP.physics.add(s, cloud_10, PP.physics.type.DYNAMIC); 
    cloud_10.initPlatY = cloud_10.geometry.y;
    PP.physics.set_immovable(cloud_10, true);
    PP.physics.set_allow_gravity(cloud_10, false);    
    PP.physics.add_collider_f(s, cloud_10, player, collision_platform);
    PP.physics.set_velocity_y(cloud_10, cloudSpeedY);
    //C10 = PP.shapes.text_add(s, cloud_10.geometry.x, cloud_10.geometry.y, "C10");

    //{ name: "14", x: 2663, y: 360, LEFT RIGHT
    cloud_14 = PP.assets.image.add(s, img_cloud_bounce2, 2663, 360, 0, 0);
    PP.physics.add(s, cloud_14, PP.physics.type.DYNAMIC); 
    cloud_14.initPlatX = cloud_14.geometry.x;
    PP.physics.set_immovable(cloud_14, true);
    PP.physics.set_allow_gravity(cloud_14, false);    
    PP.physics.add_collider_f(s, cloud_14, player, collision_platform);
    PP.physics.set_velocity_x(cloud_14, cloudSpeedX);
    //C14 = PP.shapes.text_add(s, cloud_14.geometry.x, cloud_14.geometry.y, "C14");

    //{ name: "17", x: 3155, y: 429, LR
    cloud_17 = PP.assets.image.add(s, img_cloud_bounce2, 3155, 429, 0, 0);
    PP.physics.add(s, cloud_17, PP.physics.type.DYNAMIC); 
    cloud_17.initPlatX = cloud_17.geometry.x;
    PP.physics.set_immovable(cloud_17, true);
    PP.physics.set_allow_gravity(cloud_17, false);    
    PP.physics.add_collider_f(s, cloud_17, player, collision_platform);
    PP.physics.set_velocity_x(cloud_17, cloudSpeedX);
    //C17 = PP.shapes.text_add(s, cloud_17.geometry.x, cloud_17.geometry.y, "C17");


    // Reduces the box collider of the target (platform)

    


}

function update_platforms2(s) {
    //I can't access to the platform_obj we created in create_platforms, how can I do it?

    //vertical movement
    if(cloud_5.geometry.y <= (cloud_5.initPlatY - 300)){
        PP.physics.set_velocity_y(cloud_5, cloudSpeedY);
    }
    else if (cloud_5.geometry.y >= (cloud_5.initPlatY + 100)){
        PP.physics.set_velocity_y(cloud_5, -cloudSpeedY);
    }

    if(cloud_7.geometry.y <= (cloud_7.initPlatY - 300)){
        PP.physics.set_velocity_y(cloud_7, cloudSpeedY);
    }
    else if (cloud_7.geometry.y >= (cloud_7.initPlatY + 150)){
        PP.physics.set_velocity_y(cloud_7, -cloudSpeedY);
    }

    //VERTICAL MOVE
    if(cloud_10.geometry.y <= (cloud_10.initPlatY - 200)){
        PP.physics.set_velocity_y(cloud_10, cloudSpeedY*1.7);
    }
    else if (cloud_10.geometry.y >= (cloud_10.initPlatY + 200)){
        PP.physics.set_velocity_y(cloud_10, -cloudSpeedY*1.7);
    }

    //LEFT AND RIGHT MOVE
    if(cloud_14.geometry.x <= (cloud_14.initPlatX - 200)){
        PP.physics.set_velocity_x(cloud_14, cloudSpeedX);
    }
    else if (cloud_14.geometry.x >= (cloud_14.initPlatX + 300)){
        PP.physics.set_velocity_x(cloud_14, -cloudSpeedX);
    }

    //LEFT AND RIGHT MOVE
    if(cloud_17.geometry.x <= (cloud_17.initPlatX - 100)){
        PP.physics.set_velocity_x(cloud_17, cloudSpeedX);
    }
    else if (cloud_17.geometry.x >= (cloud_17.initPlatX + 300)){
        PP.physics.set_velocity_x(cloud_17, -cloudSpeedX);
    }

    //moves the platform at a speed of 50 in y axis
    //verticalMovePlat(s, platform_27, 150, 50);
    
}



function DestroyCloud2(s, platform2) {
    if( player.geometry.x >= platform2.geometry.x &&
        player.geometry.x <= platform2.geometry.x + platform2.geometry.display_width) {
            player.is_on_platform = true;
    } 
    // Destroy immediately the cloud, put the cloud in obj
    PP.assets.destroy(platform2);
}

function DelayedDestroyCloud2(s, platform2, player){
    //permet de jumper via is on platform
    if( player.geometry.x >= platform2.geometry.x &&
        player.geometry.x <= platform2.geometry.x + platform2.geometry.display_width) {
            player.is_on_platform = true;
            onPlat = player.is_on_platform;
    } 

    //Destroy the cloud after 3000ms
    setTimeout(() => {
        PP.assets.destroy(platform2);
    }, 3000);
    //console.log("delay après");
}

function jumpHigher2(s, platform2, player){
    //makes a platform that makes the player jump higher
    if( player.geometry.x >= platform2.geometry.x &&
        player.geometry.x <= platform2.geometry.x + platform2.geometry.display_width) {
            player.is_on_platform = true;
            onPlat = true
    } 
    jump_init_speed = 450;
}

function jumpLower2(s, platform2, player){
    //makes a platform that makes the player jump normal
    if( player.geometry.x >= platform2.geometry.x &&
        player.geometry.x <= platform2.geometry.x + platform2.geometry.display_width) {
            player.is_on_platform = true;
            onPlat = true
    } 
    jump_init_speed = 300;
}

function verticalMovePlat2(s, platform2, lengthY, speedY){
    // platform to target a plaform you want to move, lengthY is the distance in pix it will move in Y, speedY changes the velocity
    //console.log(platform.init_platHeight);
    // make true or false in immovable to change if it moves depending on the character
   if (PP.physics.get_velocity_y(platform2) == 0){
    if(platform2.geometry.y <= (platform2.initPlatY + lengthY)){
        PP.physics.set_velocity_y(platform2, speedY);
    }
    else if (platform2.geometry.y >= (platform2.initPlatY - lengthY)){
        PP.physics.set_velocity_y(platform2, -speedY);
    }
   } else if(platform2.geometry.y >= (platform2.initPlatY + lengthY))
    //platform goes up when it goes to a certain point down
    {
        PP.physics.set_velocity_y(platform2, - speedY);

    } 
    else if (platform2.geometry.y <= (platform2.initPlatY - lengthY)) 
    //goes down when reach a certain high based of a reference high
    {
        PP.physics.set_velocity_y(platform2, speedY);

    } 

    
    //console.log(platform + platform.geometry.y);
    
}

function horizontalMovePlat2(s, platform2, distanceX, speedX){
    // platform to target a plaform you want to move, lengthY is the distance in pix it will move in Y, speedY changes the velocity
    //console.log(platform.init_platHeight);
    // make true or false in immovable to change if it moves depending on the character
   
    if(platform2.geometry.x >= (platform2.initplatX + distanceX))
    //platform goes up when it goes to a certain point down
    {
        PP.physics.set_velocity_x(platform2, - speedX);

        if (PP.physics.get_velocity_x(platform2) == 0)
        {
            PP.physics.set_velocity_x(platform2, speedX);
        }
    } 
    else if (platform2.geometry.x <= (platform2.initplatX - distanceX)) 
    //goes down when reach a certain high based of a reference high
    {
        PP.physics.set_velocity_x(platform2, speedX);

        if (PP.physics.get_velocity_x(platform2) == 0)
        {
            PP.physics.set_velocity_x(platform2, -speedX);
        }
    } 
}




