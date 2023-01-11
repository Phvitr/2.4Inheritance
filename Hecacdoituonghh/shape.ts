export class Shape {
    private color: string = "black";
    private filled: boolean = false;

    constructor(color: string,filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    getcolor(): string {
        return this.color;
    }

    setcolor(color: string) {
        this.color = color;
    }

    getfilled(): boolean {
        return this.filled;
    }

    setfilled(filled: boolean) {
        this.filled = filled;
    }
    fill() {
        if (this.filled == true) {
            return "filled";
        }else if (this.filled == false) {
            return "not filled";
        }
    }
    toString(): string {
        return "A Shape with color of " + this.color + " and " + this.fill();
    }
}



