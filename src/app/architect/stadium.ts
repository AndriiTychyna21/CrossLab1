import { Architecture } from "./architecure";

export class Stadium extends Architecture {
    seats: number = 0
    constructor(n: string, h: number, y: number, s: number){
        super(n, h, y);
        if (s <= 0) throw new Error("Number of seats isn`t positive");
        this.seats = s;
    }

    override displayInfo(): string {
        let info = "Стадіон \"" + this.name + "\", що був побудований в " + this.yearBuilt +
        ", має висоту " + this.height + "м. та " + this.seats;
        let num: string;
        if (this.seats % 10 === 1 && this.seats !== 11){
            num = " місце.";
        }
        else if (this.seats % 10 < 5 && this.seats % 10 !== 0 && (this.seats < 10 || this.seats > 20)){
            num = " місця.";
        }
        else {
            num = " місць.";
        }
        return info + num;
    }
}