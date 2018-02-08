class Beam {
    constructor() {
        this.direction = player.direction;
        if (this.direction.upLeft) {
            this.x = player.x - scl + 25;
            this.y = player.y;
            this.width = scl;
            this.height = 5;
        } else if (this.direction.upRight) {
            this.x = player.x + scl;
            this.y = player.y;
            this.width = scl;
            this.height = 5;
        } else if (this.direction.downLeft) {
            this.x = player.x - scl + 25;
            this.y = player.y + 25;
            this.width = scl;
            this.height = 5;
        } else if (this.direction.downRight) {
            this.x = player.x + 25;
            this.y = player.y + 25;
            this.height = scl;
            this.width = 5;
        } else if (player.direction.up || player.direction.down) {
            this.x = player.x + 10;
            this.y = player.y;
            this.height = 25;
            this.width = 5;
        } else  {
            this.x = player.x;
            this.y = player.y + 10;
            this.height = 5;
            this.width = 25;
        }
        this.color = 'green';
    }

    update(){
        if (this.direction.upLeft) {
            this.x -= 25;
            this.y -= 25;
        } else if (this.direction.upRight) {
            this.x += 25;
            this.y -= 25;
        } else if (this.direction.downLeft) {
            this.x -= 25;
            this.y += 25;
        } else if (this.direction.downRight) {
            this.x += 25;
            this.y += 25;
        } else if (this.direction.up) {
            this.y -= 25;
        } else if (this.direction.down) {
            this.y += 25;
        } else if (this.direction.right) {
            this.x += 25;
        } else {
            this.x -= 25;
        }
    }

    draw(){
        ctx.fillStyle = `${this.color}`;
        ctx.save();
        ctx.translate(this.x, this.y);
        if(this.direction.upLeft){
            ctx.rotate(45*Math.PI / 180);
        } else if (this.direction.upRight) {
            ctx.rotate(135*Math.PI / 180);
        } else if (this.direction.downLeft) {
            ctx.rotate(135*Math.PI / 180);
        } else if (this.direction.downRight) {
            ctx.rotate(135*Math.PI / 180);
        }
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.restore();
    }
}