import { v4 as uuidv4 } from 'uuid';

export function randomNumber(num: number) {
  return Math.floor(Math.random() * num);
}

export function randomInIntervalFloor(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomInInterval(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomChoice(...args: number[]) {
  const argsArray = [];
  for (const element of args) {
    argsArray.push(element);
  }
  return argsArray[randomInInterval(0, args.length)];
}

export function getRandomId() {
  return uuidv4();
}
