import { Architecture } from "./architecure";
import { Building } from "./building";
import { Bridge } from "./bridge";
import { Stadium } from "./stadium";

export class ArchitectureList {
    archList: Architecture[];
    constructor(){
        this.archList = [];
    }

    addArch(type: string, n: string, h: number, y: number, atr: number){
        if (type == "Bridge"){
            this.archList.push(new Bridge(n, h, y, atr));
        }
        else if (type == "Building"){
            this.archList.push(new Building(n, h, y, atr));
        }
        else if (type == "Stadium"){
            this.archList.push(new Stadium(n, h, y, atr));
        }
        else throw new Error("Unknown architecture")
    }
}