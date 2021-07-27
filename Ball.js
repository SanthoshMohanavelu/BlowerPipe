class Ball {
    constructor(x, y, width, height) {
      let options = {
        restitution: 0.8
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x = x
      this.y = y
      this.width = width;
      this.height = height;
  
      World.add(world, this.body)
    }
  
    show() {
      var pos = this.body.position
      var angle = this.body.angle

      push();
      translate(pos.x, pos.y)
      rotate(angle)
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    }
  }