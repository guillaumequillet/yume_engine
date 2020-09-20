class Game extends YumeWindow {
    loadContent() {
        this.sprite = new YumeImage(this.ctx, "../images/secretary.png")
        this.ennemy = new YumeAnimation(this.ctx, "../images/ennemy.png", 32, 32)
        this.x = 0
        this.angle = 0
    }

    update() {
        // this.x += 0.5
        this.angle += 2
    }

    draw() {
        this.drawRect(10, 10, 200, 20, "purple")
        this.sprite.drawRot(160, 120, this.angle, 0.5, 1)
        this.ennemy.drawFrameRot(3, 50, 50, this.angle, 0.5, 1)
    }
}

new Game().show()
