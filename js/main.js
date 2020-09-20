class Game extends YumeWindow {
    loadContent() {
        this.ennemy = new YumeImage(this.ctx, "../images/ennemy.png")
        this.x = 0
        this.angle = 0
    }

    update() {
        // this.x += 0.5
        this.angle += 2
    }

    draw() {
        this.drawRect(0, 0, 32, 32, "purple")
        this.ennemy.draw(32, 32, 1, -1)
    }
}

new Game().show()
