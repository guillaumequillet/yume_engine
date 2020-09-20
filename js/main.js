class Game extends YumeWindow {
    loadContent() {
        this.ennemy = new YumeAnimation(this.ctx, "../images/ennemy.png", 32, 32)
        this.x = 0
        this.angle = 0
        this.song = new YumeSong("../audio/songs/TeamWork_MiniJam.ogg")
        // this.song.play(true)
    }

    update() {
        
    }

    draw() {

    }
}

new Game().show()
