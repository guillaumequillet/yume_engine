class YumeWindow {
    canvas = null
    ctx = null
    mouseX = null
    mouseY = null
    pressedKeys = []

    constructor() {
        this.canvas = document.querySelector("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.ctx.imageSmoothingEnabled = false
        this.loadContent()
        this.loadEvents()
    }

    loadEvents() {
        document.onmousemove = (e) => this.mouseMove(e)
        document.onmousedown = (e) => {
            if (e.button === 0) { // if left click 
                this.mouseClick()
            }
        }
        document.onkeydown = (e) => {
            // we add the key to pressedKeys
            if (!this.pressedKeys.includes(e.key)) {
                this.pressedKeys.push(e.key)
                this.keyDown(e.key)
            }
        }
        document.onkeyup = (e) => {
            // we remove the key from pressedKeys
            const index = this.pressedKeys.indexOf(e.key)
            if (index !== -1) {
                this.pressedKeys.splice(index, 1)
                this.keyUp(e.key)
            }
        }
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    
    mouseMove(e) {
        this.mouseX = e.clientX
        this.mouseY = e.clientY
    }
    
    keyPressed(key) {
        return this.pressedKeys.includes(key)
    }

    keyDown(key) {
        // will be overwritten by child class
    }

    keyUp(key) {
        // will be overwritten by child class
    }

    loadContent() {
        // will be overwritten by child class
    }

    mouseClick(key) {
        // will be overwritten by child class
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
