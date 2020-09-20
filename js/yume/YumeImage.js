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

    draw(x, y, scaleX = 1, scaleY = 1) {
        if (this.loaded) {
            this.ctx.save()
            this.ctx.translate(x, y)
            this.ctx.scale(scaleX, scaleY)
            this.ctx.drawImage(this.image, 0, 0)
            this.ctx.restore()
        }
    }

    drawRot(x, y, angle, pivotX = 0.5, pivotY = 0.5, scaleX = 1, scaleY = 1) {
        this.ctx.save()
        this.ctx.translate(x, y)
        this.ctx.rotate(angle * (Math.PI / 180))
        this.ctx.scale(scaleX, scaleY)

        this.ctx.drawImage(this.image, -this.image.width * pivotX, -this.image.height * pivotY, 
            this.image.width, this.image.height
        );
        this.ctx.restore()
    }
}