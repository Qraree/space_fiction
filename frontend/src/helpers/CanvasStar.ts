import {randomChoice, randomInInterval, randomNumber} from '@/helpers/random';

export function CanvasStar(ctx: any) {
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
        if (this.x + this.radius > innerWidth || this.y - this.radius < 0) {
            this.x = randomChoice(0, randomNumber(innerWidth));
            if (this.x === 0) {
                this.y = randomNumber(innerHeight);
            } else {
                this.y = innerHeight;
            }
        }

        if (this.x - this.radius < 0 || this.y + this.radius > innerHeight) {
            this.x = randomChoice(innerWidth, randomNumber(innerWidth));
            if (this.x === innerWidth) {
                this.y = randomNumber(innerHeight);
            } else {
                this.y = 0;
            }
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };
}

