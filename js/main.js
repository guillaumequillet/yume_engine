class Game extends YumeWindow {
    loadContent() {
        this.test = new YumeImage(this.ctx, '../images/ennemy.png')
    }

    keyDown(key) {
        
    }

    update() {

    }

    draw() {
        this.drawRect(20, 20, 100, 100, "green")
        this.test.draw(50, 50)
    }
}

new Game(320, 240).show()
