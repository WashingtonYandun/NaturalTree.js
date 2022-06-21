class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(direction) {
        if (direction === "left") {
            this.x -= 10;
        }
        if (direction === "right") {
            this.x += 10;
        }
    }

    // check if the player is out of the canvas/screen
    checkBounds() {
        if (this.x <= 0) {
            this.x = 0;
        }
        if (this.x >= canvas.width - this.width) {
            this.x = canvas.width - this.width;
        }
    }

    // check if the player is hit by the enemy
    isHit(enemy) {
        if (
            this.x < enemy.x + enemy.width &&
            this.x + this.width > enemy.x &&
            this.y < enemy.y + enemy.height &&
            this.height + this.y > enemy.y
        ) {
            return true;
        }
        return false;
    }
}

export { Player };
