// global variables
var canvas, ctx, player, beam;
var fireReady = true;
var fireTimer = 0;
const animate = window.requestAnimationFrame;
const WIDTH = 800;
const HEIGHT = 600;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;
const SPACE_BAR = 32;
const beams = [];
const scl = 20;
const buttonsPressed = {up: false, down: false, left: false, right: false, space: false};

window.addEventListener('load', function(){
    setup();
    animate(draw);
})

function setup(){
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    player = new Player(WIDTH / 2, HEIGHT / 2, 25, 25, 'red'); // creates a new player
    playerControls(); // adds the player controls;
}

function draw(){
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    player.draw();
    clearBeams();
    beams.forEach(beam => beam.update());
    beams.forEach(beam => beam.draw());
    if(fireTimer > 15) {
        fireReady = true;
    }
    fireTimer++;
    animate(draw);
}

function playerControls(){
    document.addEventListener('keydown', function(e){
        e.preventDefault();
        var key = e.which;
        if(key === RIGHT_ARROW){
            buttonsPressed.right = true;
        } else if(key === LEFT_ARROW){
            buttonsPressed.left = true;
        } else if(key === DOWN_ARROW){
            buttonsPressed.down = true;
        } else if(key === UP_ARROW){
            buttonsPressed.up = true;
        } else if (key === SPACE_BAR) {
            if(fireReady){
                var beam = player.shoot();
                beams.push(beam);
            }
        }

        if (buttonsPressed.up && buttonsPressed.left) {
            if (player.x > 0 && player.y > 0) {
                player.move(-scl, -scl);                
            }
        } else if (buttonsPressed.up && buttonsPressed.right) {
            if (player.x < WIDTH - player.width && player.y > 0) {
                player.move(scl, -scl);
            }
        } else if (buttonsPressed.down && buttonsPressed.left) {
            if (player.x > 0 && player.y < HEIGHT - player.height) {
                player.move(-scl, scl);                
            }
        } else if (buttonsPressed.down && buttonsPressed.right) {
            if (player.x < WIDTH - player.width && player.y < HEIGHT - player.height) {
                player.move(scl, scl);                
            }
        } else if (buttonsPressed.up) {
            if (player.y > 0) {
                player.move(0, -scl);                
            }
        } else if (buttonsPressed.down) {
            if (player.y < HEIGHT - player.height) {
                player.move(0, scl)                
            }
        } else if (buttonsPressed.left) {
            if (player.x > 0) {
                player.move(-scl, 0);            
            }
        } else if (buttonsPressed.right) {
            if (player.x < WIDTH - player.width) {
                player.move(scl, 0);   
            }
        }
    })
    document.addEventListener('keyup', function(e){
        e.preventDefault();
        var key = e.which;
        if(key === RIGHT_ARROW){
            buttonsPressed.right = false;
        } else if(key === LEFT_ARROW){
            buttonsPressed.left = false;
        } else if(key === DOWN_ARROW){
            buttonsPressed.down = false;
        } else if(key === UP_ARROW){
            buttonsPressed.up = false;
        }
    })
}

function clearBeams(){
    for (let i = beams.length - 1; i >= 0; i--) {
        let beam = beams[i];
        if(beam.x > WIDTH || beam.x < 0 || beam.y > HEIGHT || beam.y < 0) {
            beams.pop();
        }
    }
}