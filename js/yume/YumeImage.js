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
}