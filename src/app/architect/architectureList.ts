import { Architecture } from "./architecure";
import { Building } from "./building";
import { Bridge } from "./bridge";

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
    }
}