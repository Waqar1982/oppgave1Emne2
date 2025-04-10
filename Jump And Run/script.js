let player;
let jumpForce = 0;
let movement = 0;
let ground;
let platform;

function setup (){
    createCanvas (720, 480);
    player = createVector (width / 2, height - 50);
    platform = createVector (560, 370);
    ground = height - 50;
}

function draw () {
   background ('deepSkyBlue');
   rectMode(CENTER);
   fill ('white')
   rect(player.x, player.y, 50, 50);
   fill ('yellow')
   rect(platform.x, platform.y,150, 20);
   

    player.y += jumpForce;
    player.x += movement;

    if (player.y >= ground){
        jumpForce = 0;
    } else {
        jumpForce += 0,5;
    }
    if (keyIsDown(32) && player.y >= ground){
        jumpForce = - 12;


     }
     if (keyIsDown(LEFT_ARROW)) {
        movement = -5;
     }else if (keyIsDown(RIGHT_ARROW)){
        movement = +5;
     }else{
        movement = 0;
     }


} 
