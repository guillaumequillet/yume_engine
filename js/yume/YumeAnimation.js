class YumeAnimation {
    // properties
    ctx = null
    image = null
    frameWidth = null
    frameHeight = null
    framesInRow = null
    loaded = false

    constructor(ctx, filename, frameWidth, frameHeight) {
        this.loadImage(filename)
        this.ctx = ctx
        this.frameWidth = frameWidth
        this.frameHeight = frameHeight
    }

    loadImage(filename) {
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.framesInRow = Math.floor(this.image.width / this.frameWidth) 
        }
        this.image.src = filename
    }

    drawFrame(frame, x, y) {
        if (this.loaded) {
            const srcY = Math.floor(frame / this.framesInRow)
            const srcX = frame === 0 ? 0 : frame % srcY
            this.ctx.drawImage(this.image, srcX * this.frameWidth, srcY * this.frameHeight, 
                this.frameWidth, this.frameHeight,
                x, y, this.frameWidth, this.frameHeight    
            )
        }
    }
}