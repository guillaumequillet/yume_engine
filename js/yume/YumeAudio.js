class YumeAudio {
    // properties
    audio
    loaded = false

    constructor(filename) {
        this.audio = document.createElement("audio")
        this.audio.src = filename
    }

    play(loop = false) {
        if (this.loaded) {
            this.audio.loop = loop
            this.audio.play()
        } else {
            this.audio.addEventListener("loadeddata", () => {
                this.audio.loop = loop
                this.audio.play()
                this.loaded = true
            })
        }
    }

    pause() {
        this.audio.pause()
    }
}
