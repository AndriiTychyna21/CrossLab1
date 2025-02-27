import { expand } from "rxjs";
import { Architecture } from "./architecure";

export class Bridge extends Architecture {
    length: number;
    constructor(n: string, h: number, y: number, l: number){
        super(n, h, y);
        this.length = l;
    }

    override displayInfo(): string {
        let info = "Міст \"" + this.name + "\", що був побудований в " + this.yearBuilt +
        ", має висоту " + this.height + "м. та довжину " + this.length;
        let meters: string;
        if (this.length % 10 === 1 && this.length !== 11){
            meters = " метр.";
        }
        else if (this.length % 10 < 5 && this.length % 10 !== 0 && (this.length < 10 || this.length > 20)){
            meters = " метри.";
        }
        else {
            meters = " метрів.";
        }
        return info + meters;
    }
}