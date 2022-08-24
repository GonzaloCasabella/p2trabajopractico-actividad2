import {Circle, Rectangle, Square, Triangle,Rombo,Cuadrado} from './Shapes.js';

const triangle = new Triangle(10, 5);
const triangle2 = new Triangle(9, 19);
console.log(triangle.area());
console.log(triangle2.area());
console.log(triangle2.descripcion());

const square = new Square(10);
console.log(`Area: ${square.area()} - Perimeter: ${square.perimeter()}`);

const rectangle = new Rectangle(10, 10);
console.log(`Area: ${rectangle.area()} - Perimeter: ${rectangle.perimeter()}`);

const circle = new Circle(12);
console.log(circle.perimeter());

const rombo = new Rombo(8, 6);
console.log(`Area: ${rombo.area()} - Perimeter: ${rombo.perimeter()}`);

const cuadrado = new Cuadrado(12, 7);
console.log(`Area: ${cuadrado.area()} - Perimeter: ${cuadrado.perimeter()}`);