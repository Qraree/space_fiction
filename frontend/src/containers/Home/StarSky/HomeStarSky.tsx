import React, {FC, useEffect, useRef} from 'react';
import styles from './HomeStarSky.module.scss';
import {randomInInterval, randomInIntervalFloor, randomNumber} from '@/helpers/random';
import useDeviceSize from '@/hooks/useDeviceSize';


const HomeStarSky: FC = () => {
    const [widthState, heightState] = useDeviceSize();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        // @ts-ignore
        const ctx = canvas.getContext('2d');
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        function Circle() {
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

                if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }

                this.x += this.dx;
                this.y += this.dy;
                this.draw();
            };
        }

        const circleArray: any = [];
        
        for (let i = 0; i < 2000; i++) {
            // @ts-ignore
            circleArray.push(new Circle());
        }

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].update();
            }
        };


        animate();

    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.starSkyContainer}>
            <canvas ref={canvasRef} />
            <button className={styles.button} onClick={handleClick}>
                Click
            </button>
        </div>
    );
};
 
export default HomeStarSky;