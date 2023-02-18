
export default function RocketShip(ctx: any) {
    this.x = 200;
    this.y = 200;
    this.dx = 0.5;
    this.dy = 0.1;
    this.radius = 1;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'rgba(255, 0, 0, 0.4)';
        ctx.lineWidth = 5;
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.stroke();
        ctx.fill();

    };

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.y - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.x - this.radius < 0 || this.y + this.radius > innerHeight) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };
}
