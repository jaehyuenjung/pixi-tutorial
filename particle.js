const FRICTION = 0.88;
const COLOR_SPEED = 0.12;
const MOVE_SPEED = 0.1;

export class Particle {
    constructor(pos, texture) {
        this.sprite = new PIXI.Sprite(texture);
        this.sprite.scale.set(0.06);

        this.savedX = pos.x;
        this.savedY = pos.y;
        this.x = pos.x;
        this.y = pos.y;
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.vx = 0;
        this.vy = 0;
        this.radius = 10;

        this.saveRgb = 0xf3316e;
        this.rgb = 0xf3316e;
    }

    collide() {
        this.rgb = 0x451966;
    }

    draw() {
        this.rgb += (this.saveRgb - this.rgb) * COLOR_SPEED;

        this.vx += (this.savedX - this.x) * MOVE_SPEED;
        this.vy += (this.savedY - this.y) * MOVE_SPEED;

        this.vx *= FRICTION;
        this.vy *= FRICTION;

        this.x += this.vx;
        this.y += this.vy;

        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.tint = this.rgb;
    }
}
