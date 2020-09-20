class YumeImage {
    // properties
    ctx = null
    image = null
    loaded = false

    constructor(ctx, filename) {
        this.loadImage(filename)
        this.ctx = ctx
    }

    loadImage(filename) {
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = filename
    }

    draw(x, y) {
        if (this.loaded) {
            this.ctx.drawImage(this.image, x, y)
        }
    }

    drawRot(x, y, angle, pivotX = 0.5, pivotY = 0.5) {
        this.ctx.save()
        this.ctx.translate(x, y);
        this.ctx.rotate(angle * (Math.PI / 180));
        this.ctx.drawImage(this.image, -this.image.width * pivotX, -this.image.height * pivotY, 
            this.image.width, this.image.height
        );
        this.ctx.restore()
    }
}