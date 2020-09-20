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
            if (!this.pressedKeys.includes(e.key)) {
                this.buttonDown(e.key)
                this.pressedKeys.push(e.key)
            }
        }
        document.onkeyup = (e) => {
            this.buttonUp(e.key)
            const index = this.pressedKeys.indexOf(e.key)
            if (index !== -1) {
                this.pressedKeys.splice(index, 1)
            }
        }
        document.onkeypress = (e) => {
            this.buttonPress(e.key)
        }
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    
    mouseMove(e) {
        this.mouseX = e.clientX
        this.mouseY = e.clientY
    }
    
    loadContent() {
        // will be overwritten by child class
    }

    mouseClick(key) {
        // will be overwritten by child class
    }
    
    buttonDown(key) {
        // will be overwritten by child class
    }
    
    buttonUp(key) {
        // will be overwritten by child class
    }
    
    buttonPress(key) {
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
