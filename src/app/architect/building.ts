import { Architecture } from "./architecure";

export class Building extends Architecture{
    numberOfFloors: number
    constructor(n: string, h: number, y: number, nf: number){
        super(n, h, y);
        if (nf <= 0) throw new Error("Number of floors isn`t positive");
        this.numberOfFloors = nf;
    }

    override displayInfo(): string {
        let info = "Будинок \"" + this.name + "\", що був побудований в " + this.yearBuilt +
        ", має висоту " + this.height + "м. та " + this.numberOfFloors;
        let floors: string;
        if (this.numberOfFloors % 10 === 1 && this.numberOfFloors !== 11){
            floors = " поверх.";
        }
        else if (this.numberOfFloors % 10 < 5 && this.numberOfFloors % 10 < 5 && (this.numberOfFloors < 10 || this.numberOfFloors > 20)){
            floors = " поверхи.";
        }
        else {
            floors = " поверхів.";
        }
        return info + floors;
    }
}