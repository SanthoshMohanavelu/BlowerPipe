class BlowerMouth {
    constructor(x, y, width, height) {
      let options = {
        isStatic: true
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x = x
      this.y = y
      this.width = width
      this.height = height

      World.add(world, this.body)
    }
  
    show() {
      var pos = this.body.position

      
      push();
      translate(pos.x, pos.y)
      rectMode(CENTER)
      fill("red")
      rect(0, 0, this.width, this.height)
      pop();
    }
  }