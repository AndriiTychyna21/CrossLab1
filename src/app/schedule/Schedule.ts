import {Class} from './Class'

export class Schedule {
    teacherSchedule: Class[] = [];
    addClass(c: Class){
        this.teacherSchedule.push(c);
    }
    sort() {
        this.teacherSchedule.sort((a, b) => a.date.getTime() - b.date.getTime())
    }
}