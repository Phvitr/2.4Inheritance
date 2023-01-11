import Rectangle from "./rectangle";
class Square extends Rectangle {
    private side: number;

    constructor(color: string,filled: boolean,width: number,height: number,side: number) {
        super(color,filled,width,height);
        this.side = side;
    }

}