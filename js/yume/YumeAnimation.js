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

    drawFrameRot(frame, x, y, angle, pivotX = 0.5, pivotY = 0.5) {
        if (this.loaded) {
            const srcY = Math.floor(frame / this.framesInRow)
            const srcX = frame === 0 ? 0 : frame % srcY

            this.ctx.save()
            this.ctx.translate(x, y);
            this.ctx.rotate(angle * (Math.PI / 180));

            this.ctx.drawImage(this.image, srcX * this.frameWidth, srcY * this.frameHeight, 
                this.frameWidth, this.frameHeight, -this.frameWidth * pivotX, -this.frameHeight * pivotY, 
                this.frameWidth, this.frameHeight    
            )

            this.ctx.restore()
        }
    }
}