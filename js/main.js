class Game extends YumeWindow {
    loadContent() {
        this.ennemy = new YumeAnimation(this.ctx, "../images/ennemy.png", 32, 32)       
        this.angle = 0
    }

    mouseClick() {
        this.x = this.mouseX
        this.y = this.mouseY
    }

    update() {
        this.angle += 1
    }

    draw() {
        this.ennemy.drawFrameRot(0, this.x, this.y, this.angle, 0.5, 1, 3, 3)
    }
}

new Game().show()
