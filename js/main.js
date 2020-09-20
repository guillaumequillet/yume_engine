class Game extends YumeWindow {
    loadContent() {
        this.sprite = new YumeImage(this.ctx, "../images/secretary.png")
        this.x = 0
        this.angle = 0
    }

    update() {
        // this.x += 0.5
        // this.angle += 2
    }

    draw() {
        this.drawRect(10, 10, 200, 20, "purple")
        this.sprite.drawRot(160, 120, this.angle, 0.5, 1)
    }
}

new Game().show()
