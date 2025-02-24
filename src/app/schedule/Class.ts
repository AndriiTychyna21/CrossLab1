export class Class {
    date: Date;
    day: string;
    subject: string;
    group: string;
    classroom: number;
    constructor(D: Date, d: string, s: string, g: string, c: number){
        this.date = D;
        this.day = d;
        this.subject = s;
        this.group = g;
        this.classroom = c; 
    }
}