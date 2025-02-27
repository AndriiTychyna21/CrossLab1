export abstract class Architecture{
    name: string;
    height: number;
    yearBuilt: number;
    constructor(n: string, h: number, y: number){
        this.name = n;
        this.height = h;
        this.yearBuilt = y;
    }

    getHeight(){
        return this.height;
    }

    abstract displayInfo(): string;
}