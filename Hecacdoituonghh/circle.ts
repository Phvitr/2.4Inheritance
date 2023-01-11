import {Shape} from "./shape";

export class Circle extends Shape {
    private radius: number = 0;

    constructor(radius: number, color: string, filled: boolean){
        super(color, filled);
        this.radius = radius;
    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return this.radius**2*3.14
    }
    getPerimeters(): number {
        return this.radius*2*3.14
    }
    toString(): string {
        return "A Circle with radius " + this.getRadius() + "is a subclass of " + super.toString();
    }
}