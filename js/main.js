class Game extends YumeWindow {
    loadContent() {
        this.ennemy = new YumeAnimation(this.ctx, "../images/ennemy.png", 32, 32)       
        this.angle = 0
        this.scale = 1
        this.scaleSpeed = 0.05
        // new YumeAudio("audio/songs/TeamWork_MiniJam.ogg").play()
    }

    mouseClick() {
        this.x = this.mouseX
        this.y = this.mouseY
    }

    buttonDown(key) {

    }
    
    buttonUp(key) {

    }

    buttonPress(key) {
        
    }

    update() {
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
