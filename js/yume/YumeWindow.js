class YumeWindow {
    canvas = null
    ctx = null
    mouseX = null
    mouseY = null
    pressedKeys = []

    constructor(width, height) {
        this.createCanvas(width, height)
        this.loadContent()
        this.loadEvents()
    }

    createCanvas(width, height) {
        // canvas creation and setup        
        this.canvas = document.createElement("canvas")
        this.canvas.width = width
        this.canvas.height = height
        this.canvas.style = "image-rendering: pixelated;"
        this.canvas.style.width = width + " px"
        this.canvas.style.height = height + " px"
        this.canvas.style.border = "1px solid black"
        this.canvas.innerText = "Your browser doesn't support canvas"

        // canvas added to the DOM
        document.body.appendChild(this.canvas)

        // get and setup context
        this.ctx = this.canvas.getContext("2d")
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.msImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;
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

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
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

    mouseClick() {
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

    drawText(text, x, y, color, font) {
        this.ctx.fillStyle = color
        this.ctx.font = font;
        this.ctx.fillText(text, x, y);
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
