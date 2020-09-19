class Game extends YumeWindow {
    loadContent() {
        this.sprite = new YumeImage(this.ctx, "../images/secretary.png")
        this.x = 0
    }

    update() {
        this.x += 0.5
    }

    draw() {
        this.drawRect(10, 10, 200, 20, "purple")
        this.sprite.draw(Math.floor(this.x), 0)
    }
}

new Game().show()
