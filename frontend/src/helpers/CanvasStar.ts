import { randomInInterval, randomNumber } from '@/helpers/random';

export default function CanvasStar(ctx: any) {
  this.x = randomNumber(innerWidth);
  this.y = randomNumber(innerHeight);
  this.dx = randomInInterval(-0.05, 0.05);
  this.dy = randomInInterval(-0.05, 0.05);
  this.radius = randomNumber(1.5);
  this.opacity = randomInInterval(0, 1);

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity}`;
    ctx.stroke();
    ctx.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y - this.radius < 0 || this.y + this.radius > innerHeight) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
