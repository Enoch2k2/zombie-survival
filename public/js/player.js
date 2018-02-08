class Player {
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.direction = {
            up: true,
            left: false,
            right: false,
            down: false,
            upRight: false,
            upLeft: false,
            downRight: false,
            downLeft: false
        };
    }

    // will draw to canvas
    draw(){
        ctx.fillStyle = `${this.color}`;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(x, y) {
        this.setDirection(x, y);
        this.x += x;
        this.y += y;
    }

    setDirection(x, y){
        this.direction = {
            up: false,
            left: false,
            right: false,
            down: false,
            upRight: false,
            upLeft: false,
            downRight: false,
            downLeft: false
        };
        if (x == -scl && y == -scl) {
            this.direction.upLeft = true;
        } else if (x == scl && y == -scl) {
            this.direction.upRight = true;
        } else if (x == -scl && y == scl) {
            this.direction.downLeft = true;
        } else if (x == scl && y == scl) {
            this.direction.downRight = true;
        } else if (x == scl) {
            this.direction.right = true;
        } else if (x == -scl) {
            this.direction.left = true;
        } else if (y == scl) {
            this.direction.down = true;
        } else {
            this.direction.up = true;
        }
    }

    shoot(){
        fireReady = false;
        fireTimer = 0;
        const beam = new Beam();
        return beam;
    }
}