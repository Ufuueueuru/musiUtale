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

        /** @type {string} */
        this.options = "follow";//Could be follow (default), close, far, or fixed
    }

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    setCenter(x, y) {
        this.x = x - this.width / 2 / this.zoom;
        this.y = y - this.height / 2 / this.zoom;
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
        g.translate(this.width / 2 * this.zoom, this.height / 2 * this.zoom);
        g.scale(this.zoom);
        g.translate(-this.x - this.width / 2, -this.y - this.height / 2);
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
     * @param {number} zSpeed
     */
    follow(x, y, speed = 1, zSpeed = 1) {
        let zoom = 1;
        switch (this.options) {
            case "follow":
                zoom = 1;
                break;
            case "close":
                zoom = 0.75;
                break;
            case "far":
                zoom = 1.25;
                break;
            case "fixed":
                zoom = 1;
                break;
        }
        this.x += (x - this.x - this.width / 2 * zoom) * speed / 100;
        this.y += (y - this.y - this.height / 2 * zoom) * speed / 100;
        this.zoom = 1 / (this.zoom + (zoom - this.zoom) / zSpeed);//This formula is found on Desmos (look at documentation)
    }

    serialize() {
        return (({
            width,
            height,
            zoom,
            options,
            ...o
        }) => defaultSerialize(o))(this);
    }
}