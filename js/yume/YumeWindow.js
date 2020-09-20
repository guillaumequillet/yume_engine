class YumeWindow {
    canvas = null
    ctx = null

    constructor() {
        this.canvas = document.querySelector("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.ctx.imageSmoothingEnabled = false
        this.loadContent()
    }

    loadContent() {
        // will be overwritten by child class
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    update() {
        // will be overwritten by child class
    }

    draw() {
        // will be overwritten by child class
    }

    drawRect(x, y, w, h, color) {
        this.ctx.fillStyle = color
        this.ctx.fillRect(x, y, w, h)
    }


    mainLoop() {
        this.clear()
        this.update()
        this.draw()
        window.requestAnimationFrame(this.mainLoop.bind(this))
    }

    show() {
        window.requestAnimationFrame(this.mainLoop.bind(this))
    }
}
