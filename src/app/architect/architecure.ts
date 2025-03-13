export abstract class Architecture{
    name: string;
    height: number;
    yearBuilt: number;
    constructor(n: string, h: number, y: number){
        if (h <= 0) throw new Error("Height isn`t positive");
        if (y > 2025) throw new Error("The structure is built in the future");
        this.name = n;
        this.height = h;
        this.yearBuilt = y;
    }

    getHeight(){
        return this.height;
    }

    abstract displayInfo(): string;
}