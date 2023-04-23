export default class Paddle {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.w = 120;
    this.h = 20;
    this.x = width / 2 - this.w / 2;
    this.y = height - 24;
    this.vel = 0;
      
  }
  draw(context) {
    context.fillStyle = "blue";
    context.fillRect(this.x, this.y, this.w, this.h);
  }
  update() {
    this.x += this.vel;
  }
  edges() {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + this.w > this.width) {
      this.x = this.width - this.w;
    }
  }
}
