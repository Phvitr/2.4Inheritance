import {Shape} from "./shape";

export class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(color: string,filled: boolean, width: number, height: number) {
        super(color,filled);
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }
    setWidth(width: number) {
        this.width = width;
    }
    getHeight(): number {
        return this.height;
    }
    setHeight(height: number) {
        this.height = height;
    }
    getArea(): number {
        return this.width*this.height;
    }
    getPerimeters(): number {
        return 2*(this.width+this.height);
    }
    toString(): string {
        return "A Rectangle with width="
    }
}

export default Rectangle