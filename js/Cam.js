//A class for matrix transformations that emulate a camera (2d)
class Camera {
    constructor() {
        /** @type {number} */
        this.x = 0;
        /** @type {number} */
        this.y = 0;
        /** @type {number} */
        this.width = 512;
        /** @type {number} */
        this.height = 384;
        /** @type {number} */
        this.zoom = 1;
        /** @type {number} */
        this.defaultTargetZoom = 1;
        /** @type {number} */
        this.shake = 0;
        /** @type {number} */
        this.shakeSpeed = 1;
        /** @type {number} */
        this.shakeTime = 0;

        /** @type {string} */
        this.options = "follow";//Could be follow (default), close, far, or fixed
    }

    /**
     * 
     */
    bindPosition(left, right, top, bottom) {
        this.x = Math.min(right - this.width / 2 / this.zoom, Math.max(left + this.width / 2 / this.zoom, this.x));
        this.y = Math.min(bottom - this.height / 2 / this.zoom, Math.max(top + this.height/ 2 / this.zoom, this.y));
    }

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    setCenter(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {Graphics} g
     */
    pushMatrix(g) {
        g.push();
    }

    /**
     * 
     * @param {Graphics} g
     */
    transform(g) {
        let shakeVel = this.shakeTime < 10 ? this.shake * this.shakeTime / 10 : this.shake;
        let shakeX = this.shakeTime > 0 ? noise(frameCount * 0.15 * this.shakeSpeed) * 2 * shakeVel - shakeVel : 0;
        let shakeY = this.shakeTime > 0 ? noise(frameCount * 0.15 * this.shakeSpeed + 10000) * 2 * shakeVel - shakeVel : 0;
        g.translate(this.width / 2 + shakeX, this.height / 2 + shakeY);
        g.scale(this.zoom);
        g.translate(-this.x, -this.y);
    }

    /**
     * 
     * @param {Graphics} g
     */
    popMatrix(g) {
        g.pop();
    }

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} speed
     * @param {number} zSpeed Between 0 and 1
     */
    follow(x, y, speed = 1, zSpeed = 0.1) {
        if (this.shakeTime > 0)
            this.shakeTime--;

        let zoom = 1;
        switch (this.options) {
            case "follow":
                zoom = 1;
                break;
            case "closeL":
                zoom = 1.1;
                break;
            case "close":
                zoom = 1.25;
                break;
            case "farL":
                zoom = 0.9;
                break;
            case "far":
                zoom = 0.75;
                break;
            case "fixed":
                this.x = x;
                this.y = y;
                this.zoom = this.defaultTargetZoom;
                return;
            case "mouse":
                zoom = mouseX / windowWidth * 2;
                break;
            default:
                zoom = this.defaultTargetZoom;
                break;
        }
        this.x += (x - this.x) * speed / 100;
        this.y += (y - this.y) * speed / 100;
        this.zoom = (this.zoom + (zoom - this.zoom) * zSpeed);//This formula is found on Desmos (look at documentation)
    }

    serialize() {
        return (({
            width,
            height,
            ...o
        }) => defaultSerialize(o))(this);
    }
}