let access_door;

function preload_access_door(s) {
    // Carico l'immagine come spritesheets
    
    
}

function goto_level3(s, access_door, player) {
    // Funzione di collisione tra nemico e giocatore:
    // in questo caso avvio la scena di game over
    PP.scenes.start("level3");
}

function create_access_door(s, player, access_door) {

    // Aggiungo un nemico come sprite, lo aggiungo alla fisica
    // 
    access_door = PP.shapes.rectangle_add(s, 4760, 0, 333, 1330, "0x154e2d", 0);
    PP.physics.add(s, access_door, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, access_door, player, goto_level3);



}

////////////////////////////////////////////////////////////////////////////////////





function update_access_door(s) {

    
}