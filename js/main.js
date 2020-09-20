class Game extends YumeWindow {
    loadContent() {
        this.ennemy = new YumeAnimation(this.ctx, "../images/ennemy.png", 32, 32)
        this.x = 0
        this.angle = 0
    }

    update() {
        // this.x += 0.5
        // this.angle += 2
    }

    draw() {
        this.drawRect(0, 0, 32, 32, "purple")
        this.ennemy.drawFrameRot(0, 32, 32, this.angle, 0.5, 1, 2, -2)
    }
}

new Game().show()
