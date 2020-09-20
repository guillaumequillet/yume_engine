class Game extends YumeWindow {
    loadContent() {
        this.ennemy = new YumeAnimation(this.ctx, "../images/ennemy.png", 32, 32)       
        this.angle = 0
        this.scale = 1
        this.scaleSpeed = 0.05
        this.x = 32
        this.y = 32
        // new YumeAudio("audio/songs/TeamWork_MiniJam.ogg").play()
    }

    keyUp(key) {
        if (key === 'r') {
            this.x = 32
            this.y = 32
        }
    }

    update() {
        const velocity = 2

        if (this.keyPressed("d") || this.keyPressed("ArrowRight")) {
            this.x += velocity
        } else if (this.keyPressed("q") || this.keyPressed("ArrowLeft")) {
            this.x -= velocity
        }
        if (this.keyPressed("z") || this.keyPressed("ArrowUp")) {
            this.y -= velocity
        } else if (this.keyPressed("s") || this.keyPressed("ArrowDown")) {
            this.y += velocity
        }

        this.angle += 1
        this.scale += this.scaleSpeed

        if (this.scale > 4 || this.scale < 0.5)
            this.scaleSpeed = -this.scaleSpeed
    }

    draw() {
        this.ennemy.drawFrameRot(0, this.x, this.y, this.angle, 0.5, 0.5, this.scale, this.scale)
    }
}

new Game().show()
