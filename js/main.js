class DuckHuntCalculator extends YumeWindow {
    loadContent() {
        this.images = {
            bg: new YumeImage(this.ctx, "../images/bg.png"),
            fg: new YumeImage(this.ctx, "../images/fg.png"),
            dog: new YumeImage(this.ctx, "../images/dog_sign.png"),
            duck: new YumeAnimation(this.ctx, "../images/duck.png", 48, 48),
            duckSign: new YumeImage(this.ctx, "../images/duck_sign.png")
        }

        this.dog = {
            x: 0, 
            y: 120,
            velocity: 3
        }

        this.generateOperation()

        this.ducks = []
        this.ducksFrameOrder = [0, 1, 2, 1]
        window.setInterval(() => {
            // if we are calculating some operation and ducks are less than 10
            if (this.calculation && this.ducks.length < 10) {
                let duck = {}
                if (this.random(0, 1) === 0) {
                    duck.x = -96
                    duck.vx = 1
                } else {
                    duck.x = 576
                    duck.vx = -1
                }
                duck.y = this.random(0, 290)
                duck.frame = 0

                duck.number = this.random(0, 9)
                this.ducks.push(duck)
            }
        }, 1000)
    }
    
    keyDown(key) {
        
    }

    generateOperation() {
        // numbers from 2 to 10
        this.currentOperationA = Math.floor(Math.random() * 8) + 2
        this.currentOperationB = Math.floor(Math.random() * 8) + 2
    }

    updateDucks() {
        this.ducks.forEach((duck) => {
            duck.x += duck.vx
            duck.frame += 0.1
            if (duck.frame >= this.ducksFrameOrder.length) {
                duck.frame = 0
            }
        })
    }

    updateDog() {
        if (this.dog.y > 0) {
            this.dog.y -= this.dog.velocity
            if (this.dog.y <= 0) {
                this.dog.y = 0
                this.calculation = true
            } 
        }
    }

    update() {
        this.updateDucks()
        this.updateDog()
    }
    
    drawDucks() {
        this.ducks.forEach((duck) => {
            let frame = this.ducksFrameOrder[Math.floor(duck.frame)]
            frame = duck.vx > 0 ? frame + 3 : frame + 6
            console.log(frame)
            this.images.duck.drawFrameRot(frame, duck.x, duck.y, 0, 0.5, 0.5, 2, 2)
            this.images.duckSign.drawRot(duck.x - 15, duck.y + 35, 0, 0.5, 0.5, 2, 2)
            this.drawText(duck.number, duck.x - 22, duck.y + 42, "white", "20px Verdana")
        })
    }

    drawDog() {
        this.images.dog.draw(this.dog.x, this.dog.y, 2, 2)
        const currentOperation = `${this.currentOperationA} x ${this.currentOperationB} ?` 
        this.drawText(currentOperation, 253, this.dog.y + 306, "white", "15px Verdana")
    }

    draw() {
        // background
        this.images.bg.draw(0, 0, 2, 2)
        
        this.drawDucks()
        this.drawDog()

        // foreground
        this.images.fg.draw(0, 0, 2, 2)
    }
}

new DuckHuntCalculator(480, 480).show()
