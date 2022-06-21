class Bullet {
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

    move() {
        this.y -= 10;
    }

    // check if the bullet is out of the canvas/screen
    checkBounds() {
        if (this.y <= 0) {
            return true;
        }
        return false;
    }

    // check if the bullet is hit by the enemy
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

export { Bullet };
